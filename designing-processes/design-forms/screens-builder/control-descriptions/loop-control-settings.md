---
description: >-
  Add a Loop control that contains multiple controls that loop multiple times to
  allow the Request participant to enter multiple items, each of which requires
  multiple pieces of information.
---

# Loop Control Settings

## Control Description

{% hint style="info" %}
### New Topic

This topic is new for ProcessMaker version 4.0.1. See the [Release Notes](https://processmaker.gitbook.io/processmaker-release-notes/processmaker-4.0.x/processmaker-4.0.1-release-notes#screen-builder).
{% endhint %}

Use the Loop control to contain one or more [ProcessMaker Screen](../../what-is-a-form.md) controls to duplicate the contained set of controls a specified number of times, thereby minimizing the design work to duplicate that set of controls in a Screen. Use the Loop control when the [Request](../../../../using-processmaker/requests/what-is-a-request.md) participant must enter multiple instances of the same set of information, each of which contain multiple components.

For example, use a Loop control when a university registrar's office must enter the following information for each new university student enrolling to the university:

| Information | ProcessMaker Screen Control |
| :--- | :--- |
| First Name | [Line Input](line-input-control-settings.md) control |
| Last Name | Line Input control |
| Age | Line Input control |
| Sex | [Select List](select-list-control-settings.md) control |
| Housing Dormitory | Select List control |

During the in-progress Request, the Loop control displays the set of controls contained in the Loop control a specified number of times so that the university registrar's office may enter the same information for each new student from one ProcessMaker Screen page. The [Submit Button](submit-button-control-settings.md) control to submit the ProcessMaker Screen must be placed outside of the Loop control. Otherwise, a Submit Button control displays in each set of controls placed into the Loop control.

Do not place another Loop control inside the first Loop control.

{% hint style="info" %}
This control is not available for [Display](../types-for-screens.md#display)-type ProcessMaker Screens. See [Screen Types](../types-for-screens.md).
{% endhint %}

## Add the Control to a ProcessMaker Screen <a id="add-the-control-to-a-processmaker-screen"></a>

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to add a control to a ProcessMaker Screen unless your user account has the **Make this user a Super Admin** setting selected:

* Screens: Edit Screens
* Screens: View Screens

See the ProcessMaker [Screens](../../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#screens) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to add this control to the [ProcessMaker Screen](../../what-is-a-form.md):

1. [Create a new ProcessMaker Screen](../../manage-forms/create-a-new-form.md) or click the **Edit** icon![](../../../../.gitbook/assets/edit-icon.png)to edit the selected Screen. The ProcessMaker Screen is in [Design mode](../screens-builder-modes.md#editor-mode).
2. View the ProcessMaker Screen page to which to add the control.
3. Locate the **Loop** icon![](../../../../.gitbook/assets/loop-control-screens-builder-processes.png)in the panel to the left of the Screen Builder canvas.
4. Drag the **Loop** icon into the Screen Builder canvas. Existing controls on the Screens Builder canvas adjust positioning based on where you drag the control.
5. Place into the Screen Builder canvas where you want the control to display on the ProcessMaker Screen. Ensure that the control's placement accounts for the set of controls you intend to this control to contain. ![](../../../../.gitbook/assets/loop-control-placed-screens-builder-processes.png) 
6. Configure the Loop control. See [Settings](page-navigation-button-control-settings.md#inspector-settings).
7. Drag and place the ProcessMaker Screen control\(s\) into the Loop control that you intend the Request participant to enter information each time the Loop control repeats. As a best practice, do not do the following:

   * Do not place a [Submit Button](submit-button-control-settings.md) control inside the Loop control.
   * Do not place another Loop control inside the first Loop control.

   See [Control Description](loop-control-settings.md#control-description) for an example.

8. Configure each control placed into the Loop control.
9. Validate that the control is configured correctly. See [Validate Your Screen](../validate-your-screen.md#validate-a-processmaker-screen).

Below is a Loop control in [Preview mode](../screens-builder-modes.md#preview-mode).

![Loop control containing two controls, repeating twice](../../../../.gitbook/assets/loop-control-preview-screens-builder-processes.png)

## Move the Control on the Page

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to move a control in a ProcessMaker Screen page unless your user account has the **Make this user a Super Admin** setting selected:

* Screens: Edit Screens
* Screens: View Screens

See the ProcessMaker [Screens](../../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#screens) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

After [adding a control to a ProcessMaker Screen page](loop-control-settings.md#add-the-control-to-a-processmaker-screen), you may move it to another location on that page such that it is above or below other controls placed on that page. Consider when moving this control that it contains a set of controls that become duplicated during in-progress [Requests](../../../../using-processmaker/requests/what-is-a-request.md). A control cannot be moved to another [ProcessMaker Screen](../../what-is-a-form.md) page.

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
As a best practice, after copying a control, change the [**Variable Name** setting](loop-control-settings.md#variable-name) value for the copied control to its own unique variable value. Otherwise, in-progress [Requests](../../../../using-processmaker/requests/what-is-a-request.md) that use this ProcessMaker Screen read from and send data to both controls.
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
Consider the following when deleting a configured Loop control:

* Deleting a Loop control also deletes the controls placed into it.
* Deleting a control also deletes configuration for that control. If you add another control, it will have default settings.
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

This topic is updated for ProcessMaker version 4.0.3 \(see the [Release Notes](https://processmaker.gitbook.io/processmaker-release-notes/processmaker-4.0.x/processmaker-4.0.3-release-notes#screen-builder)\) since this control was introduced in ProcessMaker version 4.0.1 \(see the [Release Notes](https://processmaker.gitbook.io/processmaker-release-notes/processmaker-4.0.x/processmaker-4.0.1-release-notes#screen-builder)\).
{% endhint %}

The Loop control has the following panels that contain settings:

* \*\*\*\*[**Variable** panel](loop-control-settings.md#variable-panel-settings)
* \*\*\*\*[**Configuration** panel](loop-control-settings.md#configuration-panel-settings)
* \*\*\*\*[**Advanced** panel](loop-control-settings.md#advanced-panel-settings)

### Variable Panel Settings

Click the control while in [Design](../screens-builder-modes.md#design-mode) mode, and then click the **Variable** panel that is on the right-side of the Screen Builder canvas.

Below is the setting for the Loop control in the **Variable** panel:

* [Variable Name](loop-control-settings.md#variable-name)

#### Variable Name

Edit the default **Variable Name** setting value for this control if necessary. The **Variable Name** setting value represents data in this control during [Requests](../../../../using-processmaker/requests/what-is-a-request.md). Ensure that the **Variable Name** setting value is a unique name from other controls in this [ProcessMaker Screen](../../what-is-a-form.md) and contains at least one letter. This is a required setting.

Use the **Variable Name** setting value in the following ways:

* Reference this control by its **Variable Name** setting's value. The **Data Preview** panel in [Preview mode](../screens-builder-modes.md#preview-mode) corresponds with the Loop control's **Variable Name** value. In the example below, `LoopControl` is the **Variable Name** setting's value. ![](../../../../.gitbook/assets/loop-control-data-preview-screens-builder-processes.png) 
* Reference this control's value in a different Screen Builder control. To do so, use [mustache syntax](https://mustache.github.io/mustache.5.html) and reference this control's **Variable Name** value in the target control. Example: `{{ LoopControl }}`.
* Reference this value in [**Visibility Rule** setting expressions](expression-syntax-components-for-show-if-control-settings.md).

### Configuration Panel Settings

Click the control while in [Design](../screens-builder-modes.md#design-mode) mode, and then click the **Configuration** panel that is on the right-side of the Screen Builder canvas.

Below are settings for the Loop control in the **Configuration** panel:

* [Default Loop Count](loop-control-settings.md#default-loop-count)
* [Allow Additional Loops](loop-control-settings.md#allow-additional-loops)

#### Default Loop Count

Enter the number of times to repeat the control\(s\) that the Loop control contains. **3** is the default value.  
![](../../../../.gitbook/assets/loop-control-default-loop-count-screen-builder-processes.png) 

#### Allow Additional Loops

Select to allow additional loops during in-progress [Requests](../../../../using-processmaker/requests/what-is-a-request.md) if necessary.  
![](../../../../.gitbook/assets/loop-control-allow-additional-loops-screen-builder-processes.png) 

If this setting is selected, then the **Add Loop** icon![](../../../../.gitbook/assets/add-loop-icon.png)displays below the looped container of controls that allows the Request participant to add a new loop for the [Task](../../../../using-processmaker/task-management/what-is-a-task.md).

### Advanced Panel Settings

Click the control while in [Design](../screens-builder-modes.md#design-mode) mode, and then click the **Advanced** panel that is on the right-side of the Screen Builder canvas.

Below are settings for the Loop control in the **Advanced** panel:

* [Visibility Rule](loop-control-settings.md#visibility-rule)
* [CSS Selector Name](loop-control-settings.md#css-selector-name)

#### Visibility Rule

Specify an expression that indicates the condition\(s\) under which this control displays. See [Expression Syntax Components for "Visibility Rule" Control Settings](expression-syntax-components-for-show-if-control-settings.md#expression-syntax-components-for-show-if-control-settings). If this setting does not have an expression, then this control displays by default.  
![](../../../../.gitbook/assets/visibility-rule-screen-builder-processes.png) 

{% hint style="info" %}
To make this control hidden until another control contains a value, enter the **Variable Name** setting value of that control to this control's **Visibility Rule** setting.
{% endhint %}

#### CSS Selector Name

Enter the value to represent this control in custom CSS syntax when in [Custom CSS](../add-custom-css-to-a-screen.md#add-custom-css-to-a-processmaker-screen) mode. As a best practice, use the same **CSS Selector Name** value on different controls of the same type to apply the same custom CSS style to all those controls.  
![](../../../../.gitbook/assets/css-selector-name-screen-builder-processes.png) 

## Related Topics

{% page-ref page="../types-for-screens.md" %}

{% page-ref page="../screens-builder-modes.md" %}

{% page-ref page="../validate-your-screen.md" %}

{% page-ref page="rich-text-control-settings.md" %}

{% page-ref page="line-input-control-settings.md" %}

{% page-ref page="textarea-control-settings.md" %}

{% page-ref page="select-list-control-settings.md" %}

{% page-ref page="checkbox-control-settings.md" %}

{% page-ref page="date-picker-control-settings.md" %}

{% page-ref page="page-navigation-button-control-settings.md" %}

{% page-ref page="multi-column-button-control-settings.md" %}

{% page-ref page="record-list-control-settings.md" %}

{% page-ref page="image-control-settings.md" %}

{% page-ref page="submit-button-control-settings.md" %}

{% page-ref page="nested-screen-control-settings.md" %}

{% page-ref page="file-upload-control-settings.md" %}

{% page-ref page="file-download-control-settings.md" %}

{% page-ref page="validation-rules-for-validation-control-settings.md" %}

{% page-ref page="expression-syntax-components-for-show-if-control-settings.md" %}

