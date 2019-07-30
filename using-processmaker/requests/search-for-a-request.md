---
description: Search for any Request in which you started or have been a participant.
---

# Search for a Request

## Overview

Do [basic](search-for-a-request.md#basic-search-for-a-request) or [advanced](search-for-a-request.md#advanced-search-for-a-request) searches for Requests. To do basic or advanced searches for Requests, view one of the following **Requests** pages:

* **My Requests** page. See [View Your Requests That You Started](view-started-requests.md#view-your-requests).
* **In Progress** page. See [View Requests That Are In Progress](view-in-progress-requests.md#view-in-progress-requests-in-which-you-are-participating).
* **Completed** page. See [View Completed Requests](view-completed-requests.md#view-completed-requests-in-which-you-participated).
* **All Requests** page. See [View All Requests](view-all-requests.md#view-all-requests-in-your-organization). \(Note that your ProcessMaker user account must have the [**Requests: View All Requests** permission](../../processmaker-administration/permission-descriptions-for-users-and-groups.md#requests) to view the **All Requests** page.\)

## Basic Search for a Request

Follow these steps to do a basic search for a Request:

1. View one of the **Requests** pages described in the [Overview](search-for-a-request.md#overview) of this topic.
2. Ensure that the basic search fields are displaying on the **Requests** page you are viewing.  

   ![](../../.gitbook/assets/basic-request-search-requests.png)

   If not, then click the **Basic Search** button![](../../.gitbook/assets/basic-search-button.gif).

3. Use Request data to search for Requests based on the following criteria:
   * **Process:** From the **Process** field, select one or more Process names associated with a Request as part of the search criteria. Type into the **Process** field to filter Processes that display in that field's drop-down menu. To remove a Process that is currently selected, click the![](../../.gitbook/assets/remove-group-user-admin.png)icon for that selection or click `Enter` when the drop-down is visible.
   * **Status:** From the **Status** field, select one or more Request statuses as part of the search criteria. Type into the **Status** field to filter statuses that display in that field's drop-down menu. To remove a status that is currently selected, click the![](../../.gitbook/assets/remove-group-user-admin.png)icon for that selection or click `Enter` when the drop-down is visible.

     Search using one or more of the following Request statuses:

     * **In progress:** Include Requests that are in progress as part of your search criteria. Requests that are in progress are included by default when searching for Requests on the **In Progress** page.
     * **Completed:** Include Requests that are completed as part of your search criteria. Requests that are completed are included by default when searching for Requests on the **Completed** page.
     * **Error:** Include Requests that are in error as part of your search criteria.
     * **Canceled:** Include Requests that have been canceled as part of your search criteria.

   * **Requester:** From the **Requester** field, select one or more Requesters as part of your search criteria. A Requester is a ProcessMaker user who starts a Request. The currently logged on ProcessMaker user is included by default when searching for Requests on the **My Requests** page. Type into the **Requester** field to filter requesters that display in that field's drop-down menu. To remove a Requester that is currently selected, click the![](../../.gitbook/assets/remove-group-user-admin.png)icon for that selection or click `Enter` when the drop-down is visible.
   * **Participants:** From the **Participants** field, select one or more Request participants as part of your search criteria. Type into the **Participants** field to filter Request participants that display in that field's drop-down menu. To remove a Request participant that is currently selected, click the![](../../.gitbook/assets/remove-group-user-admin.png)icon for that selection or click `Enter` when the drop-down is visible.
4. Click the **Search** button![](../../.gitbook/assets/request-task-search-button.png)to search for Requests based on your entered criteria.
5. Optionally, if the [Save Searches package](../../package-development-distribution/package-a-connector/saved-searches-package.md) is installed in your ProcessMaker instance, save and share the Request search by clicking the **Save Search** button![](../../.gitbook/assets/save-search-button-requests-tasks.png). See [Save Request Searches](search-for-a-request.md#save-and-share-a-request-search).

## Advanced Search for a Request

Follow these steps to do an advanced search for a Request:

1. View one of the **Requests** pages described in the [Overview](search-for-a-request.md#overview) of this topic.
2. Ensure that the advanced search field is displaying on the **Requests** page you are viewing.  

   ![](../../.gitbook/assets/advanced-request-search-requests.png)

   If not, then click the **Advanced Search** button![](../../.gitbook/assets/advanced-search-button.png).

3. Use Request data to search for Requests based on the following syntax that is not case sensitive:

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
     * Use the following syntax as a guide to include one requester in your search criteria:

       `(requester = "Username1")`

     * Use the following syntax as a guide to include two or more requesters in your search criteria:

       `(requester = "Username1" OR requester = "Username2")`
   * **Participant\(s\):**
     * Use the following syntax as a guide to include one Request participant in your search criteria:

       `(participant = "Username3")`

     * Use the following syntax as a guide to include two or more Request participants in your search criteria:

       `(participant = "Username3" OR participant = "Username4")`
   * **Time Period\(s\):**
     * Use the following syntax as a guide to include a period of time in your search criteria:

       `updated_at < NOW -2 day`

       Use `updated_at < NOW` to represent how much time from the present the sought after Request is, then use `-` followed by an integer to specify that time. The units of time `second`, `minute`, `hour` and `day` are supported.
   * **Operators between search criteria:**
     * Use `AND` operators between each set of search criteria to search using multiple parameters.
     * Use the `AND` operator between items to search for multiple specified items.
     * Use the `OR` operator between items to search for either specified item. 

   Below is an example of a valid advanced Request search:

   `(request = "Process Name 1" OR request = "Process Name 2") AND (status = "Canceled" OR status = "Error") AND (requester = "Username1" OR requester = "Username2") AND (participant = "Username3" OR participant = "Username4" AND (updated_at < NOW -2 day)`

4. Click the **Search** button![](../../.gitbook/assets/request-task-search-button.png)to search for Requests based on your entered criteria.
5. Optionally, if the [Save Searches package](../../package-development-distribution/package-a-connector/saved-searches-package.md) is installed in your ProcessMaker instance, save and share the Request search by clicking the **Save Search** button![](../../.gitbook/assets/save-search-button-requests-tasks.png). See [Save Request Searches](search-for-a-request.md#save-and-share-a-request-search).

{% hint style="info" %}
### View a Request Summary <a id="view-information-about-a-request"></a>

To [view a Request summary](request-details/), do one of the following:

* From the **\#** column, click the Request number associated with the Process displaying in the **Name** column to view its summary. This number represents the sequential occurrence of that Process.
* Click the **Open Request** icon![](https://firebasestorage.googleapis.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LJ0aNaVW1m7sNsxVJLV%2F-LVEg50XN0-PSaV6jG0a%2F-LVEzGdlTxxh1B2FNuS7%2FOpen%20Request%20Icon%20-%20Requests.png?alt=media&token=006d03ea-98dd-4227-b702-31f7e709df10)for the Request that you want to view its summary.

### No Search Results?

If there are no search results, the following message displays: **No Data Available**.
{% endhint %}

## Saved Request Searches

{% hint style="info" %}
To save and share a Request search, the [Saved Searches](../../package-development-distribution/package-a-connector/saved-searches-package.md) package must be installed in your ProcessMaker instance. The Saved Searches package is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Saved Searches package can be installed in your ProcessMaker instance.
{% endhint %}

### Save and Share a Search

Use the Save Search feature to save and share a Request search. Share the Request search with specific ProcessMaker [users](../../processmaker-administration/add-users/what-is-a-user.md) and/or [groups](../../processmaker-administration/assign-groups-to-users/what-is-a-group.md).

Follow these steps to save a Request search:

1. Enter the search criteria for either a [basic](search-for-a-request.md#basic-search-for-a-request) or [advanced](search-for-a-request.md#advanced-search-for-a-request) Request search.
2. Click the **Save Search** button![](../../.gitbook/assets/save-search-button-requests-tasks.png). The **Save Search** screen displays. ![](../../.gitbook/assets/save-search-screen-package-requests-tasks.png) 
3. In the **Name** field, enter the name of your saved search. This is a required field.
4. Follow these guidelines to select an icon that represents the saved search in the left sidebar:
   * **Follow this step to select an image from ProcessMaker to represent the saved search:**

     Select any of the images that ProcessMaker provides by selecting its radio button. This image displays in the left sidebar below the **Saved Searches** icon.

   * **Follow these steps to select a custom image to represent the saved search:**
     1. Click the **Would you like to use a custom icon?** checkbox. The **Choose File** button displays.
     2. Click the **Choose File** button and locate the icon that represents the saved search. The icon must not be larger than 2 kilobytes large or the following message displays below the **Choose File** button: **The file is too large. File size must be less than 2KB when base64 encoded.**. This image displays in the left sidebar below the **Saved Searches** icon.
5. From the **Share With Users** drop-down menu, select with which ProcessMaker user\(s\) to share your saved search by selecting the person's full name. Multiple ProcessMaker users may be added, one at a time, to this field. You may click the Remove icon to remove a ProcessMaker user from the **Share With Users** drop-down menu.
6. From the **Share With Groups** drop-down menu, select with which ProcessMaker group\(s\) to share your saved search by selecting the group. Multiple ProcessMaker groups may be added, one at a time, to this field. You may click the Remove icon to remove a ProcessMaker group from the **Share With Groups** drop-down menu.
7. Click the **Save Search** button.

### Configure a Saved Search



## Related Topics

{% page-ref page="what-is-a-request.md" %}

{% page-ref page="make-a-request.md" %}

{% page-ref page="delete-a-request.md" %}

{% page-ref page="view-started-requests.md" %}

{% page-ref page="view-in-progress-requests.md" %}

{% page-ref page="view-completed-requests.md" %}

{% page-ref page="view-all-requests.md" %}

{% page-ref page="request-details/" %}

