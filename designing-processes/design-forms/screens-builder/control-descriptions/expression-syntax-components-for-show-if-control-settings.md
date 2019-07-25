---
description: >-
  Use this expression syntax to determine how controls in your ProcessMaker
  Screen show or hide in run-time.
---

# Expression Syntax Components for "Visibility Rule" Control Settings

## Expression Syntax Components for "Visibility Rule" Control Settings

Use the following expression syntax components to compose the expression that describes under which condition\(s\) a ProcessMaker Screen control displays.

If an expression in a control evaluates as True, then that control displays in run-time during a [Request](../../../../using-processmaker/requests/what-is-a-request.md).

If an expression in a control does not evaluate as True, then that control does not display in run-time during a Request.

{% hint style="info" %}
If a ProcessMaker Screen control does not have an expression in its **Visibility Rule** setting, then that control displays by default.
{% endhint %}

### Literals

| Component | Syntax | Example |
| :--- | :--- | :--- |
| string | `"hello"` or `'hello'` | `FullNameInput=="Louis Canera"` |
| number | `100` |  |
| array | `[`value1`,` value2`]` | `[1, 2]` |
| hash | `{foo: "`value`"}` | `{foo: "bar"}` |
| Boolean | `true` and `false` |  |

{% hint style="info" %}
`string` component accepts a variable placeholder. Reference the control's **Key Name** setting value to represent the variable. Use mustache syntax. Example: `{{FullNameInput}}=="Louis Canera"`
{% endhint %}

### Arithmetic Operations

| Component | Syntax |
| :--- | :--- |
| addition | `+` |
| subtraction | `-` |
| multiplication | `*` |
| division | `/` |

### Logical Operators

| Component | Syntax |
| :--- | :--- |
| not | `not` |
| and | `and` |
| or | `or` |

### Comparison Operators

| Component | Syntax |
| :--- | :--- |
| equal to | `==` |
| not equal to | `!=` |
| less than | `<` |
| greater than | `>` |
| less than or equal to | `<=` |
| greater than or equal to | `>=` |

### String Operator

| Component | Syntax |
| :--- | :--- |
| concatenate matches | `~` |

### Array Operators

| Component | Syntax |
| :--- | :--- |
| contains | `in` |
| does not contain | `not in` |

### Ternary

| Component | Syntax | Example |
| :--- | :--- | :--- |
| ternary | tested value `?` if true then value `:` else then value | `foo ? bar : baz` |

### Range

| Component | Syntax | Example |
| :--- | :--- | :--- |
| range | `..` | `foo in 1..10` |

## Related Topics <a id="related-topics"></a>

{% page-ref page="../types-for-screens.md" %}

{% page-ref page="../validate-your-screen.md" %}

{% page-ref page="./" %}

{% page-ref page="text-control-settings.md" %}

{% page-ref page="rich-text-control-settings.md" %}

{% page-ref page="line-input-control-settings.md" %}

{% page-ref page="textarea-control-settings.md" %}

{% page-ref page="select-control-settings.md" %}

{% page-ref page="radio-group-control-settings.md" %}

{% page-ref page="checkbox-control-settings.md" %}

{% page-ref page="date-picker-control-settings.md" %}

{% page-ref page="page-navigation-button-control-settings.md" %}

{% page-ref page="multi-column-button-control-settings.md" %}

{% page-ref page="record-list-control-settings.md" %}

{% page-ref page="image-control-settings.md" %}

{% page-ref page="submit-button-control-settings.md" %}

{% page-ref page="file-upload-control-settings.md" %}

{% page-ref page="file-download-control-settings.md" %}

{% page-ref page="validation-rules-for-validation-control-settings.md" %}

