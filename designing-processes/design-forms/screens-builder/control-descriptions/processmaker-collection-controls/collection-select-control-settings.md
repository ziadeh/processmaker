---
description: >-
  Add a control in Form-type Screens that displays a set of records from a
  ProcessMaker Collection from which the Request participant can make a
  selection.
---

# Collection Select Control Settings

## Control Description

The Collection Select control functions similarly to a drop-down menu that allows a [Request](../../../../../using-processmaker/requests/what-is-a-request.md) participant or ProcessMaker Collection user to select one record from a Collection.

{% hint style="info" %}
See [What is a Collection?](../../../../../collections/what-is-a-collection.md) for more information about what Collections and records are.
{% endhint %}

When designing your ProcessMaker Screen, specify from which ProcessMaker Collection to reference the records that display as optional items for selection in the Collection Select control. Configure the Collection Select control to reference all the records in the specified Collection or use [PMQL](../../../../../using-processmaker/search-processmaker-data-using-pmql.md) to limit particular records to display as the optional items based on those records that meet the PMQL criteria.

For example, suppose that you have a ProcessMaker Collection of doctors in a medical clinic. A new patient indicates in a New Patient Screen whether that patient has a gender preference for a doctor by selecting that preference from a [Select](../select-control-settings.md) control. Use the Collection Select control and PMQL in the following ways:

* **No preference:** If the patient indicates no preference for the doctor's gender, then do not use PMQL to filter which records display. The Collection Select control displays all records from the ProcessMaker Collection \(all doctors in the clinic\).
* **Female preference:** If the patient indicates a preference to see a female doctor, then use PMQL to filter only female doctors in the clinic. Use the PMQL syntax `gender = "female"` if your records use a **Key Name** value of `gender`, and its setting is `female` for all female doctors. The Collection Select control displays only female doctors as optional items.
* **Male preference:** If the patient indicates a preference to see a male doctor, then use PMQL to filter only male doctors in the clinic. Use the PMQL syntax `gender = "male"` if your records use a **Key Name** value of `gender`, and its setting is `male` for all male doctors. The Collection Select control displays only male doctors as optional items.

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
6. Configure the Collection Select control. See Settings.
7. Validate that the control is configured correctly. See [Validate Your Screen](../../validate-your-screen.md#validate-a-processmaker-screen).

Below is a Collection Select control in [Preview mode](../../screens-builder-modes.md#preview-mode).



