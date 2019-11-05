---
description: >-
  Add a control from which the Request participant can insert several values in
  a list.
---

# Record List Control Settings

## Control Description <a id="control-description"></a>

The Record List control records values that the [Request](../../../../using-processmaker/requests/what-is-a-request.md) participant enters into another page of the ProcessMaker [Screen](../../what-is-a-form.md). Optionally, values can be edited after the Request participant initially enters the record\(s\) into the secondary ProcessMaker Screen page.

For each option, enter a unique value that represents the option, and then enter the text that displays as the option. After your options are configured, sort the order in which they are to display in the control. Alternatively, provide options in the control in JSON format.

The page that records the submitted records cannot be on the same page as the Record List control.

{% hint style="info" %}
Do not confuse the Record List control with the ProcessMaker [Collections controls](processmaker-collection-controls/) that are part of the ProcessMaker [Collections package](../../../../package-development-distribution/package-a-connector/collections.md). ProcessMaker Collections use records in a different context. See [What is a Collection?](../../../../collections/what-is-a-collection.md).
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
3. Locate the **Record List** icon![](../../../../.gitbook/assets/record-list-control-screens-builder-processes.png)in the panel to the left of the Screens Builder canvas.
4. Drag the **Record List** icon into the Screens Builder canvas. Existing controls on the Screens Builder canvas adjust positioning based on where you drag the control.
5. Place into the Screens Builder canvas where you want the control to display on the ProcessMaker Screen.

   ![](../../../../.gitbook/assets/record-list-control-placed-screens-builder-processes.png)

