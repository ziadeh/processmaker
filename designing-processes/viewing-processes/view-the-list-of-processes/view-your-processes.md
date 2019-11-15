---
description: View the active Processes in your organization.
---

# View Active Processes

## View All Active Processes

ProcessMaker displays all active [Processes](../what-is-a-process.md) in one table that Process Owners have created throughout your organization. This makes it easy to manage active Processes. An active Process is one in which has not been [archived](remove-a-process.md).

{% hint style="info" %}
### Permission Required

Your ProcessMaker user account or group membership must have the "Processes: View Processes" permission to view the list of Processes unless your user account has the **Make this user a Super Admin** setting selected.

See the [Processes](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.

### Looking for Inactive Processes?

Click the **Archived Processes** icon![](../../../.gitbook/assets/archived-processes-icon-processes.png)to view inactive Processes. [Archived Processes](remove-a-process.md) are by definition inactive.
{% endhint %}

Follow these steps to view all active Processes in your organization:

1. Ensure that you are [logged on](../../../using-processmaker/log-in.md#log-in) to ProcessMaker.
2. Click the **Designer** option from the top menu. The **Processes** tab displays all active Processes.

{% hint style="info" %}
Click the **Processes** icon![](../../../.gitbook/assets/processses-icon-processes.png)in the left side bar to view the **Processes** tab when you are viewing other Process-related pages.
{% endhint %}

![&quot;Processes&quot; tab displays all Processes in your organization](../../../.gitbook/assets/processes.png)

The **Processes** tab displays the following information in tabular format about active Processes:

* **Name:** The **Name** column displays the Process name. If the Process is not valid whereby it cannot successfully run Requests through completion, the following icon displays after the process name:![](../../../.gitbook/assets/invalid-process-icon-process-modeler.png).
* **Category:** The **Category** column displays in which [Process Category](manage-process-categories/what-is-a-process-category.md) the Process is assigned.
* **Owner:** The **Owner** column displays the Process Owner who maintains the Process. Hover your cursor over a user's avatar to view that person's full name.
* **Modified:** The **Modified** column displays the date and time the Process was last modified. The time zone setting to display the time is according to the ProcessMaker instance unless your [user profile's](../../../using-processmaker/profile-settings.md#change-your-profile-settings) **Time zone** setting is specified.
* **Created:** The **Created** column displays the date and time the Process was created. The time zone setting to display the time is according to the ProcessMaker instance unless your [user profile's](../../../using-processmaker/profile-settings.md#change-your-profile-settings) **Time zone** setting is specified.

{% hint style="info" %}
### Search for a Process

Use the [Search](../../../using-processmaker/requests/search-for-a-request.md) field to filter Processes that display.

### Create a Process

Click the **+Process** button. See [Create a New Process](create-a-process.md#create-a-new-process).

### Import a Process

Click the **Import** button. See [Import a BPMN-Compliant Process](import-a-bpmn-compliant-process.md#import-a-bpmn-compliant-process).

### Edit a Process

Click the **Open Modeler** icon![](../../../.gitbook/assets/edit-icon.png). See [Model Your Process](../../process-design/model-your-process/) for topics.

### Configure a Process

Click the **Configure** icon![](../../../.gitbook/assets/configure-process-icon-processes-page-processes.png). See [Edit Process Configuration](edit-the-name-description-category-or-status-of-a-process.md#edit-configuration-information-about-a-process).

### Export a Process

Click the **Export** icon![](../../../.gitbook/assets/export-process-icon-processes.png). See [Export a BPMN-Compliant Process](export-a-bpmn-compliant-process.md#export-a-bpmn-compliant-process).

### Archive a Process

Click the **Archive** icon![](../../../.gitbook/assets/archive-process-icon-processes-page-processes.png). See [Archive a Process](remove-a-process.md).

### Pause or Resume All Start Timer Events in a Process

Click the **Pause Start Timer Events** icon![](../../../.gitbook/assets/pause-start-timer-event-element-icon-processes.png)to stop the schedule for new Requests by pausing all [Start Timer Event](../../process-design/model-your-process/process-modeling-element-descriptions.md#start-timer-event) elements in the Process. Note that this icon only displays if that Process uses at least one Start Timer Event that is not paused.

Click the **Play Start Timer Events** icon![](../../../.gitbook/assets/play-start-timer-event-element-icon-processes.png)to resume the schedule for new Requests by resuming all Start Timer Event elements in the Process. Note that this icon only displays if that Process uses at least one Start Timer Event that is paused.

### No Processes?

If no active Processes exist, the following message displays: **No Results**.

### Display Information the Way You Want It

[Control how tabular information displays](../../../using-processmaker/control-how-requests-display-in-a-tab.md), including how to sort columns or how many items display per page.
{% endhint %}

## Related Topics

{% page-ref page="../what-is-a-process.md" %}

{% page-ref page="manage-process-categories/" %}

{% page-ref page="create-a-process.md" %}

{% page-ref page="import-a-bpmn-compliant-process.md" %}

{% page-ref page="search-for-a-process.md" %}

{% page-ref page="edit-the-name-description-category-or-status-of-a-process.md" %}

{% page-ref page="export-a-bpmn-compliant-process.md" %}

{% page-ref page="remove-a-process.md" %}

{% page-ref page="restore-a-process.md" %}

{% page-ref page="../../process-design/model-your-process/" %}

{% page-ref page="../../../using-processmaker/control-how-requests-display-in-a-tab.md" %}

