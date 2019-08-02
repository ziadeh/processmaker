---
description: Configure one of your own Saved Searches.
---

# Configure a Saved Search

## Configure a Saved Search

{% hint style="info" %}
### Don't Know What a Saved Search Is?

See [What is a Saved Search?](../what-is-a-saved-search.md) to learn how you can share the same Request and Task search parameters with other ProcessMaker users in your organization.

### ProcessMaker Package Required

To configure a [Saved Search](../what-is-a-saved-search.md), the [Saved Searches package](../../../package-development-distribution/package-a-connector/saved-searches-package.md) must be installed in your ProcessMaker instance. The Saved Searches package is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Saved Searches package can be installed in your ProcessMaker instance.
{% endhint %}

You may configure only one of your own Saved Searches. Configure a Saved Search regardless of whether it is [visible](hide-or-show-a-saved-search.md#show-your-hidden-saved-search) or [hidden](hide-or-show-a-saved-search.md#hide-your-own-saved-search).

Follow these steps to configure one of your Saved Searches:

1. [View all the Shared Searches that you have created and which have been shared with you](./#manage-your-own-saved-searches). The **My Saved Searches** page displays.
2. Click the **Configure** icon![](../../../.gitbook/assets/configure-process-icon-processes-page-processes.png). The **Configuration** tab displays. ![](../../../.gitbook/assets/configuration-tab-saved-searches-package.png) 
3. Edit the following information in the **Configuration** tab about the Saved Search as necessary:
   * In the **Name** field, enter the name of your Saved Search. This is a required field.
   * Follow these guidelines to select an image that represents the Saved Search results. Saved Searches associated with Requests display in the left sidebar of **Requests** pages, while those associated with Tasks display in the left sidebar of **Tasks** pages.

     **Follow this step to select an image from ProcessMaker to represent the Saved Search:**

     Select any of the images that ProcessMaker provides by selecting its radio button.

     **Follow these steps to select a custom image to represent the Saved Search:**

     1. Click the **Would you like to use a custom icon?** checkbox. The **Choose File** button displays.
     2. Click the **Choose File** button and locate the icon that represents the Saved Search. The icon must not be larger than 2 kilobytes large or the following message displays below the **Choose File** button: **The file is too large. File size must be less than 2KB when base64 encoded.**.

   * In the **PMQL** field, edit the ProcessMaker Query Language \(PMQL\) parameters if necessary. See the following topics for information how to use PMQL for Requests and Tasks:
     * [Request searches using PMQL](../../requests/search-for-a-request.md#advanced-search-for-a-request)
     * [Task searches using PMQL](../../task-management/search-for-a-task.md#advanced-search-for-a-task)
4. Click **Save** if no further configuration is required. Otherwise, continue.
5. Click the **Columns** tab. Use the **Columns** tab to customize a table from which to display search results for this Saved Search. The **Available Columns** column displays the [ProcessMaker Screen](../../../designing-processes/design-forms/what-is-a-form.md) control **Variable Name** field values that the Saved Search's selected Process references in [Task](../../../designing-processes/process-design/model-your-process/process-modeling-element-descriptions.md#task) elements.  
   ![](../../../.gitbook/assets/columns-tab-saved-searches-package.png) 

   **Note:** To view the **Variable Name** field values for ProcessMaker Screen controls that the Saved Search's selected Process references in Task elements, follow these guidelines:

   1. 

6. dfdfdf

## Related Topics



