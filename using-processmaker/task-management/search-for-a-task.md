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

Use the ProcessMaker Query Language \(PMQL\) to compose an advanced search for Tasks.

{% hint style="info" %}
[Basic Task searches](search-for-a-task.md#basic-search-for-a-task) also use PMQL, but basic searches provide a user interface. Configure a basic search, and then click the **Advanced Search** button![](../../.gitbook/assets/advanced-search-button.png)to see the PMQL. This may help you learn how to use PMQL.
{% endhint %}

Follow these guidelines to do an advanced search for a Task using PMQL:

1. View one of the **Tasks** pages described in the [Overview](search-for-a-task.md#overview) of this topic.
2. Ensure that the advanced search field is displaying on the **Tasks** page you are viewing.  

   ![](../../.gitbook/assets/advanced-task-search-tasks.png)

   If not, then click the **Advanced Search** button![](../../.gitbook/assets/advanced-search-button.png).

3. Enter your PMQL parameters that compose your advanced search. Refer to the following PMQL parameter syntax options that are not case sensitive to compose your PMQL search:

   * **Process\(es\) associated with a Request:**
     * Use the following syntax as a guide to include one Process associated with a Request in your search criteria:

       `(request = "exact Process name including spaces")`

     * Use the following syntax as a guide to include two or more Processes associated with multiple Requests in your search criteria:

       `(request = "Process name 1" OR request = "Process name 2")`
   * **Request information:**

     Use the following syntax as a guide to reference Request-related information in your search criteria.

     `data.RequestData`

     `data.` represents that what follows derives from Request information, as is used in JSON dot notation. To derive that Request information, view the [**Data** tab in the summary for a completed Request](../requests/request-details/summary-for-completed-requests.md#editable-request-data) to view the data from a completed Request, and then use the specific key name \(represented in red-colored text\) in place of `RequestData` in this syntax. Spaces are allowed between operators. Example: `data.last_name = "Canera"`. Note that your ProcessMaker user account or group membership must have the [Requests: Edit Request Data](../../processmaker-administration/permission-descriptions-for-users-and-groups.md#requests) permission. Ask your ProcessMaker Administrator if you do not see the **Data** tab in completed Requests.

   * **ProcessMaker Magic Variables:**

     Following the same syntax as referencing Request-related information, reference ProcessMaker [Magic Variables](../../designing-processes/reference-global-variables-in-your-processmaker-assets.md) in your search criteria. See [Magic Variable Descriptions](../../designing-processes/reference-global-variables-in-your-processmaker-assets.md#global-variable-descriptions).

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

   * **Operators for use in and between search criterion:**

     * Equal to: `=`
     * Not equal to: `!=`
     * Less than: `<`
     * Greater than: `>`
     * Less than or equal to: `<=`
     * Greater than or equal to: `>=`
     * Use `AND` operators between each set of search criterion to search using multiple criteria.
     * Use the `AND` operator between criterion to search for multiple specified criterion.
     * Use the `OR` operator between criterion to search for either specified criterion.

     Spaces are allowed between operators. Example: `data.last_name = "Canera"`.

   Below is an example of a valid advanced Task search:

   `(request = "Tax Return Process" OR request = "Modify Document Process") AND (task = "Customer Documents" OR task = "Loan Request") AND (status = "In Progress" OR status = "Completed") AND (updated_at < NOW -2 day)`

4. Click the **Search** button![](../../.gitbook/assets/request-task-search-button.png)to search for Tasks based on your entered criteria.
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

{% page-ref page="../../package-development-distribution/package-a-connector/saved-searches-package.md" %}

{% page-ref page="view-a-task-summary.md" %}

