---
description: Edit the configuration and notifications for a Process.
---

# Configure a Process

## Configure a Process

{% hint style="info" %}
### Looking for Process Model Editing?

Process configuration is different than Process model editing. See [Model Your Process](../../process-design/model-your-process/) for topics.

### Permissions Required

Your ProcessMaker user account or group membership must have the following permissions to configure a Process unless your user account has the **Make this user a Super Admin** setting selected:

* Processes: View Processes
* Processes: Edit Processes

See the ProcessMaker [Processes](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to configure a Process:

1. [View your active Processes.](./#view-your-processes) The **Processes** tab displays.
2. Click the **Configure** icon![](../../../.gitbook/assets/configure-process-icon-processes-page-processes.png)for your Process. The **Edit** page displays.  

   ![](../../../.gitbook/assets/edit-process-page-processes.png)

3. Edit the following Process configuration as necessary:
   * In the **Name** setting, edit the Process name. This is a required setting.
   * In the **Description** setting, edit the description of the Process. This is a required setting.
   * From the **Category** drop-down menu, select to which categories to assign this Process. In doing so, Process Categories may be sorted from the [**Processes** page](view-your-processes.md#view-all-active-processes). To remove a Process Category that is currently selected, click the ![](../../../.gitbook/assets/remove-group-user-admin.png)icon for that selection or press `Enter` when the drop-down is visible. This is a required setting. See [What is a Process Category?](manage-process-categories/what-is-a-process-category.md) for more information how this affects new [Requests](../../../using-processmaker/requests/what-is-a-request.md) for this Process.
   * From the **Cancel Request** drop-down menu, assign which ProcessMaker user\(s\) or group\(s\) have permission to [cancel Requests](../../../using-processmaker/requests/delete-a-request.md) from this Process. If no users or groups are selected, no one can cancel a Request from this Process. Type into the **Cancel Request** setting to filter ProcessMaker users and/or groups that display in that setting's drop-down menu. To remove a ProcessMaker user or group that is currently selected, click the ![](../../../.gitbook/assets/remove-group-user-admin.png)icon for that selection or press `Enter` when the drop-down is visible.
   * From the **Cancel Screen** drop-down menu, select a [Display](../../design-forms/screens-builder/types-for-screens.md#display)-type ProcessMaker Screen to display when a Request for this Process is canceled.
   * From the **Edit Data** drop-down menu, assign which ProcessMaker user\(s\) or group\(s\) have permission to [edit Request data](../../../using-processmaker/requests/request-details/summary-for-completed-requests.md#editable-request-data) from this Process. To remove a ProcessMaker user or group that is currently selected, click the ![](../../../.gitbook/assets/remove-group-user-admin.png)icon for that selection or press `Enter` when the drop-down is visible.
   * From the **Request Detail Screen** drop-down menu, select a Display-type ProcessMaker Screen to display details for any Request of that Process.
4. Click **Save**.

## Configure Process Notifications

{% hint style="info" %}
Your user account or group membership must have the following permissions to configure a Process's notifications:

* Processes: View Processes
* Processes: Edit Processes

See the [Process](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Configure Process notifications to notify Process requesters and/or participants when any of the following Request events occur:

* **Request started:** A Request for this Process started.
* **Request canceled:** A Request for this Process was canceled.
* **Request completed:** A Request for this Process completed.

Process notifications can be sent to the following sets of users or group members:

* **Requester:** A Requester is any user or group member who has been granted permission to start a Request for this Process.
* **Request participants:** A Request participant is any user or group member who participates in a specific Request for this Process. A Request participant is an individual who is assigned a Task in the Request.

Follow these steps to configure notifications for a Process:

1. [View your active Processes.](./#view-your-processes) The **Processes** page displays.
2. Select the **Config** icon![](../../../.gitbook/assets/configure-process-icon-processes-page-processes.png)for your Process. The **Edit Configuration** page displays.
3. Click the **Notifications** tab.  

   ![](../../../.gitbook/assets/edit-process-notifications-processes.png)

4. Toggle any of the following settings as necessary:
   * **Request Started:** Toggle the **Request Started** setting to indicate whether requesters are notified that a Request from this Process started.
   * **Request Canceled:** Toggle the **Request Canceled** setting to indicate whether requesters and/or Request participants are notified that a Request from this Process was canceled.
   * **Request Completed:** Toggle the **Request Completed** setting to indicate whether requesters and/or Request participants are notified that a Request from this Process completed.
5. Click **Save**.

## Assign ProcessMaker Vocabularies That Validate Request Data for a Process

{% hint style="info" %}
### ProcessMaker Package Required

Your ProcessMaker instance must have the [Vocabularies package](../../../package-development-distribution/package-a-connector/vocabularies.md) installed to assign which ProcessMaker Vocabularies validate Request data for a Process. Use the Vocabularies package to maintain uniform JSON schemas across all assets in your organization. These assets include [Processes](../what-is-a-process.md), [ProcessMaker Screens](../../design-forms/what-is-a-form.md), and [ProcessMaker Scripts](../../scripts/what-is-a-script.md).

A ProcessMaker Vocabulary is a JSON schema. The JSON schema describes the data objects, types, and structure that you want in both a machine and human readable format. Apply one or more ProcessMaker Vocabularies to your Processes and/or specific BPMN 2.0 elements in your Process models to ensure the JSON data model in Request data complies with the data structure outlined in the JSON schema that you need to meet regulatory specifications or ensure Request data contains required information.

The Vocabularies package is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Vocabularies package can be installed in your ProcessMaker instance.

### Permissions Required

Your user account or group membership must have the following permissions to configure a Process's available Vocabularies:

* Processes: View Processes
* Processes: Edit Processes

See the [Process](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Assign [ProcessMaker Vocabularies](../../vocabularies-management/what-is-a-vocabulary.md) that validate Request data complies with a specific JSON schema. This is often mandatory for many types of business sectors including banking and healthcare. Ensure the quality and compliance of Request data. For example, during a Loan Application process, ensure that personal information has been included in the Request to that moment in that in-progress Request. The Vocabularies package must be installed in your ProcessMaker instance to make this configuration.

Each moment ProcessMaker evaluates workflow routing for an in-progress Request, ProcessMaker also evaluates the Request data's conformity to the ProcessMaker Vocabularies applied to the Process and/or a specific BPMN 2.0 element in the Process model. The Request's JSON data model must conform to the ProcessMaker Vocabulary's JSON schema.

During an in-progress Request, if ProcessMaker evaluates that the Request data no longer complies with all ProcessMaker Vocabularies to that moment, the Request status changes from In Progress to Error. The error displays in the [Request summary](../../../using-processmaker/requests/request-details/summary-for-requests-with-errors.md). ProcessMaker Vocabularies are cumulative in an in-progress Request: as the Request progresses, if Request data does not conform with any Vocabulary's JSON schema to that moment in the Request, the Request errors.

If no ProcessMaker Vocabularies are assigned, ProcessMaker does not validate Request data complies with a specific JSON schema prior to continuing workflow for that Request.

One or more ProcessMaker Vocabularies must be created to your ProcessMaker instance before assigning a Vocabulary. See [Create a New Vocabulary](../../vocabularies-management/manage-your-vocabularies/create-a-new-vocabulary.md#create-a-new-processmaker-vocabulary). Multiple ProcessMaker Vocabularies can be assigned to a Process.

Follow these steps to assign ProcessMaker Vocabularies that validate Request data from this Process:

1. [View your active Processes.](./#view-your-processes) The **Processes** page displays.
2. Select the **Config** icon![](../../../.gitbook/assets/configure-process-icon-processes-page-processes.png)for your Process. The **Edit** page displays.
3. Click the **Vocabularies** tab. If the Vocabularies package is not installed then the **Vocabularies** tab is not visible and this configuration cannot be performed.  

   ![](../../../.gitbook/assets/vocabularies-tab-process-configuration-edit-processes.png)

4. From the **Select process vocabularies** drop-down, select which ProcessMaker Vocabularies are available for this Process.

   If no ProcessMaker Vocabularies are configured in your ProcessMaker instance, then the following message displays: **List is empty.** Create at least one ProcessMaker Vocabulary. See [Create a New Vocabulary](../../vocabularies-management/manage-your-vocabularies/create-a-new-vocabulary.md#create-a-new-processmaker-vocabulary).

   Type into the **Select process vocabularies** setting to filter ProcessMaker Vocabularies that display in that setting's drop-down menu. To remove a ProcessMaker Vocabulary that is currently selected, click the ![](../../../.gitbook/assets/remove-group-user-admin.png)icon for that selection or press **Enter** when the drop-down is visible.

5. Click **Save**.

## Related Topics

{% page-ref page="../what-is-a-process.md" %}

{% page-ref page="view-your-processes.md" %}

{% page-ref page="manage-process-categories/" %}

{% page-ref page="create-a-process.md" %}

{% page-ref page="import-a-bpmn-compliant-process.md" %}

{% page-ref page="search-for-a-process.md" %}

{% page-ref page="export-a-bpmn-compliant-process.md" %}

{% page-ref page="remove-a-process.md" %}

{% page-ref page="restore-a-process.md" %}

{% page-ref page="../../../using-processmaker/requests/request-details/summary-for-requests-with-errors.md" %}

