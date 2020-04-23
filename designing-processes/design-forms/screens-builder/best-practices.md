---
description: Follow best practices when designing ProcessMaker Screens.
---

# Screen Builder Best Practices

## Screen Builder Best Practices

Follow these best practices when designing ProcessMaker Screens in your organization:

* **Variable Name setting best practice for controls:** Controls that have the **Variable Name** setting use this value as a variable name in the ProcessMaker Screen in which that control is used. Use unique **Variable Name** settings from any other control of the same type in all ProcessMaker Screens in your organization. Why? If a Process uses two different ProcessMaker Screens in which two controls of the same type have the same **Variable Name** setting, the value of the first ProcessMaker Screen's control overwrites the value of the second during Requests.

  For example, suppose you have a Process that uses two different ProcessMaker Screens that have a Line Input control with the setting `FirstName`. During a Request, the first Line Input control receives a value. As the Request continues, that Line Input control's value automatically overwrites any value in the second ProcessMaker Screen's Line Input control because they have the same **Variable Name** setting. This may be unintended. This is why it is helpful to experiment with JSON data models in [Preview mode](preview-a-screen.md).

  To avoid this issue, establish a naming convention with all Process Owners in your organization for **Variable Name** settings. For example, use a naming convention such as `<ScreenName>_<FieldName>`. This naming convention minimizes two controls of the same type in different ProcessMaker Screens to have identical names.

* **CSS Selector Name setting for controls:** Use the same **CSS Selector Name** value on different controls of the same type to apply the same custom CSS style to all those controls.

## Related Topics

{% page-ref page="../what-is-a-form.md" %}

{% page-ref page="what-is-screens-builder.md" %}

{% page-ref page="types-for-screens.md" %}

{% page-ref page="screens-builder-modes.md" %}

{% page-ref page="validate-your-screen.md" %}

{% page-ref page="control-descriptions/" %}

{% page-ref page="add-a-new-page-to-a-screen.md" %}

{% page-ref page="preview-a-screen.md" %}

{% page-ref page="manage-computed-properties/" %}

{% page-ref page="add-custom-css-to-a-screen.md" %}

{% page-ref page="manage-watchers/" %}

{% page-ref page="how-to-use-the-undo-and-redo-buttons-in-screen-builder.md" %}

{% page-ref page="save-a-screen.md" %}



