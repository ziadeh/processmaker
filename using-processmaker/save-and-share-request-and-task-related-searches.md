---
description: Save and share search parameters related to Requests and Tasks.
---

# Save and Share Request- and Task-Related Searches

## Overview

{% hint style="info" %}
To save and share searches, the [Saved Searches](../package-development-distribution/package-a-connector/saved-searches-package.md) package must be installed in your ProcessMaker instance. The Saved Searches package is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Saved Searches package can be installed in your ProcessMaker instance.
{% endhint %}

Use the Saved Searches package to save and share searches associated with [Requests](requests/what-is-a-request.md) and [Tasks](task-management/what-is-a-task.md). In doing so, you maintain the search parameters for your Saved Searches; recipients of the Saved Searches that you share can only view results of those Saved Searches. Share your Request search with specific ProcessMaker [users](../processmaker-administration/add-users/what-is-a-user.md) and/or [groups](../processmaker-administration/assign-groups-to-users/what-is-a-group.md).

Saved Searches have the following attributes:

* **Configure your Saved Searches:** You configure your own Saved Searches. Those that you share can only view results of those Saved Searches.
* **Hide Saved Searches:** You may hide your Saved Searches. However, in doing so, they no longer are shared with those ProcessMaker users and/or groups with which you have shared them.
* **Delete Saved Searches:** You may delete your Saved Searches. However, in doing so, they no longer are shared with those ProcessMaker users and/or groups with which you have shared them.
* **Request-related Saved Searches:** Saved Searches associated with Requests display only in the left sidebar of Request-related pages.
* **Task-related Saved Searches:** Saved Searches associated with Tasks display only in the left sidebar of Task-related pages.

