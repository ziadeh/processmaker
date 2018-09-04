<?php

namespace ProcessMaker\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use ProcessMaker\Exception\ValidationException;
use ProcessMaker\Model\Traits\Uuid;
use Watson\Validating\ValidatingTrait;

/**
 * Class InputDocument
 * @package ProcessMaker\Model
 *
 * @property int id
 * @property string uid
 * @property int process_id
 * @property string title
 * @property string description
 * @property string form_needed
 * @property string original
 * @property string published
 * @property int versioning
 * @property string destination_path
 * @property string tags
 * @property string type_file
 * @property int max_filesize
 * @property string max_filesize_unit
 * 
 */
class InputDocument extends Model
{
    use ValidatingTrait {
        isValid as public validatingIsValid;
    }
    use Uuid;

    protected $table = 'input_documents';
    protected $injectUniqueIdentifier = true;

    /**
     * Values for form_needed
     */
    const FORM_NEEDED_TYPE = [
        'VIRTUAL' => 'Digital',
        'REAL' => 'Printed',
        'VREAL' => 'Digital/Printed'
    ];

    /**
     * Values for original
     */
    const DOC_ORIGINAL_TYPE = [
        'ORIGINAL',
        'COPY',
        'COPYLEGAL'
    ];

    /**
     * Values for published
     */
    const DOC_PUBLISHED_TYPE = [
        'PRIVATE',
        'PUBLIC'
    ];

    /**
     * Values for tags
     */
    const DOC_TAGS_TYPE = [
        'INPUT'
    ];

//    private static $rules = [
//        'insert' => [
//            'uid' => 'max:36',
//            'title' => 'required|unique:input_documents,title',
//            'process_id' => 'exists:processes,id',
//            'versioning' => 'required|boolean'
//        ],
//
//        'update' => [
//            'uid' => 'max:36',
//            'title' => 'required|unique:input_documents,title',
//            'process_id' => 'exists:processes,id',
//            'versioning' => 'required|boolean'
//        ]
//    ];

    protected $fillable = [
        'uid',
        'process_id',
        'title',
        'description',
        'form_needed',
        'original',
        'published',
        'versioning',
        'destination_path',
        'tags',
        'type_file',
        'max_filesize',
        'max_filesize_unit'
    ];

    protected $attributes = [
        'uid' => null,
        'process_id' => '',
        'title' => null,
        'description' => null,
        'form_needed' => 'REAL',
        'original' => 'COPY',
        'published' => 'PRIVATE',
        'versioning' => 0,
        'destination_path' => null,
        'tags' => null,
        'type_file' => '*.*',
        'max_filesize' => 0,
        'max_filesize_unit' => 'KB'
    ];

    protected $casts = [
        'uid' => 'string',
        'process_id' => 'int',
        'title' => 'string',
        'description' => 'string',
        'form_needed' => 'string',
        'original' => 'string',
        'published' => 'string',
        'versioning' => 'int',
        'destination_path' => 'string',
        'tags' => 'string',
        'type_file' => 'string',
        'max_filesize' => 'int',
        'max_filesize_unit' => 'string'
    ];

    protected $rules = [
    ];

//    public static function rules()
//    {
//        return $rules = [
//            'uid' => 'max:36',
//            'title' => 'required|unique:input_documents,title',
//            'process_id' => 'exists:processes,id',
//            'versioning' => 'required|boolean'
//        ];
//    }

    protected $validationMessages = [
        'title.unique' => 'A Input Document with the same name already exists in this process.',
        'process_id.exists' => 'Process not found.'
    ];

    /**
     * Validating fields unique
     *
     * @param $parameters
     * @param $field
     *
     * @return \Illuminate\Validation\Rules\Unique
     */
    protected function prepareUniqueRule($parameters, $field)
    {
        if ($field === 'title') {
            return Rule::unique('input_documents')->where(function ($query) {
                $query->where('process_id', $this->process_id);
            })->ignore($this->id);
        }
    }

    /**
     * Get the route key for the model.
     *
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'uid';
    }

    /**
     * Get the translation of Type form needed
     *
     * @param string $value
     *
     * @return string
     */
    public function getFormNeededAttribute($value): ?string
    {
        if (!array_key_exists($value, self::FORM_NEEDED_TYPE)) {
            return null;
        }

        return __(self::FORM_NEEDED_TYPE[$value]);
    }

    public function process()
    {
        return $this->belongsTo(Process::class);
    }

    /**
     * Validate extra rules
     *
     * @param array $data
     * @param boolean $update
     *
     * @throws ValidationException
     */
    public function isValid($update = false)
    {
        if (!$this->validatingIsValid()) {
            return false;
        }

        /* @var $validator \Illuminate\Validation\Validator */
        $validator = Validator::make(
            $this->toArray(),
            [
                'form_needed' => 'required|in:' . implode(',', array_values(InputDocument::FORM_NEEDED_TYPE)),
                'original' => 'required|in:' . implode(',', InputDocument::DOC_ORIGINAL_TYPE),
                'published' => 'required|in:' . implode(',', InputDocument::DOC_PUBLISHED_TYPE),
                'tags' => 'required|in:' . implode(',', InputDocument::DOC_TAGS_TYPE)
            ]
        );

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }

        return true;
    }
}
