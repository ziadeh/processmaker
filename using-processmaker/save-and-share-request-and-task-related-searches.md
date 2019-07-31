---
description: Save and share search parameters related to Requests and Tasks.
---

# Save and Share Request- and Task-Related Searches

## Overview

{% hint style="info" %}
To save and share a Request search, the [Saved Searches](../package-development-distribution/package-a-connector/saved-searches-package.md) package must be installed in your ProcessMaker instance. The Saved Searches package is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Saved Searches package can be installed in your ProcessMaker instance.
{% endhint %}

Use the Saved Searches package to save and share searches associated with [Requests](requests/what-is-a-request.md) and [Tasks](task-management/what-is-a-task.md). In doing so, you maintain the search parameters for your saved searches; recipients of the saved searches that you share can only view results of those saved searches in the left sidebar of the Requests and Tasks pages. Share your Request search with specific ProcessMaker [users](../processmaker-administration/add-users/what-is-a-user.md) and/or [groups](../processmaker-administration/assign-groups-to-users/what-is-a-group.md).

The **My Saved Searches** page displays both your saved Request and Task searches, as well as those that others have shared with you. However, you can only configure your own saved searches. See [View Your Saved Searches](save-and-share-request-and-task-related-searches.md#view-your-saved-searches).

### Save and Share a Search

Follow these steps to save and share a Request search when the Saved Searches package is installed in your ProcessMaker instance:

1. Enter the search criteria for either a [basic](requests/search-for-a-request.md#basic-search-for-a-request) or [advanced](requests/search-for-a-request.md#advanced-search-for-a-request) Request search. It is this criteria from which the saved search settings are based.
2. Click the **Save Search** button![](../.gitbook/assets/save-search-button-requests-tasks.png). The **Save Search** screen displays. ![](../.gitbook/assets/save-search-screen-package-requests-tasks.png) 
3. In the **Name** field, enter the name of your saved search. This is a required field.
4. Follow these guidelines to select an image that represents the saved search that displays in the left sidebar of the **Requests** page for yourself and those with whom you share this saved search. This image displays beside the name of the saved search in the **My Saved Searches** page.
   * **Follow this step to select an image from ProcessMaker to represent the saved search:**

     Select any of the images that ProcessMaker provides by selecting its radio button.

   * **Follow these steps to select a custom image to represent the saved search:**
     1. Click the **Would you like to use a custom icon?** checkbox. The **Choose File** button displays.
     2. Click the **Choose File** button and locate the icon that represents the saved search. The icon must not be larger than 2 kilobytes large or the following message displays below the **Choose File** button: **The file is too large. File size must be less than 2KB when base64 encoded.**.
5. From the **Share With Users** drop-down menu, select with which ProcessMaker user\(s\) to share your saved search by selecting the person's full name. Multiple ProcessMaker users may be added, one at a time, to this field. You may click the Remove icon to remove a ProcessMaker user from the **Share With Users** drop-down menu. These selected ProcessMaker users receive your saved search using the image you selected.
6. From the **Share With Groups** drop-down menu, select with which ProcessMaker group\(s\) to share your saved search by selecting the group. Multiple ProcessMaker groups may be added, one at a time, to this field. You may click the Remove icon to remove a ProcessMaker group from the **Share With Groups** drop-down menu. Members of these selected ProcessMaker groups receive your saved search using the image you selected.
7. Click the **Save Search** button.

### View Your Saved Searches

Follow these steps to view your saved Request searches when the [Saved Searches package](../package-development-distribution/package-a-connector/saved-searches-package.md) is installed in your ProcessMaker instance:

1. View any of the following **Requests** pages:
   * **My Requests** page. See [View Your Requests That You Started](requests/view-started-requests.md#view-your-requests).
   * **In Progress** page. See [View Requests That Are In Progress](requests/view-in-progress-requests.md#view-in-progress-requests-in-which-you-are-participating).
   * **Completed** page. See [View Completed Requests](requests/view-completed-requests.md#view-completed-requests-in-which-you-participated).
   * **All Requests** page. See [View All Requests](requests/view-all-requests.md#view-all-requests-in-your-organization). \(Note that your ProcessMaker user account must have the [**Requests: View All Requests** permission](../processmaker-administration/permission-descriptions-for-users-and-groups.md#requests) to view the **All Requests** page.\)
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