The **My Saved Searches** page displays both your saved Request- and Task-related Saved Searches, as well as those that others have shared with you. See [View Your Saved Searches](save-and-share-request-and-task-related-searches.md#view-your-saved-searches).

![&quot;My Saved Searches&quot; page displays your saved searches and those which have been shared with you](../.gitbook/assets/my-saved-searches-page-package-requests-tasks.png)

Access Saved Search results from the left sidebar of the **Requests**- and **Tasks**- related pages. An icon represents each Saved Search that the ProcessMaker user selects when creating the Saved Search. Saved Searches display above the **My Saved Searches** icon![](../.gitbook/assets/save-search-icon-package-requests-tasks.png). Click the left sidebar on **Requests** and **Tasks** pages to view search results for each Saved Search.

![View Saved Search Results by clicking the left sidebar on &quot;Requests&quot; and &quot;Tasks&quot; pages](../.gitbook/assets/saved-searches-results-package-requests-tasks.png)

## Save and Share a Search

{% hint style="info" %}
To save and share searches, the [Saved Searches](../package-development-distribution/package-a-connector/saved-searches-package.md) package must be installed in your ProcessMaker instance. The Saved Searches package is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Saved Searches package can be installed in your ProcessMaker instance.
{% endhint %}

Follow these steps to create and share a Saved Search:

1. Enter the search criteria for either a [Request](requests/search-for-a-request.md) or [Task](task-management/search-for-a-task.md) search. It is this criteria from which the Saved Search settings are based.
2. Click the **Save Search** button![](../.gitbook/assets/save-search-button-requests-tasks.png). The **Save Search** screen displays. ![](../.gitbook/assets/save-search-screen-package-requests-tasks.png) 
3. In the **Name** field, enter the name of your Saved Search. This is a required field.
4. Follow these guidelines to select an image that represents the Saved Search results. Saved Searches associated with Requests display in the left sidebar of **Requests** pages, while those associated with Tasks display in the left sidebar of **Tasks** pages.
   * **Follow this step to select an image from ProcessMaker to represent the Saved Search:**

     Select any of the images that ProcessMaker provides by selecting its radio button.

   * **Follow these steps to select a custom image to represent the Saved Search:**
     1. Click the **Would you like to use a custom icon?** checkbox. The **Choose File** button displays.
     2. Click the **Choose File** button and locate the icon that represents the Saved Search. The icon must not be larger than 2 kilobytes large or the following message displays below the **Choose File** button: **The file is too large. File size must be less than 2KB when base64 encoded.**.
5. From the **Share With Users** drop-down menu, select with which ProcessMaker user\(s\) to share your Saved Search by selecting the person's full name. Multiple ProcessMaker users may be added, one at a time, to this field. You may click the Remove icon to remove a ProcessMaker user from the **Share With Users** drop-down menu. These selected ProcessMaker users will see your Saved Search in left sidebars of **Requests**/**Tasks** pages with the image you selected. ![](../.gitbook/assets/saved-search-user-package-requests-tasks.png) 
6. From the **Share With Groups** drop-down menu, select with which ProcessMaker group\(s\) to share your Saved Search by selecting the group. Multiple ProcessMaker groups may be added, one at a time, to this field. You may click the Remove icon to remove a ProcessMaker group from the **Share With Groups** drop-down menu. Members of these selected ProcessMaker groups will see your Saved Search in left sidebars of **Requests**/**Tasks** pages with the image you selected. ![](../.gitbook/assets/saved-search-group-package-requests-tasks.png) 
7. Click the **Save Search** button.

## View Your Saved Searches

{% hint style="info" %}
To view Saved Searches, the [Saved Searches](../package-development-distribution/package-a-connector/saved-searches-package.md) package must be installed in your ProcessMaker instance. The Saved Searches package is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Saved Searches package can be installed in your ProcessMaker instance.
{% endhint %}

Follow these steps to view your Saved Searches:

1. View any of the following **Requests** pages:

   * **My Requests** page. See [View Your Requests That You Started](requests/view-started-requests.md#view-your-requests).
   * **In Progress** page. See [View Requests That Are In Progress](requests/view-in-progress-requests.md#view-in-progress-requests-in-which-you-are-participating).
   * **Completed** page. See [View Completed Requests](requests/view-completed-requests.md#view-completed-requests-in-which-you-participated).
   * **All Requests** page. See [View All Requests](requests/view-all-requests.md#view-all-requests-in-your-organization). \(Note that your ProcessMaker user account must have the [**Requests: View All Requests** permission](../processmaker-administration/permission-descriptions-for-users-and-groups.md#requests) to view the **All Requests** page.\)

   Alternatively, view any of the following Tasks pages:

   * **To Do** page. See [View Tasks You Need to Do](task-management/view-tasks-you-need-to-do.md).
   * **Completed** page. See [View Completed Tasks](task-management/view-completed-tasks.md).

2. Click the **My Saved Searches** icon![](../.gitbook/assets/save-search-icon-package-requests-tasks.png)from the left sidebar. The **My Saved Searches** page displays.

![&quot;My Saved Searches&quot; page displays your saved searches and those which have been shared with you](../.gitbook/assets/my-saved-searches-page-package-requests-tasks.png)

The **My Saved Searches** page displays the following information in tabular format about your saved searches and those which have been shared with you:

* **Name:** The **Name** column displays the name of the saved search.
* **Type:** The **Type** column displays the type of saved search:
  * **Request:** The saved search is based on [Request search](requests/search-for-a-request.md#save-and-share-a-search) parameters.
  * **Task:** The saved search is based on Task search parameters.
* **Created By:** The **Created By** column displays the ProcessMaker user's avatar who created the saved search. Hover your cursor over the ProcessMaker user's avatar to view that person's full name.
* **Modified:** The **Modified** column displays the date and time the saved search was last modified by the ProcessMaker user that created the saved search. A saved search can only be modified by the ProcessMaker user that created it. The time zone setting to display the time is according to the ProcessMaker instance unless your [user profile's](profile-settings.md#change-your-profile-settings) **Time zone** setting is specified.
* **Created:** The **Created** column displays the date and time the saved search was created. The time zone setting to display the time is according to the ProcessMaker instance unless your [user profile's](profile-settings.md#change-your-profile-settings) **Time zone** setting is specified.

{% hint style="info" %}
### No Saved Searches?

If there are no saved searches, the following message displays: **No Results**.

### Display Information the Way You Want It

[Control how tabular information displays](control-how-requests-display-in-a-tab.md), including how to sort columns or how many items display per page.
{% endhint %}