6. Configure the Record List control. See [Settings](record-list-control-settings.md#inspector-settings).
7. Validate that the control is configured correctly. See [Validate Your Screen](../validate-your-screen.md#validate-a-processmaker-screen).
8. Create a new page in the ProcessMaker Screen. Use this page to design how the form user enters data that the Record List control records. The page that records the submitted records cannot be on the same page as the Record List control. See [Add a New Page to a ProcessMaker Screen](../add-a-new-page-to-a-screen.md#add-a-new-page-to-a-processmaker-screen).
9. On the new page, design the form using controls that the form user enters the data that the Record List control records. In each of the controls to record elements of the record list, ensure to use the same **Variable Name** value as you use in the Record List control's **Value** parameter. These values must match for the Record List control to correspond with each control in the secondary ProcessMaker Screen page.

## Example

Consider the following example. Configure a Record List control to record the following data about each attendee to a conference.

| Record List Value | Record List Content |
| :--- | :--- |
| firstname | First name of attendee |
| lastname | Last name of attendee |
| email | Email address of attendee |
| confirmation | Confirmation from the attendee |

The Record List control has the following configuration. See [Settings](record-list-control-settings.md#inspector-settings) for the Record List control setting descriptions.

![Record List control that contains records in Design mode](../../../../.gitbook/assets/record-list-control-example-screens-builder-processes.png)

On a secondary page, use ProcessMaker Screen controls for form users to enter values for each record. Ensure the following:

* The Record List control references the secondary page to record each record from each conference attendee. The page that records the submitted records cannot be on the same page as the Record List control. 
* In each of the controls to record values of the record list, ensure to use the same **Column Header** value as you use in the Record List control's **Variable Name** setting. These values must match for the Record List control to correspond with each control in the secondary page.

Below is the secondary page in [Preview mode](../screens-builder-modes.md#preview-mode) for each conference attendee to enter a record.

| Control Type | "Column Header" Value for Control | Corresponds to Record List Value |
| :--- | :--- | :--- |
| Line Input | firstname | First name of attendee |
| Line Input | lastname | Last name of attendee |
| Line Input | email | Email address of attendee |
| Select | confirmation | Confirmation from the attendee |

![Secondary page with controls to record attendance confirmation in Preview mode](../../../../.gitbook/assets/record-list-control-example-secondary-page-screens-builder-processes.png)

## Delete the Control from a ProcessMaker Screen

{% hint style="warning" %}
Deleting a control also deletes configuration for that control. If you add another control, it will have default settings.
{% endhint %}

Click the **Delete** icon![](../../../../.gitbook/assets/delete-screen-control-screens-builder-processes.png)for the control to delete it.

## Settings <a id="inspector-settings"></a>

{% hint style="info" %}
Your user account or group membership must have the following permissions to edit a ProcessMaker Screen control:

* Screens: View Screens
* Screens: Edit Screens

See the ProcessMaker [Screens](../../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#screens) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

The Record List control has the following panels that contain settings:

* \*\*\*\*[**Variable** panel](record-list-control-settings.md#variable-panel-settings)
* \*\*\*\*[**Design** panel](record-list-control-settings.md#design-panel-settings)

### Variable Panel Settings

Click the control while in [Design](../screens-builder-modes.md#design-mode) mode, and then click the **Variable** panel that is on the right-side of the Screens Builder canvas.

Below are settings for the Record List control in the **Variable** panel:

* **Variable Name:** Enter a unique name containing at least one letter that represents this control's value. Use the **Variable Name** value in the following ways:

  * Reference this control by its **Variable Name** setting's value.
  * Reference this control's value in a different Screens Builder control. To do so, use mustache syntax and reference this control's **Variable Name** value in the target control. Example: `{{ RecordListControl }}`.
  * Reference this value in [**Visibility Rule** setting expressions](expression-syntax-components-for-show-if-control-settings.md).

  This is a required setting.

* **Editable?:** Select to indicate that the record that the Request participant enters can be edited. Otherwise, deselect to indicate that the form user's record cannot be changed. This setting is not selected by default.
* **Fields List:** Specify the list of options the Record List records from the Request participant. Each option in the **Fields List** setting references a control on a secondary ProcessMaker Screen page that uses the same **Field Name** value as entered into the **Value** parameter. These values must match for the Record List control to correspond with each control in the secondary ProcessMaker Screen page. See the [example](record-list-control-settings.md#example). The following message displays in Preview mode when not all the **Value** parameters match with a control's **Field Name** value on the secondary page: **There is no records in this list or the data is invalid.**  
  Switch the **Show in Json Format** toggle key to display these settings in JSON.   

  ![](../../../../.gitbook/assets/fields-list-option-record-list-control-screens-builder-processes.png)

  Each option has the following settings:

  * **Value:** **Value** is the internal data name for the option that only the Process Owner views at design time. Make note of each **Value** parameter you enter here, and then ensure to use the same **Field Name** value for the corresponding control in the secondary page to record that field's value for the record. These values must match for the Record List control to correspond with each control in the secondary ProcessMaker Screen page.
  * **Content:** **Content** is the option label to indicate what content the target control on the secondary ProcessMaker Screen page records. The Process Owner views this at design time and does not display to the Request participant.
  * **Actions:** Click the **Remove**![](../../../../.gitbook/assets/options-list-delete-option-icon-screens-builder-processes.png)icon to remove the field item.

  Follow these steps to add an option:

  1. Click **Add Option** from below the **Fields List** setting. The **Add New Option** screen displays.

     ​![](../../../../.gitbook/assets/add-new-option-screen-screen-builder-processes.png)​

  2. In the **Value** field, enter the **Value** option value \(as described above\).
  3. In the **Content** field, enter the **Content** option value \(as described above\).
  4. Click **OK**. The field item displays below the existing items in **Fields List**.

* **Record Form:** Select from which ProcessMaker Screen page to add/edit records. The page that records the submitted records cannot be on the same page as the Record List control. The following message displays in Preview mode when the Record List control references the same page the control is placed: **The add/edit form referencing our own form which is not allowed.**

### Design Panel Settings

Click the control while in [Design](../screens-builder-modes.md#design-mode) mode, and then click the **Design** panel that is on the right-side of the Screens Builder canvas.

Below are settings for the Record List control in the **Design** panel:

* **List Label:** Enter the field label text that displays. **New Record List** is the default value.
* **Element Background Color:** Select to specify the background color of this control.
* **Text Color:** Select to specify the text color that displays in this control.
* **Visibility Rule:** Specify an expression that indicates the condition\(s\) under which this control displays. See [Expression Syntax Components for "Visibility Rule" Control Settings](expression-syntax-components-for-show-if-control-settings.md#expression-syntax-components-for-show-if-control-settings). If this setting does not have an expression, then this control displays by default.
* **CSS Selector Name:** Enter the value to represent this control in custom CSS syntax when in [Custom CSS](../add-custom-css-to-a-screen.md#add-custom-css-to-a-processmaker-screen) mode. As a best practice, use the same **CSS Selector Name** value on different controls of the same type to apply the same custom CSS style to all those controls.

## Related Topics <a id="related-topics"></a>

{% page-ref page="../types-for-screens.md" %}

{% page-ref page="../validate-your-screen.md" %}

{% page-ref page="./" %}

{% page-ref page="processmaker-collection-controls/collection-select-control-settings.md" %}

{% page-ref page="processmaker-collection-controls/collection-record-control-settings.md" %}

{% page-ref page="rich-text-control-settings.md" %}

{% page-ref page="line-input-control-settings.md" %}

{% page-ref page="textarea-control-settings.md" %}

{% page-ref page="select-list-control-settings.md" %}

{% page-ref page="select-control-settings.md" %}

{% page-ref page="radio-group-control-settings.md" %}

{% page-ref page="checkbox-control-settings.md" %}

{% page-ref page="date-picker-control-settings.md" %}

{% page-ref page="page-navigation-button-control-settings.md" %}

{% page-ref page="multi-column-button-control-settings.md" %}

{% page-ref page="image-control-settings.md" %}

{% page-ref page="submit-button-control-settings.md" %}

{% page-ref page="file-upload-control-settings.md" %}

{% page-ref page="file-download-control-settings.md" %}

{% page-ref page="validation-rules-for-validation-control-settings.md" %}

{% page-ref page="expression-syntax-components-for-show-if-control-settings.md" %}

