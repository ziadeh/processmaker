---
description: View a Saved Search's search results.
---

# View Search Results for a Saved Search

## View Search Results

{% hint style="info" %}
### Don't Know What a Saved Search Is?

See [What is a Saved Search?](../what-is-a-saved-search.md) to learn how you can share the same Request and Task search parameters with other ProcessMaker users in your organization.

### ProcessMaker Package Required

To view search results for a [Saved Search](../what-is-a-saved-search.md), the [Saved Searches package](../../../package-development-distribution/package-a-connector/saved-searches-package.md) must be installed in your ProcessMaker instance. The Saved Searches package is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Saved Searches package can be installed in your ProcessMaker instance.
{% endhint %}

Regardless of whether you [created](../create-and-share-a-saved-search.md) a Saved Search or if it has been shared with you, you may view the search results based on the ProcessMaker Query Language \(PMQL\) parameters configured in the Saved Search.

Follow these steps to view the search results for a Saved Search:

1. Locate the image that represents the Saved Search from the left sidebar. A Saved Search is accessed from pages associated with its type.
   * Access Request-related Saved Searches from the following **Requests** pages:
     * **My Requests** page. See [View Your Requests That You Started](../../requests/view-started-requests.md#view-your-requests).
     * **In Progress** page. See [View Requests That Are In Progress](../../requests/view-in-progress-requests.md#view-in-progress-requests-in-which-you-are-participating).
     * **Completed** page. See [View Completed Requests](../../requests/view-completed-requests.md#view-completed-requests-in-which-you-participated).
     * **All Requests** page. See [View All Requests](../../requests/view-all-requests.md#view-all-requests-in-your-organization). \(Note that your ProcessMaker user account must have the [**Requests: View All Requests** permission](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#requests) to view the **All Requests** page.\)
   * Access Task-related Saved Searches from the following **Tasks** pages:
     * **To Do** page. See [View Tasks You Need to Do](../../task-management/view-tasks-you-need-to-do.md).
     * **Completed** page. See [View Completed Tasks](../../task-management/view-completed-tasks.md).
2. Click the icon that represents the Saved Search. The search results for that Saved Search display.

![Search results for a Request-related Saved Search](../../../.gitbook/assets/saved-search-results-package.png)

The following information displays in tabular format about Request-related search results:

* **\#:** The **\#** column displays the Request number associated with the Process. This number represents the sequential occurrence of that Process.
* **Name:** The **Name** column displays the Process name associated with the Request. Click the Process name to [view the Request summary](../../requests/request-details/).
* **Status:** The **Status** column displays the status of the Request. The following are possible statuses:
  * **In Progress:** The Request is in-progress and is represented by the![](../../../.gitbook/assets/in-progress-status-icon-requests.png)icon.
  * **Completed:** The Request is completed and is represented by the![](../../../.gitbook/assets/completed-status-icon-requests.png)icon.
  * **Canceled:** The Request has been canceled and is represented by the![](../../../.gitbook/assets/error-status-icon-requests.png)icon. See [Cancel a Request](../../requests/delete-a-request.md).
  * **Error:** An error occurred with the Request and is represented by the![](../../../.gitbook/assets/error-status-icon-requests.png)icon. [View the Request summary](../../requests/request-details/#error-information-for-a-request) to see the error.
* **Participants:** The **Participants** column displays each Request participant's avatar. Hover your cursor over a user's avatar to view that person's full name.
* **Started:** The **Started** column displays the date and time you started the Request. The time zone setting to display the time is according to the ProcessMaker instance unless your [user profile's](../../profile-settings.md#change-your-profile-settings) **Time zone** setting is specified.
* **Completed:** The **Completed** column displays the date and time the Request was completed. If the Request is not completed, this field displays no value for that Request. The time zone setting to display the time is according to the ProcessMaker instance unless your [user profile's](../../profile-settings.md#change-your-profile-settings) **Time zone** setting is specified.

The following information displays in tabular format about Task-related search results:

* **Task:** The **Task** column displays the name of the assigned Task. Click the Task name to [view its summary](../../task-management/view-a-task-summary.md#summary-for-an-assigned-task).
* **Request:** The **Request** column displays the Request associated with the Task. Click the Request name to [view the Request summary](../../requests/request-details/).
* **Assignee:** The **Assignee** column displays your avatar since all Tasks in this display are assigned to you.
* **Due:** The **Due** column displays the date and time the Task is due. The time zone setting to display the time is according to the ProcessMaker instance unless your [user profile's](../../profile-settings.md#change-your-profile-settings) **Time zone** setting is specified.

{% hint style="info" %}
### View the Request Summary from Search Results

To [view a Request summary](../../requests/request-details/) from search results, do one of the following:

* From the **\#** column, click the Request number associated with the Process displaying in the **Name** column to view its summary. This number represents the sequential occurrence of that Process.
* Click the **Open Request** icon![](../../../.gitbook/assets/open-request-icon-requests.png)for the Request to view its summary.

### View a Task Summary from Search Results

To view a [Task and its summary](../../task-management/view-a-task-summary.md#summary-for-an-assigned-task) from search results, do one of the following:

* From the **Task** column, click the Task name that you want to view.
* Click the **Open Task** icon![](../../../.gitbook/assets/open-request-icon-requests.png)for the Task name that you want to view.

### Search for a Saved Search's Search Result

Use the [Search](search-for-a-saved-searchs-search-result.md) field to filter the Saved Search's search results that display.

### No Search Results from the Saved Search?

If there are no search results from the Saved Search, the following message displays: **No Data Available**.

### Display Information the Way You Want It

[Control how tabular information displays](../../control-how-requests-display-in-a-tab.md), including how to sort columns or how many items display per page.
{% endhint %}

## Related Topics



