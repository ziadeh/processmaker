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

Use the Nested Screen control to nest a separate [ProcessMaker Screen](../../what-is-a-form.md) into that control. In doing so, the separate ProcessMaker Screen embeds into the Nested Screen control. The Nested Screen control is a placeholder for the embedded ProcessMaker Screen such that the [Request](../../../../using-processmaker/requests/what-is-a-request.md) participant experiences the nested Screen as designed.

Any CSS in the ProcessMaker Screen as designed in [Custom CSS mode](../screens-builder-modes.md#custom-css-mode) take precedent over any CSS designed in nested Screens so that the Request participant has a unified experience that does not have a variety of design styles during the Request.

ProcessMaker Screen designers can easily build a Screen by placing modular components into one Screen. For example, in a ProcessMaker Screen designed for a purchase request, use Nested Screen controls as placeholders for the following components that are designed from separate Screens:

* 
Any ProcessMaker Screen [type](../types-for-screens.md) may be selected for nesting into a Nested Screen control. However, only [Form](../types-for-screens.md#form)- and [Display](../types-for-screens.md#display)-type ProcessMaker Screens preview in either [Design](../screens-builder-modes.md#design-mode) or [Preview](../screens-builder-modes.md#preview-mode) modes.

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
3. Locate the **Nested Screen** icon![](../../../../.gitbook/assets/nested-screen-control-screens-builder-processes.png)in the panel to the left of the Screen Builder canvas.
4. Drag the **Nested Screen** icon into the Screen Builder canvas. Existing controls on the Screens Builder canvas adjust positioning based on where you drag the control.
5. Place into the Screen Builder canvas where you want the control to display on the ProcessMaker Screen. Ensure that the control's placement accounts for the ProcessMaker Screen you intend to nest into this control. ![](../../../../.gitbook/assets/nested-screen-control-placed-screens-builder-processes.png) 
6. Configure the Nested Screen control. See [Settings](nested-screen-control-settings.md#inspector-settings).
7. Validate that the control is configured correctly. See [Validate Your Screen](../validate-your-screen.md#validate-a-processmaker-screen).

Below is a Nested Screen control in [Preview mode](../screens-builder-modes.md#preview-mode).

![A Form-type ProcessMaker Screen nested into a Nested Screen control](../../../../.gitbook/assets/nested-screen-control-preview-screens-builder-processes.png)

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

### New Topic

This topic is new for ProcessMaker version 4.0.1. See the [Release Notes](https://processmaker.gitbook.io/processmaker-release-notes/processmaker-4.0.x/processmaker-4.0.1-release-notes#screen-builder-1).
{% endhint %}

The Loop control has the following panels that contain settings:

* \*\*\*\*[**Variable** panel](loop-control-settings.md#variable-panel-settings)
* \*\*\*\*[**Configuration** panel](loop-control-settings.md#configuration-panel-settings)
* \*\*\*\*[**Advanced** panel](loop-control-settings.md#advanced-panel-settings)

### Variable Panel Settings

Click the control while in [Design](../screens-builder-modes.md#design-mode) mode, and then click the **Variable** panel that is on the right-side of the Screen Builder canvas.

Below is the setting for the Loop control in the **Variable** panel:

* [Variable Name](loop-control-settings.md#variable-name)

