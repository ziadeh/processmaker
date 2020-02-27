---
description: >-
  Use this expression syntax to determine how controls in your ProcessMaker
  Screen show or hide in run-time.
---

# Expression Syntax Components for "Visibility Rule" Control Settings

## Expression Syntax Components for "Visibility Rule" Control Settings

Use the following expression syntax components to compose the expression that describes under which condition\(s\) a ProcessMaker Screen control displays.

If an expression in a control evaluates as True, then that control displays during a [Request](../../../../using-processmaker/requests/what-is-a-request.md). If an expression in a control does not evaluate as True, then that control does not display during a Request.

Spaces are allowed before and after expression components, such as [arithmetic](expression-syntax-components-for-show-if-control-settings.md#arithmetic-operations) and [comparison](expression-syntax-components-for-show-if-control-settings.md#comparison-operators) operators, to more easily read the expression.

Combine expressions using [logical operators](expression-syntax-components-for-show-if-control-settings.md#logical-operators). Example: `(not approved) or (cost > 500)`.

{% hint style="info" %}
### First Rule for the Visibility Rule Setting

If a ProcessMaker Screen control does not have an expression in its **Visibility Rule** setting, then that control displays by default.

### Magic Variables

[Magic Variables](../../../reference-global-variables-in-your-processmaker-assets.md) can be used in when composing expressions.
{% endhint %}

### Literals

| Component | Syntax | Expression Example |
| :--- | :--- | :--- |
| string | `"hello"` or `'hello'` | `FullNameInput == "Louis Canera"` |
| number | `100` | `cost > 500` |
| array | `[`value1`,` value2`]` | `myFruit not in ["apples", "oranges"]` |
| Boolean | `true` and `false` | `directorSigned` |

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

{% hint style="info" %}
Consider the following example common for [Select List](select-list-control-settings.md#control-description) controls configured to allow multiple selections. Suppose a Select List control with a **Variable Name** setting of `SelectListControl` has the following options:

* Beatty
* Fred
* Nancy
* Tom

To configure another control in that ProcessMaker Screen to remain hidden if the `Fred` option is not among the selections, use the following expression in the **Visibility Rule** setting for the control that is to remain hidden:

`not("Fred" in SelectListControl)`
{% endhint %}

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

{% hint style="info" %}
Consider the following example common for [Select List](select-list-control-settings.md#control-description) controls configured to allow multiple selections. Suppose a Select List control with a **Variable Name** setting of `SelectListControl` has the following options:

* Beatty
* Fred
* Nancy
* Tom

To configure another control in that ProcessMaker Screen to remain hidden if the `Fred` option is not among the selections, use the following expression in the **Visibility Rule** setting for the control that is to remain hidden:

`not("Fred" in SelectListControl)`
{% endhint %}

### Range

| Component | Syntax | Example |
| :--- | :--- | :--- |
| range | `..` | `foo in 1..10` |

## Related Topics <a id="related-topics"></a>

{% page-ref page="../types-for-screens.md" %}

{% page-ref page="../screens-builder-modes.md" %}

{% page-ref page="../validate-your-screen.md" %}

{% page-ref page="./" %}

{% page-ref page="rich-text-control-settings.md" %}

{% page-ref page="line-input-control-settings.md" %}

{% page-ref page="textarea-control-settings.md" %}

{% page-ref page="select-list-control-settings.md" %}

{% page-ref page="checkbox-control-settings.md" %}

{% page-ref page="date-picker-control-settings.md" %}

{% page-ref page="page-navigation-button-control-settings.md" %}

{% page-ref page="multi-column-button-control-settings.md" %}

{% page-ref page="loop-control-settings.md" %}

{% page-ref page="record-list-control-settings.md" %}

{% page-ref page="image-control-settings.md" %}

{% page-ref page="submit-button-control-settings.md" %}

{% page-ref page="nested-screen-control-settings.md" %}

{% page-ref page="file-upload-control-settings.md" %}

{% page-ref page="file-download-control-settings.md" %}

{% page-ref page="validation-rules-for-validation-control-settings.md" %}

