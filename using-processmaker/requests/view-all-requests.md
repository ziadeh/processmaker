---
description: View all Requests in your organization.
---

# View All Requests

## View All Requests in Your Organization

The **All Requests** page displays all Requests in your organization regardless of whether you participated in them. Request information displays in tabular format.

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the "Requests: View All Requests" permission to view the list of all Requests unless your user account has the **Make this user a Super Admin** setting selected.

See the [Request permissions](../../processmaker-administration/permission-descriptions-for-users-and-groups.md#requests) or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to view all Requests in your organization:

1. Ensure that you are [logged on](../log-in.md#log-on) to ProcessMaker.
2. Do one of the following:
   * Click the **Requests** option from the top menu if it is not currently displayed. The **My Requests** page displays.
   * Click the Home breadcrumb icon![](../../.gitbook/assets/home-breadcrumb-icon.png)if the **Requests** page is not currently displayed. The **My Requests** page displays.
3. Click the **All Requests** tab or click the **All** icon![](../../.gitbook/assets/all-icon-request.png)from the left sidebar. The **All Requests** page displays.

{% hint style="info" %}
### Quickly View All Requests By Status

Click the ProcessMaker logo in the left sidebar to expand that sidebar. View at a glance how many Requests by status you have. Note that if the [Saved Searches package](../../package-development-distribution/package-a-connector/saved-searches-package.md) installed in your ProcessMaker instance, you can also view how many items are in your [Saved Searches](../save-and-share-request-and-task-related-searches/what-is-a-saved-search.md) pertaining to Requests.  
![](../../.gitbook/assets/requests-sidebar-saved-searches-package.png) 
{% endhint %}

Below is an example of the **All Requests** page that displays all Requests in that ProcessMaker instance. The Saved Search package is not installed in this example, so this page displays in the ProcessMaker open-source edition.

![&quot;All Requests&quot; page displays all Requests in your organization](../../.gitbook/assets/all-requests-request.png)

The **All Requests** page displays the following information in tabular format about all Requests:

* **\#:** The **\#** column displays the Request number associated with the Process. This number represents the sequential occurrence of that Process.
* **Name:** The **Name** column displays the Process name associated with the Request. Click the Process name to [view the Request summary](request-details/).
* **Status:** The **Status** column displays the status of the Request. The following are possible statuses:
  * **In Progress:** The Request is in-progress and is represented by the![](../../.gitbook/assets/in-progress-status-icon-requests.png)icon.
  * **Completed:** The Request is completed and is represented by the![](../../.gitbook/assets/completed-status-icon-requests.png)icon.
  * **Canceled:** The Request has been canceled and is represented by the![](../../.gitbook/assets/error-status-icon-requests.png)icon. See [Cancel a Request](delete-a-request.md).
  * **Error:** An error occurred with the Request and is represented by the![](../../.gitbook/assets/error-status-icon-requests.png)icon. [View the Request summary](request-details/#error-information-for-a-request) to see the error.
* **Participants:** The **Participants** column displays each Request participant's avatar. Hover your cursor over a user's avatar to view that person's full name.
* **Started:** The **Started** column displays the date and time you made the Request. The time zone setting to display the time is according to the ProcessMaker instance unless your [user profile's](../profile-settings.md#change-your-profile-settings) **Time zone** setting is specified.
* **Completed:** The **Completed** column displays the date and time the Request was completed. If the Request is not completed, this field displays no value for that Request. The time zone setting to display the time is according to the ProcessMaker instance unless your [user profile's](../profile-settings.md#change-your-profile-settings) **Time zone** setting is specified.

{% hint style="info" %}
### View a Request Summary

To [view a Request summary](request-details/), do one of the following:

* From the **\#** column, click the Request number associated with the Process displaying in the **Name** column to view its summary. This number represents the sequential occurrence of that Process.
* Click the **Open Request** icon![](../../.gitbook/assets/open-request-icon-requests.png)for the Request to view its summary.

### Search for a Request

Use Request data to search for Requests on this page based on the following criteria:

* **Process:** Search using one or more Process names associated with a Request.
* **Status:** Search using one or more of the following Request statuses:
  * **In progress:** Include Requests that are in progress as part of your search criteria.
  * **Completed:** Include Requests that are completed as part of your search criteria.
  * **Error:** Include Requests that are in error as part of your search criteria.
  * **Canceled:** Include Requests that have been canceled as part of your search criteria.
* **Requester:** Search using one or more the ProcessMaker users who started a Request.
* **Participants:** Search using one or more ProcessMaker users participating in a Request.

You can do [basic](search-for-a-request.md#do-a-basic-search-for-a-request) and [advanced](search-for-a-request.md#do-an-advanced-search-for-a-request) searches for Requests.

### Save the Settings of a Search

If the [Saved Searches package](../../package-development-distribution/package-a-connector/saved-searches-package.md) is installed in your ProcessMaker instance, you may save search parameters and share them with other ProcessMaker [users](../../processmaker-administration/add-users/what-is-a-user.md) and [groups](../../processmaker-administration/assign-groups-to-users/what-is-a-group.md) by clicking the **Save Search** button![](../../.gitbook/assets/save-search-button-requests-tasks.png). See [Create and Share a Saved Search](../save-and-share-request-and-task-related-searches/create-and-share-a-saved-search.md).

If the Saved Searches package is not installed, the **Save Search** button is not available.

### No Requests?

If there are no Requests in this tab, the following message displays: **No Results**.

### Display Information the Way You Want It

[Control how tabular information displays](../control-how-requests-display-in-a-tab.md), including how to sort columns or how many items display per page.
{% endhint %}

## Related Topics

{% page-ref page="what-is-a-request.md" %}

{% page-ref page="make-a-request.md" %}

{% page-ref page="delete-a-request.md" %}

{% page-ref page="view-started-requests.md" %}

{% page-ref page="view-in-progress-requests.md" %}

{% page-ref page="view-completed-requests.md" %}

{% page-ref page="search-for-a-request.md" %}

{% page-ref page="request-details/" %}

