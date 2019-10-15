---
description: >-
  Add a control that displays a text field that allows the Request participant
  to enter plain text or a password.
---

# Line Inputs Control Settings

## Control Description

The Line Input control adds a text field that the [Request](../../../../using-processmaker/requests/what-is-a-request.md) participant can enter plain text or a password.

{% hint style="info" %}
This control is not available for [Display](../types-for-screens.md#display)-type ProcessMaker Screens. See [Screen Types](../types-for-screens.md).
{% endhint %}

## Add the Control to a ProcessMaker Screen

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to add a control to a ProcessMaker Screen unless your user account has the **Make this user a Super Admin** setting selected:

* Screens: View Screens
* Screens: Edit Screens

See the ProcessMaker [Screens](../../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#screens) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to add this control to the ProcessMaker Screen:

1. [Create a new ProcessMaker Screen](../../manage-forms/create-a-new-form.md) or click the **Edit** icon![](../../../../.gitbook/assets/edit-icon.png)to edit the selected Screen. The ProcessMaker Screen is in [Design mode](../screens-builder-modes.md#editor-mode).
2. View the ProcessMaker Screen page to which to add the control.
3. Locate the **Line Inputs** icon![](../../../../.gitbook/assets/line-input-control-screens-builder-processes.png)in the panel to the left of the Screens Builder canvas.
4. Drag the **Line Inputs** icon into the Screens Builder canvas. Existing controls on the Screens Builder canvas adjust positioning based on where you drag the control.
5. Place into the Screens Builder canvas where you want the control to display on the ProcessMaker Screen.  

   ![](../../../../.gitbook/assets/line-input-screens-builder-processes.png)

6. Configure the Line Inputs control. See [Settings](line-input-control-settings.md#settings).
7. Validate that the control is configured correctly. See [Validate Your Screen](../validate-your-screen.md#validate-a-processmaker-screen).

Below is a Line Inputs control in [Preview mode](../screens-builder-modes.md#preview-mode).

![Line Inputs control in Preview mode](../../../../.gitbook/assets/line-input-control-preview-screens-builder-processes.png)

## Delete the Control from a ProcessMaker Screen

{% hint style="warning" %}
Deleting a control also deletes configuration for that control. If you add another control, it will have default settings.
{% endhint %}

Click the **Delete** icon![](../../../../.gitbook/assets/delete-screen-control-screens-builder-processes.png)for the control to delete it.

## Settings

{% hint style="info" %}
Your user account or group membership must have the following permissions to edit a ProcessMaker Screen control:

* Screens: View Screens
* Screens: Edit Screens

See the ProcessMaker [Screens](../../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#screens) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

The Line Inputs control has the following panels that contain settings:

* [**Variable** panel](line-input-control-settings.md#variable-panel-settings)
* \*\*\*\*[**Design** panel](line-input-control-settings.md#design-panel-settings)

### Variable Panel Settings

Click the control to view its settings in the **Variable** panel that is on the right-side of the Screens Builder canvas. Below are settings for the Line Inputs control in the **Variable** panel:

* **Key Name:** Enter a unique name that represents this control's value. Use the **Key Name** value in the following ways:

  * Reference this control by its **Variable Name** setting's value. The **Data Preview** panel in [Preview mode](../screens-builder-modes.md#preview-mode) corresponds the Line Inputs control's textual content with that Line Inputs control's **Key Name** value. In the example below, `LineInputsControl` is the **Variable Name** setting's value. ![](../../../../.gitbook/assets/line-inputs-preview-screens-builder-processes.png) 
  * Reference this control's value in a different Screens Builder control. To do so, use mustache syntax and reference this control's **Variable Name** value in the target control. Example: `{{ LineInputsControl }}`.
  * Reference this value in [**Visibility Rule** setting expressions](expression-syntax-components-for-show-if-control-settings.md).

  This is a required setting.

* **Data Type:** Select one of the following options to indicate the data type for the contents of this this control:
  * **Boolean:** The control accepts a Boolean type value. **Boolean** is the default option.
  * **Currency:** The control accepts a currency value.
  * **Date:** The control accepts a date value.
  * **Datetime:** The control accepts a datetime value. A datetime value contains both a date and time value.
  * **Float:** The control accepts a float value. A float is a floating-point number, meaning it contains a decimal place.
  * **Int:** The control accepts an integer value. An integer does not contain a decimal place.
  * **String:** The control accepts a string value.
* **Validation:** Enter the validation rules the form user must comply with to properly enter a valid value into this field. This setting has no default value. See [Validation Rules for "Validation" Control Settings](validation-rules-for-validation-control-settings.md).
* **Control is read only:** Select the **Control is read only** checkbox to indicate that the Line Inputs control field content cannot be edited.

### Design Panel Settings

Click the control to view its settings in the **Design** panel that is on the right-side of the Screens Builder canvas. Below are settings for the Line Inputs control in the **Design** panel:

* **Field Label:** Enter the field label text that displays. **New Input** is the default value.
* **Placeholder:** Enter the placeholder text that displays in the field when no value has been provided. This setting has no default value.
* **Help Text:** Enter text that provides additional guidance on the field's use. This setting has no default value.
* **Element Background Color:** Select to specify the background color of this control.
* **Text Color:** Select to specify the text color that displays in this control.
* **Visibility Rule:** Specify an expression that indicates the condition\(s\) under which this control displays. See [Expression Syntax Components for "Visibility Rule" Control Settings](expression-syntax-components-for-show-if-control-settings.md#expression-syntax-components-for-show-if-control-settings). If this setting does not have an expression, then this control displays by default.
* **CSS Selector Name:** Enter the value to represent this control in custom CSS syntax when in [Custom CSS](../add-custom-css-to-a-screen.md#add-custom-css-to-a-processmaker-screen) mode. As a best practice, use the same **CSS Selector Name** value on different controls of the same type to apply the same custom CSS style to all those controls.

## Related Topics

{% page-ref page="../types-for-screens.md" %}

{% page-ref page="../validate-your-screen.md" %}

{% page-ref page="./" %}

{% page-ref page="rich-text-control-settings.md" %}

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

{% page-ref page="expression-syntax-components-for-show-if-control-settings.md" %}

