---
description: >-
  Add a control in Form-type Screens that displays records from a ProcessMaker
  Collection from which the Request participant can make a selection.
---

# Collection Select Control Settings

## Control Description

The Collection Select control functions similarly to a drop-down menu that allows a [Request](../../../../../using-processmaker/requests/what-is-a-request.md) participant to select one record from a ProcessMaker Collection. If the ProcessMaker [Collections package](../../../../../package-development-distribution/package-a-connector/collections.md) is not installed to the ProcessMaker instance, then the Collection Select control is not available.

{% hint style="info" %}
See [What is a Collection?](../../../../../collections/what-is-a-collection.md) for more information about what Collections and records are.
{% endhint %}

When designing your ProcessMaker Screen with the Collection Select control, specify from which ProcessMaker Collection to reference its records. These records display as optional items for selection in the Collection Select control. Configure the Collection Select control to reference all the records in the specified Collection or use [ProcessMaker Query Language \(PMQL\)](../../../../../using-processmaker/search-processmaker-data-using-pmql.md) to limit particular records to display as the optional items based on those records that meet the PMQL filtering criteria.

For example, suppose that you have a ProcessMaker Collection of doctors in a medical clinic. A new patient enters information into a ProcessMaker [Screen](../../../what-is-a-form.md) whether that patient has a gender preference for a doctor by selecting that preference from a [Select](../select-control-settings.md) control. Use the Collection Select control and PMQL syntax in the following ways:

* **No preference:** If the patient indicates no preference for the doctor's gender, then do not use PMQL to filter which records display. The Collection Select control displays all records from the ProcessMaker Collection \(all doctors in the clinic\).
* **Female preference:** If the patient indicates a preference to see a female doctor, then use a PMQL expression to filter only female doctors in the clinic. Use the PMQL expression`gender = "female"` if your records use a **Key Name** value of `gender`, and its setting is `female` for all female doctors. The Collection Select control displays only female doctors as optional items.
* **Male preference:** If the patient indicates a preference to see a male doctor, then use a PMQL expression to filter only male doctors in the clinic. Use the PMQL expression `gender = "male"` if your records use a **Key Name** value of `gender`, and its setting is `male` for all male doctors. The Collection Select control displays only male doctors as optional items.

## Add the Control to a ProcessMaker Screen

{% hint style="info" %}
### ProcessMaker Package Required

The [Collections package](../../../../../package-development-distribution/package-a-connector/collections.md) must be installed in your ProcessMaker instance to use the Collection Select control. The Collections package is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Collections package can be installed in your ProcessMaker instance.

### Permissions Required

Your ProcessMaker user account or group membership must have the following permissions to add a control to a ProcessMaker Screen unless your user account has the **Make this user a Super Admin** setting selected:

* Screens: View Screens
* Screens: Edit Screens

See the ProcessMaker [Screens](../../../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#screens) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to add this control to the ProcessMaker Screen:

1. [Create a new ProcessMaker Screen](../../../manage-forms/create-a-new-form.md) or click the **Edit** icon![](../../../../../.gitbook/assets/edit-icon.png)to edit the selected Screen. The ProcessMaker Screen is in [Design mode](../../screens-builder-modes.md#editor-mode).
2. View the ProcessMaker Screen page to which to add the control.
3. Locate the **Collection Select** icon![](../../../../../.gitbook/assets/collection-select-control-screens-builder-package-processes.png)in the panel to the left of the Screens Builder canvas.
4. Drag the **Collection Select** icon into the Screens Builder canvas. Existing controls on the Screens Builder canvas adjust positioning based on where you drag the control.
5. Place into the Screens Builder canvas where you want the control to display on the ProcessMaker Screen. ![](../../../../../.gitbook/assets/collection-select-control-placed-screens-builder-package-processes.png) 
6. Configure the Collection Select control. See [Settings](collection-select-control-settings.md#settings).
7. Validate that the control is configured correctly. See [Validate Your Screen](../../validate-your-screen.md#validate-a-processmaker-screen).

Below is a Collection Select control in [Preview mode](../../screens-builder-modes.md#preview-mode).

![Collection Select control in Preview mode](../../../../../.gitbook/assets/collection-select-control-preview-screens-builder-processes.png)

## Delete the Control from a ProcessMaker Screen

{% hint style="warning" %}
Deleting a control also deletes configuration for that control. If you add another control, it will have default settings.
{% endhint %}

Click the **Delete** icon![](../../../../../.gitbook/assets/delete-screen-control-screens-builder-processes.png)for the control to delete it.

## Settings

{% hint style="info" %}
### ProcessMaker Package Required

The [Collections package](../../../../../package-development-distribution/package-a-connector/collections.md) must be installed in your ProcessMaker instance to use the Collection Select control. The Collections package is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Collections package can be installed in your ProcessMaker instance.

### Permissions Required

Your ProcessMaker user account or group membership must have the following permissions to add a control to a ProcessMaker Screen unless your user account has the **Make this user a Super Admin** setting selected:

* Screens: View Screens
* Screens: Edit Screens

See the ProcessMaker [Screens](../../../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#screens) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

The Collection Select control has the following panels that contain settings:

* \*\*\*\*[**Variable** panel](collection-select-control-settings.md#variable-panel-settings)
* \*\*\*\*[**Configuration** panel](collection-select-control-settings.md#configuration-panel-settings)
* \*\*\*\*[**Design** panel](collection-select-control-settings.md#design-panel-settings)
* \*\*\*\*[**Advanced** panel](collection-select-control-settings.md#advanced-panel-settings)

### Variable Panel Settings

Click the control while in [Design](../../screens-builder-modes.md#design-mode) mode, and then click the **Variable** panel that is on the right-side of the Screens Builder canvas.

Below are settings for the Collection Select control in the **Variable** panel:



### Configuration Panel Settings



### Design Panel Settings



### Advanced Panel Settings



## Related Topics

{% page-ref page="../../../../../collections/what-is-a-collection.md" %}

{% page-ref page="../../../../../package-development-distribution/package-a-connector/collections.md" %}

{% page-ref page="../../types-for-screens.md" %}

{% page-ref page="../../validate-your-screen.md" %}

{% page-ref page="../" %}

{% page-ref page="collection-record-control-settings.md" %}

{% page-ref page="../rich-text-control-settings.md" %}

{% page-ref page="../textarea-control-settings.md" %}

{% page-ref page="../select-control-settings.md" %}

{% page-ref page="../radio-group-control-settings.md" %}

{% page-ref page="../checkbox-control-settings.md" %}

{% page-ref page="../date-picker-control-settings.md" %}

{% page-ref page="../page-navigation-button-control-settings.md" %}

{% page-ref page="../multi-column-button-control-settings.md" %}

{% page-ref page="../record-list-control-settings.md" %}

{% page-ref page="../image-control-settings.md" %}

{% page-ref page="../submit-button-control-settings.md" %}

{% page-ref page="../file-upload-control-settings.md" %}

{% page-ref page="../file-download-control-settings.md" %}

{% page-ref page="../validation-rules-for-validation-control-settings.md" %}

