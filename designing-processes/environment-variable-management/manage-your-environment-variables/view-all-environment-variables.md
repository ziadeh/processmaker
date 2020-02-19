---
description: View the ProcessMaker Environment Variables in your organization.
---

# View Environment Variables

## View All ProcessMaker Environment Variables <a id="view-all-scripts"></a>

ProcessMaker displays all ProcessMaker Environment Variables in one table that Process Owners throughout your organization have created. Any ProcessMaker Environment Variable can be used in any Process in your organization. Since ProcessMaker Environment Variables are abstract proxies to securely maintain sensitive information during in-progress [Requests](../../../using-processmaker/requests/what-is-a-request.md), Process Owners who create or use ProcessMaker Environment Variables in their Processes do not have access to that sensitive information. This makes it easy to manage sensitive information used in Requests.

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the "Environment Variables: View Environment Variables" permission to view the list of ProcessMaker Environment Variables unless your user account has the **Make this user a Super Admin** setting selected.

See the ProcessMaker [Environment Variable](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#environment-variables) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to view all ProcessMaker Environment Variables in your organization:

1. ​[Log on](https://processmaker.gitbook.io/processmaker-4-community/-LPblkrcFWowWJ6HZdhC/using-processmaker/log-in#log-in) to ProcessMaker.
2. Click the **Designer** option from the top menu. The **Processes** page displays.
3. Click the **Environment Variables** icon![](../../../.gitbook/assets/environment-variable-icon-processes.png). The **Environment Variables** page displays all ProcessMaker Environment Variables.

![Environment Variables page displays all Environment Variables in your organization](../../../.gitbook/assets/environment-variables-screen-processes.png)

The **Environment Variables** page displays the following information in tabular format about ProcessMaker Environment Variables:

* **Name:** The **Name** column displays the name of the ProcessMaker Environment Variable.
* **Description:** The **Description** column displays the description about the ProcessMaker Environment Variable.
* **Modified:** The **Modified** column displays the date and time the ProcessMaker Environment Variable was last modified. The time zone setting to display the time is according to the ProcessMaker instance unless your [user profile's](../../../using-processmaker/profile-settings.md#change-your-profile-settings) **Time zone** setting is specified.
* **Created:** The **Created** column displays the date and time the ProcessMaker Environment Variable was created. The time zone setting to display the time is according to the ProcessMaker instance unless your [user profile's](../../../using-processmaker/profile-settings.md#change-your-profile-settings) **Time zone** setting is specified.

{% hint style="info" %}
### Search for a ProcessMaker Environment Variable

Use the [Search](../../scripts/manage-scripts/search-for-a-script.md#search-for-a-processmaker-script) setting to filter ProcessMaker Environment Variables that display.

### Create an Environment Variable

Click the **+Environment Variable** button. See [Create a New Environment Variable](create-a-new-environment-variable.md#create-a-new-processmaker-environment-variable).

### Edit a ProcessMaker Environment Variable

Click the **Edit** icon![](../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png). See [Edit an Environment Variable](edit-an-environmental-variable.md#edit-a-processmaker-environment-variable).

### Delete a ProcessMaker Environment Variable

Click the **Delete** icon![](../../../.gitbook/assets/trash-icon-process-modeler-processes.png). See [Delete an Environment Variable](remove-an-environment-variable.md#remove-a-processmaker-environment-variable).

### No ProcessMaker Environment Variables?

If no ProcessMaker Environment Variables exist, the following message displays: **No Data Available**.

### Display Information the Way You Want It

[Control how tabular information displays](../../../using-processmaker/control-how-requests-display-in-a-tab.md), including how to sort columns or how many items display per page.
{% endhint %}

## Related Topics

{% page-ref page="../what-is-an-environment-variable.md" %}

{% page-ref page="create-a-new-environment-variable.md" %}

{% page-ref page="search-for-an-environment-variable.md" %}

{% page-ref page="edit-an-environmental-variable.md" %}

{% page-ref page="remove-an-environment-variable.md" %}

{% page-ref page="../../../using-processmaker/control-how-requests-display-in-a-tab.md" %}

