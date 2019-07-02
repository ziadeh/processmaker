---
description: >-
  Add a Submit control from which the form user can submit a form as part of a
  Request.
---

# Submit Control Settings

## Control Description

The Submit control adds a button from which the form user can submit the form as part of a Request. After using the Submit control, the form user cannot revise that form because the information included in the ProcessMaker Screen is sent to the next step in the Request.

{% hint style="info" %}
This control is not available for [Display](../types-for-screens.md#display)-type ProcessMaker Screens. See [Screen Types](../types-for-screens.md).
{% endhint %}

## Add the Control to a ProcessMaker Screen <a id="add-the-control-to-a-processmaker-screen"></a>

{% hint style="info" %}
Your user account or group membership must have the following permissions to add a control to a ProcessMaker Screen:

* Screens: View Screens
* Screens: Edit Screens

See the ProcessMaker [Screens](../../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#screens) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to add this control to the ProcessMaker Screen:

1. [Create](../../manage-forms/create-a-new-form.md) or [open](../../manage-forms/view-all-forms.md) the ProcessMaker Screen. The ProcessMaker Screen is in [Design mode](../screens-builder-modes.md#editor-mode).
2. View the ProcessMaker Screen page to which to add the control.
3. Go to the **Controls** panel on the left side of the ProcessMaker Screen.
4. Drag the **Submit** icon![](../../../../.gitbook/assets/submit-button-control-screens-builder-processes.png)from the **Controls** panel anywhere within the ProcessMaker Screen canvas. Existing controls on the ProcessMaker Screen canvas adjust positioning based on where you drag the control.
5. Place into the ProcessMaker Screen canvas where you want the control to display on the page.  

   ![](../../../../.gitbook/assets/submit-button-control-placed-screens-builder-processes.png)

6. Configure the Submit control. See [Inspector Settings](submit-button-control-settings.md#inspector-settings).

Below is a Submit control in Preview mode.

![Submit control in Preview mode using the &quot;Primary&quot; Variant option](../../../../.gitbook/assets/submit-button-control-preview-screens-builder-processes.png)

## Delete the Control from a ProcessMaker Screen

{% hint style="warning" %}
Deleting a control also deletes configuration for that control. If you add another control, it will have default settings.
{% endhint %}

Click the **Delete** icon![](../../../../.gitbook/assets/delete-screen-control-screens-builder-processes.png)for the control to delete it.

## Inspector Settings <a id="inspector-settings"></a>

{% hint style="info" %}
### Don't Know What the Inspector Panel Is?

See [View the Inspector Panel](../view-the-inspector-pane.md).

### Permissions Required

Your user account or group membership must have the following permissions to edit a ProcessMaker Screen control:

* Screens: View Screens
* Screens: Edit Screens

See the ProcessMaker [Screens](../../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#screens) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Below are Inspector settings for the Submit control:

* **Field Label:** Enter the field label text that displays. **New Submit** is the default value.
* **Variable Name:** Enter a unique name that represents this control's value. Use the **Variable Name** value in the following ways:

  * Reference this control by its **Variable Name** setting's value.
  * Reference this control's value in a different Screens Builder control. To do so, use mustache syntax and reference this control's **Variable Name** value in the target control. Example: `My full name is {{FullName}}`.
  * Reference this value to in [**Visibility Rule** setting expressions](expression-syntax-components-for-show-if-control-settings.md).

  This is a required setting.

* **Field Value:** Enter any alphanumeric value that the Submit control sends when the form user selects the button. This value can be evaluated in a rule.
* **Variant:** Select the style for the Submit control. The style changes the control's appearance but otherwise has no functional difference. Select from the following options:
  * **Primary:** Blue-colored background with white-colored **Field Label** text. Set as the default.
  * **Secondary:** Gray-colored background with white-colored **Field Label** text.
  * **Success:** Green-colored background with white-colored **Field Label** text.
  * **Danger:** Red-colored background with white-colored **Field Label** text.
  * **Warning:** Yellow-colored background with black-colored **Field Label** text.
  * **Info:** Teal-colored background with white-colored **Field Label** text.
  * **Light:** White-colored background with black-colored **Field Label** text.
  * **Dark:** Black-colored background with white-colored **Field Label** text.
  * **Link:** White-colored background with blue-colored **Field Label** text.
* **Visibility Rule:** Enter an expression that dictates the condition\(s\) under which this control displays. See [Expression Syntax Components for "Visibility Rule" Control Settings](expression-syntax-components-for-show-if-control-settings.md#expression-syntax-components-for-show-if-control-settings). If this setting does not have an expression, then this control displays by default.
* **CSS Selector Name:** Enter the value to represent this control in custom CSS syntax when in [Custom CSS](../add-custom-css-to-a-screen.md#add-custom-css-to-a-processmaker-screen) mode. As a best practice, use the same **CSS Selector Name** value on different controls to have the same custom CSS applied.

## Related Topics <a id="related-topics"></a>

{% page-ref page="../types-for-screens.md" %}

{% page-ref page="../view-the-inspector-pane.md" %}

{% page-ref page="./" %}

{% page-ref page="rich-text-control-settings.md" %}

{% page-ref page="text-control-settings.md" %}

{% page-ref page="line-input-control-settings.md" %}

{% page-ref page="select-control-settings.md" %}

{% page-ref page="radio-group-control-settings.md" %}

{% page-ref page="checkbox-control-settings.md" %}

{% page-ref page="textarea-control-settings.md" %}

{% page-ref page="date-picker-control-settings.md" %}

{% page-ref page="page-navigation-button-control-settings.md" %}

{% page-ref page="multi-column-button-control-settings.md" %}

{% page-ref page="record-list-control-settings.md" %}

{% page-ref page="image-control-settings.md" %}

{% page-ref page="file-upload-control-settings.md" %}

{% page-ref page="file-download-control-settings.md" %}

{% page-ref page="expression-syntax-components-for-show-if-control-settings.md" %}

