---
description: Add and configure Script Task elements in your Process model.
---

# Add and Configure Script Task Elements

## Add a Script Task Element

{% hint style="info" %}
### Don't Know What a Script Task Element Is?

See [Process Modeling Element Descriptions](process-modeling-element-descriptions.md) for a description of the [Script Task](process-modeling-element-descriptions.md#script-task) element.

### Permissions Required

Your ProcessMaker user account or group membership must have the following permissions to add a Script Task element to the Process model unless your user account has the **Make this user a Super Admin** setting selected:

* Processes: View Processes
* Processes: Edit Processes

See the [Process](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to add a Script Task element to the Process model:

1. [View your Processes](https://processmaker.gitbook.io/processmaker-4-community/-LPblkrcFWowWJ6HZdhC/~/drafts/-LRhVZm0ddxDcGGdN5ZN/primary/designing-processes/viewing-processes/view-the-list-of-processes/view-your-processes#view-all-processes). The **Processes** page displays.
2. [Create a new Process](../../viewing-processes/view-the-list-of-processes/create-a-process.md) or click the **Open Modeler** icon![](../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)to edit the selected Process model. Process Modeler displays.
3. Locate the **Script Task** element in the panel to the left of the Process Modeler canvas.

   ![](../../../.gitbook/assets/script-task-bpmn-side-bar-process-modeler-processes.png)

4. Drag the element into the Process model canvas where you want to place it. If a Pool element is in your Process model, the Script Task element cannot be placed outside of the Pool element.

![Script Task element](../../../.gitbook/assets/script-task-process-modeler-processes.png)

After the element is placed into the Process model, you may move it by dragging it to the new location.

{% hint style="warning" %}
Moving a Script Task element has the following limitations in regards to the following Process model elements:

* **Pool element:** If the Script Task element is inside of a [Pool](process-modeling-element-descriptions.md#pool) element, it cannot be moved outside of the Pool element. If you attempt to do so, Process Modeler places the Script Task element inside the Pool element closest to where you attempted to move it.
* **Lane element:** If the Script Task element is inside of a Lane element, it can be moved to another Lane element in the same Pool element. However, the Script Task element cannot be moved outside of the Pool element.
{% endhint %}

## Settings

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to configure a Script Task element unless your user account has the **Make this user a Super Admin** setting selected:

* Processes: View Processes
* Processes: Edit Processes

See the [Process](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

The Script Task element has the following panels that contain settings:

* **Configuration** panel
  * Edit the element name
* **Advanced** panel
  * Edit the element's identifier value

### Edit the Element's Identifier Value

Process Modeler automatically assigns a unique value to each Process element added to a Process model. However, an element's identifier value can be changed if it is unique to all other elements in the Process model, including the Process model's identifier value.

{% hint style="warning" %}
All identifier values for all elements in the Process model must be unique.
{% endhint %}

Follow these steps to edit the identifier value for a Script Task element:

1. Select the Script Task element from the Process model in which to edit its identifier value. The **Configuration** setting section displays.
2. Expand the **Configuration** setting section if it is not presently expanded. The **Identifier** field displays. This is a required field.  

   ![](../../../.gitbook/assets/script-task-configuration-identifier-name-process-modeler-processes.png)

3. In the **Identifier** field, edit the Script Task element's identifier to a unique value from all elements in the Process model and then press **Enter**. The element's identifier value is changed.

### Edit the Element Name

An element name is a human-readable reference for a process element. Process Modeler automatically assigns the name of a Process element with its element type. However, an element's name can be changed.

Follow these steps to edit the name for a Script Task element:

1. Select the Script Task element from the Process model in which to edit its name. The **Configuration** setting section displays.
2. Expand the **Configuration** setting section if it is not presently expanded. The **Name** field displays.  

   ![](../../../.gitbook/assets/script-task-configuration-name-process-modeler-processes.png)

3. In the **Name** field, edit the selected element's name and then press **Enter**. The element's name is changed.

### Select the ProcessMaker Script for a Script Task Element

Since Script Task elements are designed to run a ProcessMaker Script, specify which ProcessMaker Script a selected Script Task element uses. A ProcessMaker Script must already exist before it can be selected for use in a Script Task element.

{% hint style="info" %}
See the following topics for more information:

* [What is a Script?](../../scripts/what-is-a-script.md)
* [Scripts Editor](../../scripts/scripts-editor.md)
{% endhint %}

{% hint style="warning" %}
Ensure to select a ProcessMaker Script for each Script Task element in your Process model. If a ProcessMaker Script is not specified and Requests are started for that Process, Requests associated with that Process will stall and never complete because there is no ProcessMaker Script to run for the Script Task element\(s\).
{% endhint %}

Follow these steps to select a ProcessMaker Script for a Script Task element:

1. Select the Script Task element from the Process model in which to specify its ProcessMaker Script. The **Configuration** setting section displays.
2. Expand the **Configuration** setting section if it is not presently expanded, and then scroll to the **Script** drop-down menu.  

   ![](../../../.gitbook/assets/script-drop-down-script-task-process-modeler-processes.png)

3. From the **Script** drop-down menu, select which ProcessMaker Script that Script Task element references. Note that another Script Task element located elsewhere in the Process model may reference a different ProcessMaker Script that runs a different script when it triggers.

{% hint style="warning" %}
If no ProcessMaker Scripts exist, the **Script** drop-down menu contains no options. Ensure to select and configure a ProcessMaker Script for every Script Task element in the Process model before deploying your Process.
{% endhint %}

### Configure the ProcessMaker Script Selected for a Script Task Element

After [selecting the ProcessMaker Script for the Script Task element](add-and-configure-script-task-elements.md#select-the-processmaker-script-for-a-script-task-element), optionally provide a JSON script that configures variable values for the selected ProcessMaker Script. Providing a JSON script from the Script Task is identical to providing JSON configuration script in the **Script Config JSON** panel in Scripts Editor for a ProcessMaker Script.

{% hint style="info" %}
See the following topics for more information:

* [What is a Script?](../../scripts/what-is-a-script.md)
* [Scripts Editor](../../scripts/scripts-editor.md)
{% endhint %}

If a JSON script exists in the Script Task element, that script is used for the ProcessMaker Script. An existing JSON configuration script displays in the **Script Configuration** option for a selected Script Task element.

{% hint style="warning" %}
The JSON script in the Script Task element overrides any JSON script entered in the **Script Config JSON** panel in Scripts Editor for the associated ProcessMaker Script.
{% endhint %}

Follow these steps to enter or edit a JSON configuration script for a Script Task element:

1. Select the Script Task element from the Process model in which to specify its ProcessMaker Script. The **Configuration** setting section displays.
2. Expand the **Configuration** setting section if it is not presently expanded, and then scroll to the **Script Configuration** option displays.  

   ![](../../../.gitbook/assets/script-configuration-script-task-process-modeler-processes.png)

3. [Select the ProcessMaker Script for the Script Task element.](add-and-configure-script-task-elements.md#select-the-processmaker-script-for-a-script-task-element)
4. Click the icon![](../../../.gitbook/assets/json-configuration-script-icon-script-task-element-process-modeler-processes.png)beside the **Script Configuration** option. The **Script Config Editor** displays.  

   ![](../../../.gitbook/assets/script-config-editor-task-element-process-modeler-processses.png)

5. Enter your JSON configuration script. Use the scroll panel to the right of the ProcessMaker Script to scroll to different sections of the Script if necessary. This is useful especially when you are editing a long ProcessMaker Script.
6. Click **Close** or the **Close** icon![](../../../.gitbook/assets/close-script-config-editor-script-task-element-process-modeler-processes.png). The JSON configuration script is saved.

{% hint style="info" %}
You can enter your JSON configuration script directly into the **Script Configuration** option instead of using the **Script Config Editor**.
{% endhint %}

## Assign ProcessMaker Vocabularies That Validate Request Data from This Element

{% hint style="info" %}
### ProcessMaker Package Required

Your ProcessMaker instance must have the [Vocabularies package](../../../package-development-distribution/package-a-connector/vocabularies.md) installed to assign which ProcessMaker Vocabularies validate Request data at a Script Task element. Use the Vocabularies package to maintain uniform JSON schemas across all assets in your organization. These assets include [Processes](../../viewing-processes/what-is-a-process.md), [ProcessMaker Screens](../../design-forms/what-is-a-form.md), and [ProcessMaker Scripts](../../scripts/what-is-a-script.md).

A ProcessMaker Vocabulary is a JSON schema. The JSON schema describes the data objects, types, and structure that you want in both a machine and human readable format. Apply one or more ProcessMaker Vocabularies to your Processes and/or specific BPMN 2.0 elements in your Process models to ensure the JSON data model in Request data complies with the data structure outlined in the JSON schema that you need to meet regulatory specifications or ensure Request data contains required information.

The Vocabularies package is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Vocabularies package can be installed in your ProcessMaker instance.

### Permissions Required

Your ProcessMaker user account or group membership must have the following permissions to set which ProcessMaker user or group can start a Request for a Process unless your user account has the **Make this user a Super Admin** setting selected:

* Processes: View Processes
* Processes: Edit Processes

See the [Process](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Assign [ProcessMaker Vocabularies](../../vocabularies-management/what-is-a-vocabulary.md) that validate Request data complies with a specific JSON schema. This is often mandatory for many types of business sectors including banking and healthcare. Ensure the quality and compliance of Request data. For example, during a Loan Application process, ensure that personal information has been included in the Request to that moment in that in-progress Request. The Vocabularies package must be installed in your ProcessMaker instance to make this configuration.

Use a ProcessMaker Vocabulary on a Script Task element to validate Request data complies with the Vocabulary's JSON schema after the Script Task runs its ProcessMaker Script but prior to when the Request continues workflow. See [What is a Vocabulary?](../../vocabularies-management/what-is-a-vocabulary.md) for more information.

Each moment ProcessMaker evaluates workflow routing for an in-progress Request, ProcessMaker also evaluates the Request data's conformity to the ProcessMaker Vocabularies applied to the Process and/or a specific BPMN 2.0 element in the Process model. The Request's JSON data model must conform to the ProcessMaker Vocabulary's JSON schema.

During an in-progress Request, if ProcessMaker evaluates that the Request data no longer complies with all ProcessMaker Vocabularies to that moment, the Request status changes from In Progress to Error. The error displays in the [Request summary](../../../using-processmaker/requests/request-details/summary-for-requests-with-errors.md). ProcessMaker Vocabularies are cumulative in an in-progress Request: as the Request progresses, if Request data does not conform with any Vocabulary's JSON schema to that moment in the Request, the Request errors.

If no ProcessMaker Vocabularies are assigned, ProcessMaker does not validate Request data complies with a specific JSON schema prior to continuing workflow for that Request.

One or more ProcessMaker Vocabularies must be created to your ProcessMaker instance before assigning a Vocabulary. See [Create a New Vocabulary](../../vocabularies-management/manage-your-vocabularies/create-a-new-vocabulary.md#create-a-new-processmaker-vocabulary). Multiple ProcessMaker Vocabularies can be assigned to a Start Event element.

Follow these steps to assign ProcessMaker Vocabularies that validate Request data from a Script Task element:

1. Select the Script Task element from the Process model in which to assign ProcessMaker Vocabularies that validate Request data prior to when this element completes. The **Configuration** setting section displays.
2. Expand the **Vocabularies** setting section. The **Assigned** setting displays.
3. Click the![](../../../.gitbook/assets/add-icon.png)icon to add a ProcessMaker Vocabulary. The **Assign Vocabulary** option displays. ![](../../../.gitbook/assets/assign-vocabulary-option-process-modeler-processes.png) 
4. From the **Select Vocabulary** drop-down menu, select a ProcessMaker Vocabulary from which to validate Request data complies with its JSON schema.

   To remove a ProcessMaker Vocabulary that is currently selected, select the Vocabulary again or press `Enter` when the drop-down is visible.

   If no ProcessMaker Vocabularies are configured in your ProcessMaker instance, then the following message displays: **List is empty.** Create at least one ProcessMaker Vocabulary. See [Create a New Vocabulary](../../vocabularies-management/manage-your-vocabularies/create-a-new-vocabulary.md#create-a-new-processmaker-vocabulary).

5. Click **Save**.
6. Repeat Steps 3 through 5 as necessary for each ProcessMaker Vocabulary required to validate Request data complies with its JSON schema.

{% hint style="info" %}
Click the **Remove** icon![](../../../.gitbook/assets/delete-remove-icon.png)from the **Vocabularies** setting to remove a ProcessMaker Vocabulary from assignment to this element.
{% endhint %}

After one or more ProcessMaker Vocabularies are assigned to a Script Task element, the Vocabulary icon displays above that element.

![Script Task element with an assigned ProcessMaker Vocabulary](../../../.gitbook/assets/script-task-vocabulary-process-modeler-processes.png)

## Related Topics

{% page-ref page="process-modeling-element-descriptions.md" %}

{% page-ref page="../../viewing-processes/view-the-list-of-processes/view-your-processes.md" %}

{% page-ref page="../../viewing-processes/view-the-list-of-processes/create-a-process.md" %}

{% page-ref page="../../scripts/what-is-a-script.md" %}

{% page-ref page="../../scripts/scripts-editor.md" %}

{% page-ref page="../remove-process-model-elements.md" %}

{% page-ref page="../../../package-development-distribution/package-a-connector/vocabularies.md" %}

{% page-ref page="../../vocabularies-management/what-is-a-vocabulary.md" %}

{% page-ref page="../../vocabularies-management/manage-your-vocabularies/create-a-new-vocabulary.md" %}

{% page-ref page="../../../using-processmaker/requests/request-details/summary-for-requests-with-errors.md" %}

