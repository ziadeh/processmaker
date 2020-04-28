---
description: View Tasks that are assigned to you that you have not completed.
---

# View Tasks You Need to Do

## View Your Assigned Tasks

The **To Do** page displays all Tasks that are assigned to you.

Follow these steps to view your assigned Tasks:

1. Ensure that you are [logged on](../log-in.md#log-in) to ProcessMaker.
2. Click the **Tasks** option from the top menu. The **To Do Tasks** page displays. Tasks that display on this page are assigned to you.

{% hint style="info" %}
Click the **To Do** icon![](../../.gitbook/assets/to-do-icon-tasks.png) in the left sidebar to view your assigned Tasks when you are viewing other Task-related pages. Note that if the [Saved Search package](../../package-development-distribution/package-a-connector/saved-searches-package.md) is installed in your ProcessMaker instance, the [Saved Search](../save-and-share-request-and-task-related-searches/what-is-a-saved-search.md) for Tasks you need to do displays.
{% endhint %}

Below is an example of the **To Do Tasks** page that displays your assigned Tasks. The [Saved Search package](../../package-development-distribution/package-a-connector/saved-searches-package.md) is not installed in this example, so this page displays in the ProcessMaker open-source edition.

![&quot;To Do Tasks&quot; page displays your assigned Tasks](../../.gitbook/assets/to-do-tasks-page.png)

The **To Do Tasks** page displays the following information in tabular format about your assigned Tasks:

* **Task:** The **Task** column displays the name of the assigned Task. Click the Task name to [open the selected Task and view its summary](view-a-task-summary.md#summary-for-an-assigned-task).
* **Status:** The **Status** column displays the status of the Task. Since all Tasks in the **To Do Tasks** page are Tasks you have not completed, all Tasks display with the In Progress status, represented by the![](../../.gitbook/assets/in-progress-status-icon-requests.png)icon.
* **Request:** The **Request** column displays the Request associated with the assigned Task. Click the Request name to [view the Request summary](../requests/request-details/).
* **Assignee:** The **Assignee** column displays your avatar since all Tasks in the **To Do Tasks** page are assigned to you.
* **Due:** The **Due** column displays the date and time the Task is due. If **n/a** displays, then no due date was set to the Task. The time zone setting to display the time is according to the ProcessMaker instance unless your [user profile's](../profile-settings.md#change-your-profile-settings) **Time zone** setting is specified.

{% hint style="info" %}
### View an Assigned Task and Its Summary

To view an [assigned Task and its summary](view-a-task-summary.md#summary-for-an-assigned-task), do one of the following:

* From the **Task** column, click the Task name that you want to view.
* Click the **Open Task** icon![](../../.gitbook/assets/open-request-icon-requests.png)for the Task name that you want to view.

### View a Request Summary Associated with a Task

To [view a Request summary](../requests/request-details/), do one of the following:

* From the **Request** column, click the Request for the assigned Task.
* Click the **Open Request** icon![](../../.gitbook/assets/open-request-icon-assigned-tasks.png)for the Request associated with the Task.

### Search for a Task

Use Request data to search for Tasks on this page based on the following criteria:

* **Request:** Search using one or more Requests based on the Process names associated with the Request\(s\).
* **Task:** Search using one or more Task names as part of your search criteria.
* **Status:** Search using one or more of the following Task statuses:
  * **In progress:** Include Tasks that are assigned to you which are in progress or not started as part of your search criteria.
  * **Completed:** Include Tasks that are you have completed as part of your search criteria.
  * **Self service:** Include Tasks that you can assign to yourself, but have not yet been assigned.

You can do [basic](search-for-a-task.md#basic-search-for-a-task) and [advanced](search-for-a-task.md#advanced-search-for-a-task) searches for Tasks.

### Save the Settings of a Search

If the [Saved Searches package](../../package-development-distribution/package-a-connector/saved-searches-package.md) is installed in your ProcessMaker instance, you may save search parameters and share them with other ProcessMaker [users](../../processmaker-administration/add-users/what-is-a-user.md) and [groups](../../processmaker-administration/assign-groups-to-users/what-is-a-group.md) by clicking the **Save Search** button![](../../.gitbook/assets/save-search-button-requests-tasks.png). See [Create and Share a Saved Search](../save-and-share-request-and-task-related-searches/create-and-share-a-saved-search.md).

If the Saved Searches package is not installed, the **Save Search** button is not available.

### Be Reminded of Overdue Tasks

A message displays above your assigned Tasks how many of those Tasks are overdue.  

![](../../.gitbook/assets/assigned-to-do-tasks-overdue-tasks.png)

Furthermore, the due dates for overdue Tasks display in a different color in the **Due** column than Tasks that are not overdue.

### No Assigned Tasks?

If there are no assigned Tasks, the following message displays: **You don't currently have any tasks assigned to you**.

### Display Information the Way You Want It

[Control how tabular information displays](../control-how-requests-display-in-a-tab.md), including how to sort columns or how many items display per page.
{% endhint %}

## Related Topics

{% page-ref page="what-is-a-task.md" %}

{% page-ref page="view-completed-tasks.md" %}

{% page-ref page="self-assign-tasks-to-yourself-from-a-queue.md" %}

{% page-ref page="search-for-a-task.md" %}

{% page-ref page="view-a-task-summary.md" %}

{% page-ref page="../requests/request-details/" %}

{% page-ref page="../control-how-requests-display-in-a-tab.md" %}

