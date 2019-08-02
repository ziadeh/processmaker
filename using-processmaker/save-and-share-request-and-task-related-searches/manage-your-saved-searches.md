---
description: >-
  Manage your own Saved Searches, and view which ones others have shared with
  you.
---

# Manage Your Own Saved Searches

## Manage Your Own Saved Searches

{% hint style="info" %}
To manage [Saved Searches](what-is-a-saved-search.md), the [Saved Searches package](../../package-development-distribution/package-a-connector/saved-searches-package.md) must be installed in your ProcessMaker instance. The Saved Searches package is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Saved Searches package can be installed in your ProcessMaker instance.
{% endhint %}

You can manage your own Saved Searches. However, you cannot manage Saved Searches which have been shared with you. You can only manage those that you have [created](create-and-share-a-saved-search.md).

Follow these steps to manage your own Saved Searches:

1. View all Saved Searches that you have created and which have been shared with you from any of the following pages:
   * **Requests** pages:
     * **My Requests** page. See [View Your Requests That You Started](../requests/view-started-requests.md#view-your-requests).
     * **In Progress** page. See [View Requests That Are In Progress](../requests/view-in-progress-requests.md#view-in-progress-requests-in-which-you-are-participating).
     * **Completed** page. See [View Completed Requests](../requests/view-completed-requests.md#view-completed-requests-in-which-you-participated).
     * **All Requests** page. See [View All Requests](../requests/view-all-requests.md#view-all-requests-in-your-organization). \(Note that your ProcessMaker user account must have the [**Requests: View All Requests** permission](../../processmaker-administration/permission-descriptions-for-users-and-groups.md#requests) to view the **All Requests** page.\)
   * **Tasks** pages:
     * **To Do** page. See [View Tasks You Need to Do](../task-management/view-tasks-you-need-to-do.md).
     * **Completed** page. See [View Completed Tasks](../task-management/view-completed-tasks.md).
2. Click the **My Saved Searches** icon![](../../.gitbook/assets/save-search-icon-package-requests-tasks.png)from the left sidebar. The **My Saved Searches** page displays.

![&quot;My Saved Searches&quot; page displays your saved searches and those which have been shared with you](../../.gitbook/assets/my-saved-searches-page-package-requests-tasks.png)

The **My Saved Searches** page displays the following information in tabular format about your Saved Searches and those which have been shared with you:

* **Name:** The **Name** column displays the name of the Saved Search.
* **Type:** The **Type** column displays the type of Saved Search:
  * **Request:** The Saved Search is based on [Request search](../requests/search-for-a-request.md#save-and-share-a-search) parameters.
  * **Task:** The Saved Search is based on [Task search](../task-management/search-for-a-task.md) parameters.
* **Created By:** The **Created By** column displays the ProcessMaker user's avatar who created the Saved Search. Hover your cursor over the ProcessMaker user's avatar to view that person's full name.
* **Modified:** The **Modified** column displays the date and time the Saved Search was last modified by the ProcessMaker user that created the Saved Search. A Saved Search can only be modified by the ProcessMaker user that created it. The time zone setting to display the time is according to the ProcessMaker instance unless your [user profile's](../profile-settings.md#change-your-profile-settings) **Time zone** setting is specified.
* **Created:** The **Created** column displays the date and time the Saved Search was created. The time zone setting to display the time is according to the ProcessMaker instance unless your [user profile's](../profile-settings.md#change-your-profile-settings) **Time zone** setting is specified.

Use the **My Saved Searches** page to manage your own Saved Searches by using the following options:

* [Hide your Saved Search](manage-your-saved-searches.md#hide-one-of-your-saved-searches)
* [Show your hidden Saved Search](manage-your-saved-searches.md#show-one-of-your-hidden-saved-searches)
* [Configure your Saved Search](manage-your-saved-searches.md#configure-one-of-your-saved-searches)
* [Delete your Saved Search](manage-your-saved-searches.md#delete-one-of-your-saved-searches)

Saved Searches that do not have these options are those which have been shared with you. A Saved Search can only be managed by the ProcessMaker [user](../../processmaker-administration/add-users/what-is-a-user.md) that creates it. Therefore, there are no options for Saved Searches shared with you. You may only use Saved Searches shared with you by [viewing their search results](view-saved-searches-that-are-shared-with-you.md).

{% hint style="info" %}
### No Saved Searches?

If there are no Saved Searches, the following message displays: **No Results**.

### Display Information the Way You Want It

[Control how tabular information displays](../control-how-requests-display-in-a-tab.md), including how to sort columns or how many items display per page.
{% endhint %}

### Hide Your Saved Search

You may hide only one of your own Saved Searches. Hiding a Saved Search only hides that Saved Search from you using it from the left sidebar of the Request- and Task-related pages. Sharing recipients of that Saved Search may still use it to view search results using your Saved Search's parameters.

Follow these steps to hide one of your own Saved Searches:

1. [View all the Shared Searches that you have created and which have been shared with you](manage-your-saved-searches.md#manage-your-own-saved-searches). The **My Saved Searches** page displays.
2. Click the **Hide Saved Search** icon![](../../.gitbook/assets/hide-saved-search-icon-package.png) for one of your Saved Searches. The Saved Search is hidden, indicated by diminished visibility of that Saved Search in the **My Saved Searches** page.

### Show Your Hidden Saved Search

Showing a hidden Saved Search allows you to use that Saved Search again from the left sidebar of the Request- and Task-related pages.

Follow these steps to show one of your hidden Saved Searches:

1. [View all the Shared Searches that you have created and which have been shared with you](manage-your-saved-searches.md#manage-your-own-saved-searches). The **My Saved Searches** page displays.
2. Click the **Show Saved Search** icon![](../../.gitbook/assets/show-saved-search-icon-package.png) for the hidden Saved Search. The Saved Search is visible, indicated by full visibility of that Saved Search in the **My Saved Searches** page.

### Configure Your Saved Search

You may configure only one of your own Saved Searches. Configure a Saved Search regardless of whether it is [visible](manage-your-saved-searches.md#show-your-hidden-saved-search) or [hidden](manage-your-saved-searches.md#hide-your-saved-search).

Follow these steps to configure one of your Saved Searches:

1. [View all the Shared Searches that you have created and which have been shared with you](manage-your-saved-searches.md#manage-your-own-saved-searches). The **My Saved Searches** page displays.
2. Click the **Configure** icon![](../../.gitbook/assets/configure-process-icon-processes-page-processes.png). The **Configuration** tab displays. ![](../../.gitbook/assets/configuration-tab-saved-searches-package.png) 
3. Edit the following information in the **Configuration** tab about the Saved Search as necessary:
   * In the **Name** field, enter the name of your Saved Search. This is a required field.
   * Follow these guidelines to select an image that represents the Saved Search results. Saved Searches associated with Requests display in the left sidebar of **Requests** pages, while those associated with Tasks display in the left sidebar of **Tasks** pages.

     **Follow this step to select an image from ProcessMaker to represent the Saved Search:**

     Select any of the images that ProcessMaker provides by selecting its radio button.

     **Follow these steps to select a custom image to represent the Saved Search:**

     1. Click the **Would you like to use a custom icon?** checkbox. The **Choose File** button displays.
     2. Click the **Choose File** button and locate the icon that represents the Saved Search. The icon must not be larger than 2 kilobytes large or the following message displays below the **Choose File** button: **The file is too large. File size must be less than 2KB when base64 encoded.**.

   * In the **PMQL** field, edit the ProcessMaker Query Language \(PMQL\) parameters if necessary. See the following topics for information how to use PMQL for Requests and Tasks:
     * [Request searches using PMQL](../requests/search-for-a-request.md#advanced-search-for-a-request)
     * [Task searches using PMQL](../task-management/search-for-a-task.md#advanced-search-for-a-task)
4. Click **Save** if no further configuration is required. Otherwise, continue.
5. Click the **Columns** tab. Use the **Columns** tab to customize a table from which to display search results for this Saved Search. The **Available Columns** column displays the ProcessMaker Screen Variable Name values associated with controls referenced by ProcessMaker Screens in the Saved Search's Process. ![](../../.gitbook/assets/columns-tab-saved-searches-package.png) 
6. dfdfdf

### Delete Your Saved Search

{% hint style="warning" %}
Consider carefully whether to delete one of your own Saved Searches. When deleting a Shared Search, it is no longer shared with those ProcessMaker users and/or groups with which you have shared them. The recipients of your shared Saved Search will no longer be able to use it to quickly view search results using your Shared Search's parameters. Your Saved Search will be removed from the left sidebar of the **Requests**/**Tasks** pages.
{% endhint %}

You may delete only one of your own Saved Searches. Delete a Saved Search regardless of whether it is [visible](manage-your-saved-searches.md#show-your-hidden-saved-search) or [hidden](manage-your-saved-searches.md#hide-your-saved-search).

Follow these steps to delete one of your own Saved Searches:

1. [View all the Shared Searches that you have created and which have been shared with you](manage-your-saved-searches.md#manage-your-own-saved-searches). The **My Saved Searches** page displays.
2. Click the **Delete** icon![](../../.gitbook/assets/trash-icon-process-modeler-processes.png) for one of your Saved Searches. The **Caution** screen displays to confirm the deletion of the Saved Search.  ![](../../.gitbook/assets/caution-delete-saved-search-package.png) 
3. Click **Confirm**.

## Related Topics



