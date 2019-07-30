---
description: Search for any Task that has been assigned to you.
---

# Search for a Task

## Overview

Do [basic](../requests/search-for-a-request.md#basic-search-for-a-request) or [advanced](../requests/search-for-a-request.md#advanced-search-for-a-request) searches for Tasks. To do basic or advanced searches for Tasks, view one of the following **Tasks** pages:

* **To Do Tasks** page. See [View Tasks You Need to Do](view-tasks-you-need-to-do.md#view-your-assigned-tasks).
* **Completed Tasks** page. See [View Completed Tasks](view-completed-tasks.md#view-completed-tasks).

## Basic Search for a Task

Follow these steps to do a basic search for a Task:

1. View one of the **Tasks** pages described in the [Overview](../requests/search-for-a-request.md#overview) of this topic.
2. Ensure that the basic search fields are displaying on the **Tasks** page you are viewing.  

   ![](../../.gitbook/assets/basic-task-search-tasks.png)

   If not, then click the **Basic Search** button![](../../.gitbook/assets/basic-search-button.gif).

3. Use Request data to search for Tasks based on the following criteria:
   * **Request:** From the **Request** field, select one or more Processes associated with a Request as part of the search criteria. Type into the **Request** field to filter Processes associated with Requests that display in that field's drop-down menu. To remove a Process that is currently selected, click the![](../../.gitbook/assets/remove-group-user-admin.png)icon for that selection or click `Enter` when the drop-down is visible.
   * **Task:** From the **Task** field, select one or more Task names as part of the search criteria. Type into the **Task** field to filter Tasks that display in that field's drop-down menu. To remove a Task that is currently selected, click the![](../../.gitbook/assets/remove-group-user-admin.png)icon for that selection or click `Enter` when the drop-down is visible.
   * **Status:** From the **Status** field, select one or more Task statuses as part of the search criteria. Type into the **Status** field to filter statuses that display in that field's drop-down menu. To remove a status that is currently selected, click the![](../../.gitbook/assets/remove-group-user-admin.png)icon for that selection or click `Enter` when the drop-down is visible.

     Search using one or more of the following Request statuses:

     * **In progress:** Include Tasks that are in progress or not started as part of your search criteria. Tasks that are in progress are included by default when searching for Tasks on the **To Do** page.
     * **Completed:** Include Tasks that are completed as part of your search criteria. Tasks that are completed are included by default when searching for Requests on the **Completed** page.
4. Click the **Search** button![](../../.gitbook/assets/request-task-search-button.png)to search for Requests based on your entered criteria.
5. Optionally, if the [Save Searches package](../../package-development-distribution/package-a-connector/saved-searches-package.md) is installed in your ProcessMaker instance, save and share the Task search by clicking the **Save Search** button![](../../.gitbook/assets/save-search-button-requests-tasks.png). See [Save and Share a Task Search](search-for-a-task.md#save-and-share-a-task-search).

## Advanced Search for a Task

Follow these steps to do an advanced search for a Task:

1. View one of the **Tasks** pages described in the [Overview](search-for-a-task.md#overview) of this topic.
2. Ensure that the advanced search field is displaying on the **Tasks** page you are viewing.  

   ![](../../.gitbook/assets/advanced-task-search-tasks.png)

   If not, then click the **Advanced Search** button![](../../.gitbook/assets/advanced-search-button.png).

3. Use Request data to search for Tasks based on the following syntax that is not case sensitive:

   * **Process\(es\) associated with a Request:**
     * Use the following syntax as a guide to include one Process associated with a Request in your search criteria:

       `(request = "exact Process name including spaces")`

     * Use the following syntax as a guide to include two or more Processes associated with multiple Requests in your search criteria:

       `(request = "Process name 1" OR request = "Process name 2")`
   * **Task\(s\):**
     * Use the following syntax as a guide to include one Task name in your search criteria:

       `(task = "exact Task name including spaces")`

     * Use the following syntax as a guide to include two or more Task names in your search criteria:

       `(task = "Task name 1" OR task = "Task name 2")`
   * **Status\(es\):**
     * Use the following syntax as a guide to include one Task status in your search criteria:

       `(status = "In Progress")`

     * Use the following syntax as a guide to include two or more Task statuses in your search criteria:

       `(status = "In Progress" OR status = "Completed")`
   * **Time Period\(s\):**

     Use the following syntax as a guide to include a period of time in your search criteria:

     `updated_at < NOW -2 day`

     Use `updated_at < NOW` to represent how much time from the present the sought after Task is, then use `-` followed by an integer to specify that time. The units of time `second`, `minute`, `hour` and `day` are supported.

   * **Operators between search criteria:**
     * Use `AND` operators between each set of search criteria to search using multiple parameters.
     * Use the `AND` operator between items to search for multiple specified items.
     * Use the `OR` operator between items to search for either specified item.

   Below is an example of a valid advanced Request search:

   `(request = "Tax Return Process" OR request = "Modify Document Process") AND (task = "Customer Documents" OR task = "Loan Request") AND (status = "In Progress" OR status = "Completed") AND (updated_at < NOW -2 day)`

4. Click the **Search** button![](../../.gitbook/assets/request-task-search-button.png)to search for Tasks based on your entered criteria.
5. Optionally, if the [Save Searches package](../../package-development-distribution/package-a-connector/saved-searches-package.md) is installed in your ProcessMaker instance, save and share the Task search by clicking the **Save Search** button![](../../.gitbook/assets/save-search-button-requests-tasks.png). See [Save and Share a Task Search](search-for-a-task.md#save-and-share-a-task-search).

{% hint style="info" %}
### View a Request Summary Associated with a Task <a id="view-information-about-a-request"></a>

To [view a Request summary](../requests/request-details/), do one of the following:

* From the **Request** column, click the Request to view its summary.
* Click the **Open Request** icon![](../../.gitbook/assets/open-request-icon-assigned-tasks.png)for the Request that you want to view its summary.

### No Search Results?

If there are no search results, the following message displays: **No Data Available**.
{% endhint %}

## Save Task Searches

{% hint style="info" %}
To save and share a Task search, the [Saved Searches](../../package-development-distribution/package-a-connector/saved-searches-package.md) package must be installed in your ProcessMaker instance. The Saved Searches package is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Saved Searches package can be installed in your ProcessMaker instance.
{% endhint %}

## Related Topics

{% page-ref page="what-is-a-task.md" %}

{% page-ref page="view-tasks-you-need-to-do.md" %}

{% page-ref page="view-completed-tasks.md" %}

{% page-ref page="../../package-development-distribution/package-a-connector/saved-searches-package.md" %}

{% page-ref page="view-a-task-summary.md" %}

