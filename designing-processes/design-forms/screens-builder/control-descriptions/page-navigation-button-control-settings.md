---
description: >-
  Add a Page Navigation control from which the Request participant can go to
  another page in a multi-page ProcessMaker Screen.
---

# Page Navigation Control Settings

## Control Description <a id="control-description"></a>

The Page Navigation control adds a button from which the [Request](../../../../using-processmaker/requests/what-is-a-request.md) participant can go to another page in a multi-page ProcessMaker [Screen](../../what-is-a-form.md). 

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
3. Locate the **Page Navigation** icon![](../../../../.gitbook/assets/page-navigation-control-screens-builder-package-processes.png)in the panel to the left of the Screen Builder canvas.
4. Drag the **Page Navigation** icon into the Screen Builder canvas. Existing controls on the Screens Builder canvas adjust positioning based on where you drag the control.
5. Place into the Screen Builder canvas where you want the control to display on the ProcessMaker Screen.  

   ![](../../../../.gitbook/assets/page-navigation-control-placed-screens-builder-processes.png)

6. Configure the Page Navigation control. See [Settings](page-navigation-button-control-settings.md#inspector-settings).
7. Validate that the control is configured correctly. See [Validate Your Screen](../validate-your-screen.md#validate-a-processmaker-screen).

Below is a Page Navigation control in [Preview mode](../screens-builder-modes.md#preview-mode).

![Page Navigation control in Preview mode using the &quot;Secondary&quot; Variant option](../../../../.gitbook/assets/page-navigation-button-control-preview-screens-builder-processes.png)

## Move the Control on the Page

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to move a control in a ProcessMaker Screen page unless your user account has the **Make this user a Super Admin** setting selected:

* Screens: Edit Screens
* Screens: View Screens

See the ProcessMaker [Screens](../../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#screens) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

After [adding a control to a ProcessMaker Screen page](page-navigation-button-control-settings.md#add-the-control-to-a-processmaker-screen), you may move it to another location on that page such that it is above or below other controls placed on that page. A control cannot be moved to another [ProcessMaker Screen](../../what-is-a-form.md) page.

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

The Page Navigation control has the following panels that contain settings:

* \*\*\*\*[**Variable** panel](page-navigation-button-control-settings.md#variable-panel-settings)
* \*\*\*\*[**Configuration** panel](page-navigation-button-control-settings.md#configuration-panel-settings)
* \*\*\*\*[**Design** panel](page-navigation-button-control-settings.md#design-panel-settings)
* \*\*\*\*[**Advanced** panel](page-navigation-button-control-settings.md#advanced-panel-settings)

### Variable Panel Settings

Click the control while in [Design](../screens-builder-modes.md#design-mode) mode, and then click the **Variable** panel that is on the right-side of the Screen Builder canvas.

Below is the setting for the Page Navigation control in the **Variable** panel:

* [Button Label](page-navigation-button-control-settings.md#button-label)

#### Button Label

Enter the text label that displays for this control. **Page Navigation** is the default value.

### Configuration Panel Settings

Click the control while in [Design](../screens-builder-modes.md#design-mode) mode, and then click the **Configuration** panel that is on the right-side of the Screen Builder canvas.

Below is the setting for the Page Navigation control in the **Configuration** panel:

* [Destination Screen](page-navigation-button-control-settings.md#destination-screen)

#### Destination Screen

Select the destination page to which to navigate in a multi-page [ProcessMaker Screen](../../what-is-a-form.md).

### Design Panel Settings

Click the control while in [Design](../screens-builder-modes.md#design-mode) mode, and then click the **Design** panel that is on the right-side of the Screen Builder canvas.

Below is the setting for the Page Navigation control in the **Design** panel:

* [Button Variant Style](page-navigation-button-control-settings.md#button-variant-style)

#### Button Variant Style

Select the style for the Page Navigation control. The style changes the control's appearance but otherwise has no functional difference. Select from the following options:

* **Primary:** Blue-colored background with white-colored **Button Label** text. This is the default option.
* **Secondary:** Gray-colored background with white-colored **Button Label** text.
* **Success:** Green-colored background with white-colored **Button Label** text.
* **Danger:** Red-colored background with white-colored **Button Label** text.
* **Warning:** Yellow-colored background with black-colored **Button Label** text.
* **Info:** Teal-colored background with white-colored **Button Label** text.
* **Light:** White-colored background with black-colored **Button Label** text.
* **Dark:** Black-colored background with white-colored **Button Label** text.
* **Link:** White-colored background with blue-colored **Button Label** text.

### Advanced Panel Settings

Click the control while in [Design](../screens-builder-modes.md#design-mode) mode, and then click the **Advanced** panel that is on the right-side of the Screen Builder canvas.

Below are settings for the Page Navigation control in the **Advanced** panel:

* [Visibility Rule](page-navigation-button-control-settings.md#visibility-rule)
* [CSS Selector Name](page-navigation-button-control-settings.md#css-selector-name)

#### Visibility Rule

Specify an expression that indicates the condition\(s\) under which this control displays. See [Expression Syntax Components for "Visibility Rule" Control Settings](expression-syntax-components-for-show-if-control-settings.md#expression-syntax-components-for-show-if-control-settings). If this setting does not have an expression, then this control displays by default.

{% hint style="info" %}
To make this control hidden until another control contains a value, enter the **Variable Name** setting value of that control to this control's **Visibility Rule** setting.
{% endhint %}

#### CSS Selector Name

Enter the value to represent this control in custom CSS syntax when in [Custom CSS](../add-custom-css-to-a-screen.md#add-custom-css-to-a-processmaker-screen) mode. As a best practice, use the same **CSS Selector Name** value on different controls of the same type to apply the same custom CSS style to all those controls.

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

