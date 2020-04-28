---
description: Search for any Task that has been assigned to you.
---

# Search for a Task

## Overview

Do [basic](../requests/search-for-a-request.md#basic-search-for-a-request) or [advanced](../requests/search-for-a-request.md#advanced-search-for-a-request) searches for Tasks. To do basic or advanced searches for Tasks, view one of the following **Tasks** pages:

* **To Do Tasks** page. See [View Tasks You Need to Do](view-tasks-you-need-to-do.md#view-your-assigned-tasks).
* **Completed** page. See [View Completed Tasks](view-completed-tasks.md#view-completed-tasks).
* Self Service page. See [Self-Assign Tasks to Yourself from a Queue](self-assign-tasks-to-yourself-from-a-queue.md).

## Basic Search for a Task

Follow these steps to do a basic search for a Task:

1. View one of the **Tasks** pages described in the [Overview](../requests/search-for-a-request.md#overview) of this topic.
2. Ensure that the basic search settings are displaying on the **Tasks** page you are viewing.  

   ![](../../.gitbook/assets/basic-task-search-tasks.png)

   If not, then click the **Basic Search** button![](../../.gitbook/assets/basic-search-button.gif).

3. Use Request data to search for Tasks based on the following criteria:
   * **Request:** From the **Request** setting, select one or more Processes associated with a Request as part of the search criteria. Type into the **Request** setting to filter Processes associated with Requests that display in that setting's drop-down menu. To remove a Process that is currently selected, click the![](../../.gitbook/assets/remove-group-user-admin.png)icon for that selection or click `Enter` when the drop-down is visible.
   * **Task:** From the **Task** setting, select one or more Task names as part of the search criteria. Type into the **Task** setting to filter Tasks that display in that setting's drop-down menu. To remove a Task that is currently selected, click the![](../../.gitbook/assets/remove-group-user-admin.png)icon for that selection or click `Enter` when the drop-down is visible.
   * **Status:** From the **Status** setting, select one or more Task statuses as part of the search criteria. Type into the **Status** setting to filter statuses that display in that setting's drop-down menu. To remove a status that is currently selected, click the![](../../.gitbook/assets/remove-group-user-admin.png)icon for that selection or click `Enter` when the drop-down is visible.

     Search using one or more of the following Request statuses:

     * **In progress:** Include Tasks that are in progress or not started as part of your search criteria. Tasks that are in progress are included by default when searching for Tasks on the **To Do** page.
     * **Completed:** Include Tasks that are completed as part of your search criteria. Tasks that are completed are included by default when searching for Tasks on the **Completed** page.
     * **Self service:** Include Tasks that you can assign to yourself, but have not yet been assigned. Self service Tasks are included by default when searching for Tasks on the **Self Service** page.
4. Click the **Search** button![](../../.gitbook/assets/request-task-search-button.png)to search for Requests based on your entered criteria.
5. Optionally, if the [Save Searches package](../../package-development-distribution/package-a-connector/saved-searches-package.md) is installed in your ProcessMaker instance, save and share the Task search by clicking the **Save Search** button![](../../.gitbook/assets/save-search-button-requests-tasks.png). See [Save and Share Request- and Task-Related Searches](../save-and-share-request-and-task-related-searches/).

{% hint style="info" %}
### View a Request Summary Associated with a Task <a id="view-information-about-a-request"></a>

To [view a Request summary](../requests/request-details/), do one of the following:

* From the **Request** column, click the Request to view its summary.
* Click the **Open Request** icon![](../../.gitbook/assets/open-request-icon-assigned-tasks.png)for the Request that you want to view its summary.

### Super-Charge Search: Save Searches and Share Them With Others

See [Save and Share Request- and Task-Related Searches](../save-and-share-request-and-task-related-searches/).

### No Search Results?

If there are no search results, the following message displays: **No Data Available**.
{% endhint %}

## Advanced Search for a Task

Use the [ProcessMaker Query Language \(PMQL\)](../search-processmaker-data-using-pmql.md) to compose an advanced search for Tasks.

{% hint style="info" %}
[Basic Task searches](search-for-a-task.md#basic-search-for-a-task) also use PMQL, but basic searches provide a user interface. Configure a basic search, and then click the **Advanced Search** button![](../../.gitbook/assets/advanced-search-button.png)to see the PMQL. This may help you learn how to use PMQL.
{% endhint %}

Follow these guidelines to do an advanced search for a Task using PMQL:

1. View one of the **Tasks** pages described in the [Overview](search-for-a-task.md#overview) of this topic.
2. Ensure that the advanced search setting is displaying on the **Tasks** page you are viewing.  

   ![](../../.gitbook/assets/advanced-task-search-tasks.png)

   If not, then click the **Advanced Search** button![](../../.gitbook/assets/advanced-search-button.png).

3. In the **PMQL** setting, enter your PMQL parameters that compose your advanced search. See [PMQL Syntax for Tasks](../search-processmaker-data-using-pmql.md#pmql-syntax-for-tasks).

   Below is an example of a valid advanced Task search:

   `(request = "Tax Return Process" OR request = "Modify Document Process") AND (task = "Customer Documents" OR task = "Loan Request") AND (status = "In Progress" OR status = "Completed") AND (data.last_name = "Canera") AND (updated_at < NOW -2 day)`

4. Click the **Search** button![](../../.gitbook/assets/request-task-search-button.png)to search for Tasks based on your entered criteria. If there is no search criteria in the **PMQL** setting when the **Search** button is clicked, the following message displays: **Search query is empty. Please add search attributes or PMQL before saving.**
5. Optionally, if the [Save Searches package](../../package-development-distribution/package-a-connector/saved-searches-package.md) is installed in your ProcessMaker instance, save and share the Task search by clicking the **Save Search** button![](../../.gitbook/assets/save-search-button-requests-tasks.png). See [Save and Share Request- and Task-Related Searches](../save-and-share-request-and-task-related-searches/).

{% hint style="info" %}
### View a Request Summary Associated with a Task <a id="view-information-about-a-request"></a>

To [view a Request summary](../requests/request-details/), do one of the following:

* From the **Request** column, click the Request to view its summary.
* Click the **Open Request** icon![](../../.gitbook/assets/open-request-icon-assigned-tasks.png)for the Request that you want to view its summary.

### Super-Charge Search: Save Searches and Share Them With Others

See [Save and Share Request- and Task-Related Searches](../save-and-share-request-and-task-related-searches/).

### No Search Results?

If there are no search results, the following message displays: **No Data Available**.
{% endhint %}

## Related Topics

{% page-ref page="what-is-a-task.md" %}

{% page-ref page="view-tasks-you-need-to-do.md" %}

{% page-ref page="view-completed-tasks.md" %}

{% page-ref page="self-assign-tasks-to-yourself-from-a-queue.md" %}

{% page-ref page="../../package-development-distribution/package-a-connector/saved-searches-package.md" %}

{% page-ref page="view-a-task-summary.md" %}

