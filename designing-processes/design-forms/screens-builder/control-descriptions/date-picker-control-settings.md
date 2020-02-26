---
description: >-
  Add a Date Picker control that allows the Request participant to select dates
  from a ProcessMaker Screen through an interactive calendar.
---

# Date Picker Control Settings

## Control Description <a id="control-description"></a>

The Date Picker control allows the [Request](../../../../using-processmaker/requests/what-is-a-request.md) participant to click the control and select a date from a calendar pop-up. After the user selects a date from the control, the calendar hides and the control shows the selected date.

Configure the Date Picker control to accept one of the following data types:

* **Datetime:** The control accepts a datetime, which is includes both date and time components.
* **Date:** The control accepts a date.

{% hint style="info" %}
This control is not available for [Display](../types-for-screens.md#display)-type ProcessMaker Screens. See [Screen Types](../types-for-screens.md).
{% endhint %}

## Add the Control to a ProcessMaker Screen <a id="add-the-control-to-a-processmaker-screen"></a>

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to add a control to a ProcessMaker Screen unless your user account has the **Make this user a Super Admin** setting selected:

* Screens: View Screens
* Screens: Edit Screens

See the ProcessMaker [Screens](../../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#screens) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to add this control to the ProcessMaker Screen:

1. [Create a new ProcessMaker Screen](../../manage-forms/create-a-new-form.md) or click the **Edit** icon![](../../../../.gitbook/assets/edit-icon.png)to edit the selected Screen. The ProcessMaker Screen is in [Design mode](../screens-builder-modes.md#editor-mode).
2. View the ProcessMaker Screen page to which to add the control.
3. Locate the **Date Picker** icon![](../../../../.gitbook/assets/date-picker-control-screens-builder-processes.png)in the panel to the left of the Screen Builder canvas.
4. Drag the **Date Picker** icon into the Screen Builder canvas. Existing controls on the Screen Builder canvas adjust positioning based on where you drag the control.
5. Place into the Screen Builder canvas where you want the control to display on the ProcessMaker Screen.

   ![](../../../../.gitbook/assets/date-picker-control-placed-screens-builder-processes.png)

6. Configure the Date Picker control. See [Settings](date-picker-control-settings.md#inspector-settings).
7. Validate that the control is configured correctly. See [Validate Your Screen](../validate-your-screen.md#validate-a-processmaker-screen).

Below is a Date Picker control in [Preview mode](../screens-builder-modes.md#preview-mode).

![Date Picker control in Preview mode](../../../../.gitbook/assets/date-control-placed-screens-builder-processes.png)

## Delete the Control from a ProcessMaker Screen

{% hint style="warning" %}
Deleting a control also deletes configuration for that control. If you add another control, it will have default settings.
{% endhint %}

Click the **Delete** icon![](../../../../.gitbook/assets/delete-screen-control-screens-builder-processes.png)for the control to delete it.

## Settings <a id="inspector-settings"></a>

{% hint style="info" %}
### Permissions Required

Your user account or group membership must have the following permissions to edit a ProcessMaker Screen control:

* Screens: View Screens
* Screens: Edit Screens

See the ProcessMaker [Screens](../../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#screens) permissions or ask your ProcessMaker Administrator for assistance.

### Topic Update

This topic is updated for ProcessMaker version 4.0.1. See the [Release Notes](https://processmaker.gitbook.io/processmaker-release-notes/processmaker-4.0.x/processmaker-4.0.1-release-notes#screen-builder-1).
{% endhint %}

The Date Picker control has the following panels that contain settings:

* \*\*\*\*[**Variable** panel](date-picker-control-settings.md#variable-panel-settings)
* \*\*\*\*[**Configuration** panel](date-picker-control-settings.md#configuration-panel-settings)
* \*\*\*\*[**Design** panel](date-picker-control-settings.md#design-panel-settings)
* \*\*\*\*[**Advanced** panel](date-picker-control-settings.md#advanced-panel-settings)

### Variable Panel Settings

Click the control while in [Design](../screens-builder-modes.md#design-mode) mode, and then click the **Variable** panel that is on the right-side of the Screen Builder canvas.

Below are settings for the Date Picker control in the **Variable** panel:

* **Variable Name:** Enter a unique name containing at least one letter that represents this control's value. Use the **Variable Name** value in the following ways:

  * Reference this control by its **Variable Name** setting's value. The **Data Preview** panel in [Preview mode](../screens-builder-modes.md#preview-mode) corresponds with the Date Picker control's entered datetime with that Date Picker control's **Variable Name** value. In the example below, `DatePickerControl` is the **Variable Name** setting's value. ![](../../../../.gitbook/assets/date-control-preview-screens-builder-processes.png) 
  * Reference this control's value in a different Screen Builder control. To do so, use [mustache syntax](https://mustache.github.io/mustache.5.html) and reference this control's **Variable Name** value in the target control. Example: `{{ DatePickerControl }}`.
  * Reference this value in [**Visibility Rule** setting expressions](expression-syntax-components-for-show-if-control-settings.md).

  This is a required setting.

* **Data Type:** Select one of the following data type options this control accepts when the form user enters content into this control:

  * **Datetime:** This control accepts a datetime, which is includes both date and time components.
  * **Date:** The control accepts a date.

  This is a required setting.

* **Validation Rules:** Enter the validation rules the Request participant must comply with to properly enter a valid value into this control. This setting has no default value. See [Validation Rules for "Validation" Control Settings](validation-rules-for-validation-control-settings.md).
* **Read Only:** Select to indicate that this control cannot be edited. This option is not selected by default.

### Configuration Panel Settings

Click the control while in [Design](../screens-builder-modes.md#design-mode) mode, and then click the **Configuration** panel that is on the right-side of the Screen Builder canvas.

Below are settings for the Date Picker control in the **Configuration** panel:

* **Label:** Enter the text label that displays for this control. **New Date Picker** is the default value.
* **Placeholder Text:** Enter the placeholder text that displays in this control when no value has been provided. This setting has no default value.
* **Helper Text:** Enter text that provides additional guidance on this control's use. This setting has no default value.

### Design Panel Settings

Click the control while in [Design](../screens-builder-modes.md#design-mode) mode, and then click the **Design** panel that is on the right-side of the Screen Builder canvas.

Below are settings for the Date Picker control in the **Design** panel:

* **Text Color:** Select to specify the text color that displays in this control.
* **Background Color:** Select to specify the background color of this control.

### Advanced Panel Settings

Click the control while in [Design](../screens-builder-modes.md#design-mode) mode, and then click the **Advanced** panel that is on the right-side of the Screen Builder canvas.

Below are settings for the Date Picker control in the **Advanced** panel:

* **Visibility Rule:** Enter an expression that indicates the condition\(s\) under which this control displays. See [Expression Syntax Components for "Visibility Rule" Control Settings](expression-syntax-components-for-show-if-control-settings.md#expression-syntax-components-for-show-if-control-settings). If this setting does not have an expression, then this control displays by default.
* **CSS Selector Name:** Enter the value to represent this control in custom CSS syntax when in [Custom CSS](../add-custom-css-to-a-screen.md#add-custom-css-to-a-processmaker-screen) mode. As a best practice, use the same **CSS Selector Name** value on different controls of the same type to apply the same custom CSS style to all those controls.

{% hint style="info" %}
Do you need to export this ProcessMaker Screen? Click the **Export Screen** button![](../../../../.gitbook/assets/export-screen-button-screens-builder-processes.png). See [Export a Screen](../../manage-forms/export-a-screen.md#overview) for more information.
{% endhint %}

## Related Topics <a id="related-topics"></a>

{% page-ref page="../types-for-screens.md" %}

{% page-ref page="../validate-your-screen.md" %}

{% page-ref page="../validate-your-screen.md" %}

{% page-ref page="./" %}

{% page-ref page="rich-text-control-settings.md" %}

{% page-ref page="line-input-control-settings.md" %}

{% page-ref page="textarea-control-settings.md" %}

{% page-ref page="select-list-control-settings.md" %}

{% page-ref page="checkbox-control-settings.md" %}

{% page-ref page="page-navigation-button-control-settings.md" %}

{% page-ref page="multi-column-button-control-settings.md" %}

{% page-ref page="record-list-control-settings.md" %}

{% page-ref page="image-control-settings.md" %}

{% page-ref page="submit-button-control-settings.md" %}

{% page-ref page="file-upload-control-settings.md" %}

{% page-ref page="file-download-control-settings.md" %}

{% page-ref page="validation-rules-for-validation-control-settings.md" %}

{% page-ref page="expression-syntax-components-for-show-if-control-settings.md" %}

