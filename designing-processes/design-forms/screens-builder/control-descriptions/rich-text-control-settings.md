---
description: Add a control that displays HTML-formatted text.
---

# Rich Text Control Settings

## Control Description

The Rich Text control displays HTML-formatted text. Use the What-You-See-Is-What-You-Get \(WYSIWYG\) editor to display a variety of text styles for the [Request ](../../../../using-processmaker/requests/what-is-a-request.md)participant.

Aside from rich text styles, the Rich Text control can display the following information regarding in-progress [Requests](../../../../using-processmaker/requests/what-is-a-request.md):

* **Request data:** Display the value of another control in the same or different ProcessMaker Screen by referencing that control's **Variable Value** setting value using mustache syntax. Example: `{{ FullName }}`.
* **Magic Variable values:** Display the value of a [Magic Variable](../../../reference-global-variables-in-your-processmaker-assets.md) by referencing the Magic Variable using mustache syntax. Example: `{{ _user.fullname }}`.

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
3. Locate the **Rich Text** icon![](../../../../.gitbook/assets/rich-text-control-screens-builder-processes.png)in the panel to the left of the Screens Builder canvas.
4. Drag the **Rich Text** icon into the Screens Builder canvas. Existing controls on the Screens Builder canvas adjust positioning based on where you drag the control.
5. Place into the Screens Builder canvas where you want the control to display on the ProcessMaker Screen.  

   ![](../../../../.gitbook/assets/rich-text-control-placed-screens-builder-processes.png)

6. Configure the Rich Text control. See [Settings](rich-text-control-settings.md#settings).
7. Validate that the control is configured correctly. See [Validate Your Screen](../validate-your-screen.md#validate-a-processmaker-screen).

Below is a Rich Text control in [Preview mode](../screens-builder-modes.md#preview-mode).

![Rich Text control in Preview mode](../../../../.gitbook/assets/rich-text-control-preview-screens-builder-processes.png)

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

Click the control to view its settings in the **Design** panel that is on the right-side of the Screens Builder canvas. Below are settings for the Rich Text control:

* **Rich Text Content:** Enter the text to display in the Rich Text control using HTML syntax. Alternatively, use the WYSIWYG rich text editor to enter your text. **Rich text editor** is the default value.
* **Element Background Color:** Select to specify the background color of this control.
* **Visibility Rule:** Enter an expression that indicates the condition\(s\) under which this control displays. See [Expression Syntax Components for "Visibility Rule" Control Settings](expression-syntax-components-for-show-if-control-settings.md#expression-syntax-components-for-show-if-control-settings). If this setting does not have an expression, then this control displays by default.
* **CSS Selector Name:** Enter the value to represent this control in custom CSS syntax when in [Custom CSS](../add-custom-css-to-a-screen.md#add-custom-css-to-a-processmaker-screen) mode. As a best practice, use the same **CSS Selector Name** value on different controls of the same type to apply the same custom CSS style to all those controls.

{% hint style="info" %}
Below are some ways to render Request data to display as text in a Rich Text control:

* Use mustache template syntax to reference the Request data. Example: `Customer First Order Name: {{ customer.orders.0.name }}`
* Include your own HTML syntax in the Text control along with template references. Example: `Customer First Name: <strong>{{ customer.firstname }}</strong>`
{% endhint %}

## Related Topics

{% page-ref page="../types-for-screens.md" %}

{% page-ref page="../validate-your-screen.md" %}

{% page-ref page="./" %}

{% page-ref page="line-input-control-settings.md" %}

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

