---
description: >-
  Add a Nested Screen control into which select a separate ProcessMaker Screen
  that is in your ProcessMaker instance.
---

# Nested Screen Control Settings

## Control Description

{% hint style="info" %}
### New Topic

This topic is new for ProcessMaker version 4.0.1. See the [Release Notes](https://processmaker.gitbook.io/processmaker-release-notes/processmaker-4.0.x/processmaker-4.0.1-release-notes#screen-builder).
{% endhint %}

Use the Nested Screen control to nest a separate [ProcessMaker Screen](../../what-is-a-form.md) into that control. In doing so, the separate ProcessMaker Screen embeds into the Nested Screen control. The Nested Screen control is a placeholder for the embedded ProcessMaker Screen such that the [Request](../../../../using-processmaker/requests/what-is-a-request.md) participant experiences the nested Screen as designed. The nested ProcessMaker Screen must be in the same ProcessMaker instance as that using the Nested Screen control. When the [Task](../../../../using-processmaker/task-management/what-is-a-task.md) loads the ProcessMaker Screen using a Nested Screen control, the Nested Screen loads the latest version of the referenced Screen.

The ProcessMaker Screen containing the Nested Screen control is the parent Screen. The ProcessMaker Screen that is nested is the child Screen.

Information that is entered into a child ProcessMaker Screen displays in [Request summaries](../../../../using-processmaker/requests/request-details/) that use the parent Screen.

A nested ProcessMaker Screen has the following attributes that vary from how it may have been designed:

* **CSS takes precedent:** Any CSS designed in [Custom CSS mode](../screens-builder-modes.md#custom-css-mode) in the parent ProcessMaker Screen takes precedent over any CSS designed in the child \(nested\) Screens. The Request participant experiences one design experience without a variety of design styles.
* **Submit Button control in nested ProcessMaker Screens is hidden:** During in-progress Requests, the [Submit Button](submit-button-control-settings.md) control is hidden in child ProcessMaker Screens so that the Request participant uses the parent Screen's Submit Button control to submit the Task.

Any ProcessMaker Screen [type](../types-for-screens.md) may be selected for nesting into a Nested Screen control. However, only [Form](../types-for-screens.md#form)- and [Display](../types-for-screens.md#display)-type ProcessMaker Screens preview in either [Design](../screens-builder-modes.md#design-mode) or [Preview](../screens-builder-modes.md#preview-mode) modes.

ProcessMaker Screen designers can easily build a Screen by placing modular components into one Screen. For example, in a ProcessMaker Screen designed for a purchase request, use Nested Screen controls as placeholders for the following components that are designed in separate Screens. Each of these ProcessMaker Screens are nested into its own Nested Screen control.

* Nested Screen control for Screen 1: Personal information
* Nested Screen control for Screen 2: Payment information
* Nested Screen control for Screen 3: Billing information
* Nested Screen control for Screen 4: Shipping information

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

Follow these steps to add this control to the ProcessMaker Screen:

1. [Create a new ProcessMaker Screen](../../manage-forms/create-a-new-form.md) or click the **Edit** icon![](../../../../.gitbook/assets/edit-icon.png)to edit the selected parent Screen to which to add the Nested Screen control. The ProcessMaker Screen is in [Design mode](../screens-builder-modes.md#editor-mode).
2. View the ProcessMaker Screen page to which to add the control.
3. Locate the **Nested Screen** icon![](../../../../.gitbook/assets/nested-screen-control-screens-builder-processes.png)in the panel to the left of the Screen Builder canvas.
4. Drag the **Nested Screen** icon into the Screen Builder canvas. Existing controls on the Screens Builder canvas adjust positioning based on where you drag the control.
5. Place into the Screen Builder canvas where you want the control to display on the ProcessMaker Screen. Ensure that the control's placement accounts for the ProcessMaker Screen you intend to nest into this control. ![](../../../../.gitbook/assets/nested-screen-control-placed-screens-builder-processes.png) 
6. Configure the Nested Screen control. See [Settings](nested-screen-control-settings.md#inspector-settings).
7. Validate that the control is configured correctly. See [Validate Your Screen](../validate-your-screen.md#validate-a-processmaker-screen).

Below is a Nested Screen control in [Preview mode](../screens-builder-modes.md#preview-mode).

![A Form-type ProcessMaker Screen nested into a Nested Screen control](../../../../.gitbook/assets/nested-screen-control-preview-screens-builder-processes.png)

## Delete the Control from a ProcessMaker Screen

{% hint style="warning" %}
Consider the following when deleting a configured Nested Screen control:

* Deleting a Nested Screen control also deletes the nested ProcessMaker Screen.
* Deleting a control also deletes configuration for that control. If you add another control, it will have default settings.
{% endhint %}

Click the **Delete** icon![](../../../../.gitbook/assets/delete-screen-control-screens-builder-processes.png)for the control to delete it.

## Settings <a id="inspector-settings"></a>

{% hint style="info" %}
### Permissions Required

Your user account or group membership must have the following permissions to edit a ProcessMaker Screen control:

* Screens: Edit Screens
* Screens: View Screens

See the ProcessMaker [Screens](../../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#screens) permissions or ask your ProcessMaker Administrator for assistance.

### New Topic

This topic is new for ProcessMaker version 4.0.1. See the [Release Notes](https://processmaker.gitbook.io/processmaker-release-notes/processmaker-4.0.x/processmaker-4.0.1-release-notes#screen-builder-1).
{% endhint %}

The Nested Screen control has the following panels that contain settings:

* \*\*\*\*[**Variable** panel](nested-screen-control-settings.md#variable-panel-settings)
* \*\*\*\*[**Advanced** panel](nested-screen-control-settings.md#advanced-panel-settings)

### Variable Panel Settings

Click the control while in [Design](../screens-builder-modes.md#design-mode) mode, and then click the **Variable** panel that is on the right-side of the Screen Builder canvas.

Below is the setting for the Nested Screen control in the **Variable** panel:

* [Screen](nested-screen-control-settings.md#screen)

#### Screen

Select which ProcessMaker Screen to nest into this control. The nested ProcessMaker Screen becomes the child Screen to the parent Screen that uses the Nested Screen control. Any ProcessMaker Screen [type](../types-for-screens.md) may be selected for nesting into a Nested Screen control. However, only [Form](../types-for-screens.md#form)- and [Display](../types-for-screens.md#display)-type ProcessMaker Screens preview in either [Design](../screens-builder-modes.md#design-mode) or [Preview](../screens-builder-modes.md#preview-mode) modes.

### Advanced Panel Settings

Click the control while in [Design](../screens-builder-modes.md#design-mode) mode, and then click the **Advanced** panel that is on the right-side of the Screen Builder canvas.

Below are settings for the Nested Screen control in the **Advanced** panel:

* [Visibility Rule](nested-screen-control-settings.md#visibility-rule)
* [CSS Selector Name](nested-screen-control-settings.md#css-selector-name)

#### Visibility Rule

Specify an expression that indicates the condition\(s\) under which this control displays. See [Expression Syntax Components for "Visibility Rule" Control Settings](expression-syntax-components-for-show-if-control-settings.md#expression-syntax-components-for-show-if-control-settings). If this setting does not have an expression, then this control displays by default.

#### CSS Selector Name

Enter the value to represent this control in custom CSS syntax when in [Custom CSS](../add-custom-css-to-a-screen.md#add-custom-css-to-a-processmaker-screen) mode. As a best practice, use the same **CSS Selector Name** value on different controls of the same type to apply the same custom CSS style to all those controls.

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

{% page-ref page="loop-control-settings.md" %}

{% page-ref page="record-list-control-settings.md" %}

{% page-ref page="image-control-settings.md" %}

{% page-ref page="submit-button-control-settings.md" %}

{% page-ref page="file-upload-control-settings.md" %}

{% page-ref page="file-download-control-settings.md" %}

{% page-ref page="validation-rules-for-validation-control-settings.md" %}

{% page-ref page="expression-syntax-components-for-show-if-control-settings.md" %}

