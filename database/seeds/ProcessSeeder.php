<?php

use Illuminate\Database\Seeder;
use ProcessMaker\Model\Process;
use ProcessMaker\Model\Form;
use ProcessMaker\Model\Script;
use ProcessMaker\Providers\WorkflowServiceProvider;

class ProcessSeeder extends Seeder
{

    const mimeTypes = [
        'javascript' => 'application/javascript',
        'lua' => 'application/x-lua',
        'php' => 'application/x-php',
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (glob(database_path('processes') . '/*.bpmn') as $filename) {
            echo 'Creating: ', $filename, "\n";
            $process = factory(Process::class)->make([
                'bpmn' => file_get_contents($filename),
            ]);
            //Load the process title from the the main process of the BPMN definition
            $processes = $process->getDefinitions()->getElementsByTagName('process');
            if ($processes->item(0)) {
                $processDefinition = $processes->item(0)->getBpmnElementInstance();
                if (!empty($processDefinition->getName())) {
                    $process->name = $processDefinition->getName();
                }
            }
            //Or load the process title from the collaboration of the BPMN definition
            $collaborations = $process->getDefinitions()->getElementsByTagName('collaboration');
            if ($collaborations->item(0)) {
                $collaborationDefinition = $collaborations->item(0)->getBpmnElementInstance();
                if (!empty($collaborationDefinition->getName())) {
                    $process->name = $collaborationDefinition->getName();
                }
            }
            $process->save();

            $definitions = $process->getDefinitions();

            //Create scripts from the BPMN process definition
            $scriptTasks = $definitions->getElementsByTagName('scriptTask');
            foreach ($scriptTasks as $scriptTaskNode) {
                $scriptTask = $scriptTaskNode->getBpmnElementInstance();
                //Create a row in the Scripts table
                $script = factory(Script::class)->create([
                    'title' => $scriptTask->getName('name') . ' Script',
                    'code' => $scriptTaskNode->getElementsByTagName('script')->item(0)->nodeValue,
                    'language' => $this->languageOfMimeType($scriptTask->getScriptFormat()),
                    'process_id' => $process->id,
                ]);
                $scriptTaskNode->setAttributeNS(
                    WorkflowServiceProvider::PROCESS_MAKER_NS, 'scriptRef', $script->uid
                );
                $scriptTaskNode->setAttributeNS(
                    WorkflowServiceProvider::PROCESS_MAKER_NS, 'scriptConfiguration', '{}'
                );
            }

            //Add forms to the process
            $tasks = $definitions->getElementsByTagName('task');
            foreach($tasks as $task) {
                $formRef = $task->getAttributeNS(WorkflowServiceProvider::PROCESS_MAKER_NS, 'formRef');
                $id = $task->getAttribute('id');
                if ($formRef) {
                    $form = $this->createForm($id, $formRef, $process);
                    $task->setAttributeNS(WorkflowServiceProvider::PROCESS_MAKER_NS, 'formRef', $form->uid);
                }
            }


            //Update the form and script references in the BPMN of the process
            $process->bpmn = $definitions->saveXML();
            $process->save();

            echo 'Process created: ', $process->uid, "\n";
        }
    }

    /**
     * Load the JSON of a form.
     *
     * @param string $id
     * @param string $formRef
     * @param string $process
     *
     * @return object
     */
    private function createForm($id, $formRef, $process) {

        if (file_exists(database_path('processes/forms/' . $formRef . '.json'))) {
            $json = json_decode(file_get_contents(database_path('processes/forms/' . $formRef . '.json')));
            return factory(Form::class)->create([
                        'title' => $json[0]->name,
                        'content' => $json,
                        'process_id' => $process->id,
            ]);
        } elseif (file_exists(database_path('processes/forms/' . $id . '.json'))) {
            $json = json_decode(file_get_contents(database_path('processes/forms/' . $id . '.json')));
            return factory(Form::class)->create([
                        'uid' => $formRef,
                        'title' => $json[0]->name,
                        'content' => $json,
                        'process_id' => $process->id,
            ]);
        }
    }

    private function languageOfMimeType($mime)
    {
        return in_array($mime, self::mimeTypes) ? array_search($mime, self::mimeTypes) : '';
    }
}
