---
description: Search for any Request in which you started or have been a participant.
---

# Search for a Request

## Overview

Do [basic](search-for-a-request.md#basic-search-for-a-request) or [advanced](search-for-a-request.md#advanced-search-for-a-request) searches for Requests. Search results display only for Requests within the **Requests** page you are viewing. For example, performing a search from within the **My Requests** page displays results only for Requests within that page.

## Basic Search for a Request

Follow these steps to do a basic search for a Request within the Request page you are viewing:

1. View one of the following **Requests** pages:
   * **My Requests** page. See [View Your Requests That You Started](view-started-requests.md#view-your-requests).
   * **In Progress** page. See [View Requests That Are In Progress](view-in-progress-requests.md#view-in-progress-requests-in-which-you-are-participating).
   * **Completed** page. See [View Completed Requests](view-completed-requests.md#view-completed-requests-in-which-you-participated).
   * **All Requests** page. See [View All Requests](view-all-requests.md#view-all-requests-in-your-organization). \(Note that your ProcessMaker user account must have the [**Requests: View All Requests** permission](../../processmaker-administration/permission-descriptions-for-users-and-groups.md#requests) to view the **All Requests** tab.\)
2. Ensure that the basic search fields are displaying on the **Requests** page you are viewing.  

   ![](../../.gitbook/assets/basic-request-search-requests.png)

   If not, then click the **Basic Search** button![](../../.gitbook/assets/basic-search-button.gif).

3. Use Request data to search for Requests on the displayed page based on the following criteria:
   * **Process:** Search using one or more Process names associated with a Request.
   * **Status:** Search using one or more of the following Request statuses:
     * **In progress:** Include Requests that are in progress as part of your search criteria. Requests that are in progress are included by default when searching for Requests on the **In Progress** page.
     * **Completed:** Include Requests that are completed as part of your search criteria. Requests that are completed are included by default when searching for Requests on the **Completed** page.
     * **Error:** Include Requests that are in error as part of your search criteria.
     * **Canceled:** Include Requests that have been canceled as part of your search criteria.
   * **Requester:** Search using one or more the ProcessMaker users who started a Request. The currently logged on ProcessMaker user is included by default when searching for Requests on the **My Requests** page.
   * **Participants:** Search using one or more ProcessMaker users participating in a Request.
4. Click the **Search** button![](../../.gitbook/assets/request-task-search-button.png)to search for Requests based on your entered criteria.

## Advanced Search for a Request

1. Go to one of the following **Requests** pages:
   * **My Requests** page. See [View Your Requests That You Started](view-started-requests.md#view-your-requests).
   * **In Progress** page. See [View Requests That Are In Progress](view-in-progress-requests.md#view-in-progress-requests-in-which-you-are-participating).
   * **Completed** page. See [View Completed Requests](view-completed-requests.md#view-completed-requests-in-which-you-participated).
   * **All Requests** page. See [View All Requests](view-all-requests.md#view-all-requests-in-your-organization). \(Note that your ProcessMaker user account must have the [**Requests: View All Requests** permission](../../processmaker-administration/permission-descriptions-for-users-and-groups.md#requests) to view the **All Requests** tab.\)
2. Ensure that the advanced search field is displaying on the **Requests** page you are viewing.  

   ![](../../.gitbook/assets/advanced-request-search-requests.png)

   If not, then click the **Advanced Search** button![](../../.gitbook/assets/advanced-search-button.png).

3. Use Request data to search for Requests on the displayed page based on the following syntax that is not case sensitive:

   * **Process\(es\):**
     * Use the following syntax as a guide to include one Process in your search criteria:

       `(request = "exact Process name including spaces")`

     * Use the following syntax as a guide to include two or more Processes in your search criteria:

       `(request = "Process name 1" OR request = "Process name 2")`
   * **Status\(es\):**
     * Use the following syntax as a guide to include one Request status in your search criteria:

       `(status = "In Progress")`

     * Use the following syntax as a guide to include two or more Request statuses in your search criteria:

       `(status = "Completed" OR status = "Canceled")`
   * **Requester\(s\):**
     * Use the following syntax as a guide to include one Requester in your search criteria:

       `(requester = "Username1")`

     * Use the following syntax as a guide to include two or more Requesters in your search criteria:

       `(requester = "Username1" OR requester = "Username2")`
   * **Participant\(s\):**
     * Use the following syntax as a guide to include one Request participant in your search criteria:

       `(participant = "Username3")`

     * Use the following syntax as a guide to include two or more Request participants in your search criteria:

       `(participant = "Username3" OR participant = "Username4")`
   * **Operators between search criteria:**
     * Use `AND` operators between each set of search criteria.

   Below is an example of a valid advanced Request search:

   `(request = "Process Name 1" OR request = "Process Name 2") AND (status = "Canceled" OR status = "Error") AND (requester = "Username1" OR requester = "Username2") AND (participant = "Username3" OR participant = "Username4")`

4. Click the **Search** button![](../../.gitbook/assets/request-task-search-button.png)to search for Requests based on your entered criteria.

{% hint style="info" %}
### View a Request Summary <a id="view-information-about-a-request"></a>

To [view a Request summary](request-details.md), do one of the following:

* From the **\#** column, click the Request number associated with the Process displaying in the **Name** column to view its summary. This number represents the sequential occurrence of that Process.
* Click the **Open Request** icon![](https://firebasestorage.googleapis.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LJ0aNaVW1m7sNsxVJLV%2F-LVEg50XN0-PSaV6jG0a%2F-LVEzGdlTxxh1B2FNuS7%2FOpen%20Request%20Icon%20-%20Requests.png?alt=media&token=006d03ea-98dd-4227-b702-31f7e709df10)for the Request that you want to view its summary.

### No Search Results?

If there are no search results, the following message displays: **No data available**.
{% endhint %}

## Related Topics

{% page-ref page="what-is-a-request.md" %}

{% page-ref page="make-a-request.md" %}

{% page-ref page="delete-a-request.md" %}

{% page-ref page="view-started-requests.md" %}

{% page-ref page="view-in-progress-requests.md" %}

{% page-ref page="view-completed-requests.md" %}

{% page-ref page="view-all-requests.md" %}

{% page-ref page="request-details.md" %}

