---
description: >-
  Add a control from which the Request participant can select or deselect an
  option. Multiple Checkbox controls can be grouped together.
---

# Checkbox Control Settings

## Control Description

The Checkbox control adds a checkbox from which the [Request](../../../../using-processmaker/requests/what-is-a-request.md) participant can select or deselect an option. Multiple Checkbox controls can be grouped together to function as one set of options whereby separate Checkbox controls with the same name maintain the same selected or deselected state.

{% hint style="info" %}
This control is not available for [Display](../types-for-screens.md#display)-type ProcessMaker Screens. See [Screen Types](../types-for-screens.md).
{% endhint %}

## Add the Control to a ProcessMaker Screen

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to add a control to a ProcessMaker Screen unless your user account has the **Make this user a Super Admin** setting selected:

* Screens: Edit Screens
* Screens: View Screens

See the ProcessMaker [Screens](../../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#screens) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to add this control to the [ProcessMaker Screen](../../what-is-a-form.md):

1. [Create a new ProcessMaker Screen](../../manage-forms/create-a-new-form.md) or click the **Edit** icon![](../../../../.gitbook/assets/edit-icon.png)to edit the selected Screen. The ProcessMaker Screen is in [Design mode](../screens-builder-modes.md#editor-mode).
2. View the ProcessMaker Screen page to which to add the control.
3. Locate the **Checkbox** icon![](../../../../.gitbook/assets/checkbox-control-screens-builder-processes.png)in the panel to the left of the Screen Builder canvas.
4. Drag the **Checkbox** icon into the Screen Builder canvas. Existing controls on the Screen Builder canvas adjust positioning based on where you drag the control.
5. Place into the Screen Builder canvas where you want the control to display on the ProcessMaker Screen.  

   ![](../../../../.gitbook/assets/checkbox-control-placed-screens-builder-processes.png)

6. Configure the Checkbox control. See [Settings](checkbox-control-settings.md#inspector-settings).
7. Validate that the control is configured correctly. See [Validate Your Screen](../validate-your-screen.md#validate-a-processmaker-screen).

Below are two Checkbox controls in [Preview mode](../screens-builder-modes.md#preview-mode).

![Two Checkbox controls in Preview mode](../../../../.gitbook/assets/checkbox-control-preview-screens-builder-processes.png)

## Move the Control on the Page

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to move a control in a ProcessMaker Screen page unless your user account has the **Make this user a Super Admin** setting selected:

* Screens: Edit Screens
* Screens: View Screens

See the ProcessMaker [Screens](../../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#screens) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

After [adding a control to a ProcessMaker Screen page](checkbox-control-settings.md#add-the-control-to-a-processmaker-screen), you may move it to another location on that page such that it is above or below other controls placed on that page. A control cannot be moved to another [ProcessMaker Screen](../../what-is-a-form.md) page.

Follow these steps to move a control to another location on that ProcessMaker Screen page:

1. Place your cursor anywhere on the control not displaying the **Duplicate Control**![](../../../../.gitbook/assets/copy-duplicate-control-icon-screen-builder-processes.png)or **Delete Control**![](../../../../.gitbook/assets/delete-screen-control-screens-builder-processes.png)buttons.
2. Hold your cursor, then drag the control above or below other controls on that ProcessMaker Screen page. Screen Builder previews where the control would display on the page based on how you position the control above or below other controls. If the control cannot be placed in a location because your cursor is above an existing control or too far to the left or right of the page, the![](../../../../.gitbook/assets/movement-not-allowed-icon-screen-builder-processes.png)icon displays in the preview.
3. Place the control at the location on the page you want it. The other control\(s\) on the page automatically adjust position.

## Copy the Control with its Settings

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to copy a control in a ProcessMaker Screen unless your user account has the **Make this user a Super Admin** setting selected:

* Screens: Edit Screens
* Screens: View Screens

See the ProcessMaker [Screens](../../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#screens) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Copying a control also copies the current settings of that control. The copied control displays below other controls placed on that [ProcessMaker Screen](../../what-is-a-form.md) page.

{% hint style="info" %}
As a best practice, after copying a control, change the [**Variable Name** setting](checkbox-control-settings.md#variable-name) value for the copied control to its own unique variable value. Otherwise, in-progress [Requests](../../../../using-processmaker/requests/what-is-a-request.md) that use this ProcessMaker Screen read from and send data to both controls.
{% endhint %}

Follow these steps to copy a control:

1. Select the control to be copied.
2. Click the **Duplicate Control** button![](../../../../.gitbook/assets/copy-duplicate-control-icon-screen-builder-processes.png). The control copies with its current settings, and then displays below other controls placed on that page.

## Delete the Control from a ProcessMaker Screen

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to delete a control from a ProcessMaker Screen unless your user account has the **Make this user a Super Admin** setting selected:

* Screens: Edit Screens
* Screens: View Screens

See the ProcessMaker [Screens](../../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#screens) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

{% hint style="warning" %}
Deleting a control also deletes configuration for that control. If you add another control, it will have default settings.
{% endhint %}

Follow these steps to delete a control from a [ProcessMaker Screen](../../what-is-a-form.md) page:

1. Select the control to be deleted.
2. Click the **Delete** button![](../../../../.gitbook/assets/delete-screen-control-screens-builder-processes.png). The control deletes. Other controls on that ProcessMaker Screen page adjust their locations automatically.

## Settings <a id="inspector-settings"></a>

{% hint style="info" %}
### Permissions Required

Your user account or group membership must have the following permissions to edit a ProcessMaker Screen control:

* Screens: Edit Screens
* Screens: View Screens

See the ProcessMaker [Screens](../../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#screens) permissions or ask your ProcessMaker Administrator for assistance.

### Topic Update

This topic is updated for ProcessMaker version 4.0.1. See the [Release Notes](https://processmaker.gitbook.io/processmaker-release-notes/processmaker-4.0.x/processmaker-4.0.1-release-notes#screen-builder-1).
{% endhint %}

The Checkbox control has the following panels that contain settings:

* \*\*\*\*[**Variable** panel](checkbox-control-settings.md#variable-panel-settings)
* \*\*\*\*[**Configuration** panel](checkbox-control-settings.md#configuration-panel-settings)
* \*\*\*\*[**Design** panel](checkbox-control-settings.md#design-panel-settings)
* \*\*\*\*[**Advanced** panel](checkbox-control-settings.md#advanced-panel-settings)

### Variable Panel Settings

Click the control while in [Design](../screens-builder-modes.md#design-mode) mode, and then click the **Variable** panel that is on the right-side of the Screen Builder canvas.

Below are settings for the Checkbox control in the **Variable** panel:

* [Variable Name](checkbox-control-settings.md#variable-name)
* [Label](checkbox-control-settings.md#label)
* [Validation Rules](checkbox-control-settings.md#validation-rules)
* [Checked by Default](checkbox-control-settings.md#checked-by-default)
* [Read Only](checkbox-control-settings.md#read-only)

#### Variable Name

Edit the default **Variable Name** setting value for this control if necessary. The **Variable Name** setting value represents data in this control during [Requests](../../../../using-processmaker/requests/what-is-a-request.md). Ensure that the **Variable Name** setting value is a unique name from other controls in this [ProcessMaker Screen](../../what-is-a-form.md) and contains at least one letter. This is a required setting.  
![](../../../../.gitbook/assets/checkbox-control-variable-name-screen-builder-processes.png) 

Use the **Variable Name** setting value in the following ways:

* Reference this control by its **Variable Name** setting's value. The **Data Preview** panel in [Preview mode](../screens-builder-modes.md#preview-mode) represents the state of the Checkbox control using its **Variable Name** value in the Request's JSON data model in the following ways:
  * **The Checkbox control is selected:** The key's value is `true` \(shown below\).
  * **The Checkbox control is not selected:** The key's value is `false`. ![](../../../../.gitbook/assets/checkbox-preview-screens-builder-processes.png) 
* Reference this control's value in a different Screen Builder control. To do so, use [mustache syntax](https://mustache.github.io/mustache.5.html) and reference this control's **Variable Name** value in the target control. Example: `{{ CheckboxControl }}`.
* Reference this value in [**Visibility Rule** setting expressions](expression-syntax-components-for-show-if-control-settings.md).

#### Label

Edit the default label that displays for this control if necessary. **New Checkbox** is the default value.  
![](../../../../.gitbook/assets/checkbox-control-label-screen-builder-processes.png) 

#### Validation Rules

Enter the validation rule\(s\) the Request participant must comply with to properly enter a valid value into this control. This setting has no default value. If there are no configured validation rules the following message displays: **No validation rule\(s\)**. See [Validation Rules for "Validation" Control Settings](validation-rules-for-validation-control-settings.md).  
![](../../../../.gitbook/assets/validation-rules-screen-builder-processes.png) 

Follow these steps to add a validation rule to this control:

1. Access the [**Variable** panel for this control](select-list-control-settings.md#variable-panel-settings) while in [Design](../screens-builder-modes.md#design-mode) mode, and then locate the **Validation Rules** setting.
2. Click the **Add Rule** button. The **Select** drop-down menu displays. ![](../../../../.gitbook/assets/validation-rules-select-screen-builder-processes.png) 
3. Select the rule that this control validates against.
4. Click **Save**. Parameters for the selected rule display. Parameter settings display which ones are required to properly configure the rule.
5. Enter the parameter settings that this control uses to validate against. See [Validation Rule Settings](validation-rules-for-validation-control-settings.md#validation-rule-settings), and then locate the validation rule for its parameters.

Follow these steps to edit a validation rule for this control:

1. Access the [**Variable** panel for this control](select-list-control-settings.md#variable-panel-settings) while in [Design](../screens-builder-modes.md#design-mode) mode, and then locate the **Validation Rules** setting.
2. Click the **Edit** icon![](../../../../.gitbook/assets/edit-email-notification-icon-task-process-modeler-processes.png)for the validation rule to edit if that rule can be edited. Validation rules that do not have parameters cannot be edited. The parameter settings for that validation rule displays.
3. Edit the parameter settings that this control uses to validate against. See [Validation Rule Settings](validation-rules-for-validation-control-settings.md#validation-rule-settings), and then locate the validation rule for its parameters.

Follow these steps to delete a validation rule for this control:

1. Access the [**Variable** panel for this control](select-list-control-settings.md#variable-panel-settings) while in [Design](../screens-builder-modes.md#design-mode) mode, and then locate the **Validation Rules** setting.
2. Click the **Delete** icon![](../../../../.gitbook/assets/delete-email-notification-icon-task-process-modeler-processes.png)for the validation rule to delete. A message displays to confirm deletion of the validation rule.
3. Click **Delete**.

#### Checked by Default

Select to indicate that this control is selected by default such that its key's value is `true`. This option is not selected by default.  
![](../../../../.gitbook/assets/checkbox-control-checked-by-default-screen-builder-processes.png) 

#### Read Only

Select to indicate that this control cannot be edited. This option is not selected by default.  
![](../../../../.gitbook/assets/checkbox-control-read-only-screen-builder-processes.png) 

### Configuration Panel Settings

Click the control while in [Design](../screens-builder-modes.md#design-mode) mode, and then click the **Configuration** panel that is on the right-side of the Screen Builder canvas.

Below is the setting for the Checkbox control in the **Configuration** panel:

* [Helper Text](checkbox-control-settings.md#helper-text)

#### Helper Text

Enter text that provides additional guidance on this control's use. This setting has no default value.  
![](../../../../.gitbook/assets/helper-text-screen-builder-processes.png) 

### Design Panel Settings

Click the control while in [Design](../screens-builder-modes.md#design-mode) mode, and then click the **Design** panel that is on the right-side of the Screen Builder canvas.

Below are settings for the Checkbox control in the **Design** panel:

* [Text Color](checkbox-control-settings.md#text-color)
* [Background Color](checkbox-control-settings.md#background-color)
* [Toggle Style](checkbox-control-settings.md#toggle-style)

#### Text Color

Select the text color that displays for this control. Optionally, click the **Clear Color Selection** option to remove the selected color.  
![](../../../../.gitbook/assets/text-color-screen-builder-processes.png) 

#### Background Color

Select the background color that displays for this control. Optionally, click the **Clear Color Selection** option to remove the selected color.  
![](../../../../.gitbook/assets/background-color-screen-builder-processes.png) 

#### Toggle Style

Select to display a toggle key control instead of a checkbox control for each checkbox option.  
![](../../../../.gitbook/assets/checkbox-control-toggle-style-screen-builder-processes.png) 

### Advanced Panel Settings

Click the control while in [Design](../screens-builder-modes.md#design-mode) mode, and then click the **Advanced** panel that is on the right-side of the Screen Builder canvas.

Below are settings for the Checkbox control in the **Advanced** panel:

* [Visibility Rule](checkbox-control-settings.md#visibility-rule)
* [CSS Selector Name](checkbox-control-settings.md#css-selector-name)

#### Visibility Rule

Specify an expression that indicates the condition\(s\) under which this control displays. See [Expression Syntax Components for "Visibility Rule" Control Settings](expression-syntax-components-for-show-if-control-settings.md#expression-syntax-components-for-show-if-control-settings). If this setting does not have an expression, then this control displays by default.  
![](../../../../.gitbook/assets/visibility-rule-screen-builder-processes.png) 

{% hint style="info" %}
To make this control hidden until another control contains a value, enter the **Variable Name** setting value of that control to this control's **Visibility Rule** setting.
{% endhint %}

#### CSS Selector Name

Enter the value to represent this control in custom CSS syntax when in [Custom CSS](../add-custom-css-to-a-screen.md#add-custom-css-to-a-processmaker-screen) mode. As a best practice, use the same **CSS Selector Name** value on different controls of the same type to apply the same custom CSS style to all those controls.  
![](../../../../.gitbook/assets/css-selector-name-screen-builder-processes.png) 

## Related Topics <a id="related-topics"></a>

{% page-ref page="../types-for-screens.md" %}

{% page-ref page="../screens-builder-modes.md" %}

{% page-ref page="../validate-your-screen.md" %}

{% page-ref page="./" %}

{% page-ref page="rich-text-control-settings.md" %}

{% page-ref page="line-input-control-settings.md" %}

{% page-ref page="textarea-control-settings.md" %}

{% page-ref page="select-list-control-settings.md" %}

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

{% page-ref page="expression-syntax-components-for-show-if-control-settings.md" %}

