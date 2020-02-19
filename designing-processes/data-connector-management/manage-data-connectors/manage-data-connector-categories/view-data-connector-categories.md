---
description: View the Data Connector Categories in your organization.
---

# View Data Connector Categories

## View Data Connector Categories

{% hint style="info" %}
### ProcessMaker Package Required

The [Data Connector package](../../../../package-development-distribution/package-a-connector/data-connector-package.md) must be installed in your ProcessMaker instance. The [Data Connector](../../what-is-a-data-connector.md) package is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](https://www.processmaker.com/contact/) or ask your ProcessMaker sales representative how the Data Connectors package can be installed in your ProcessMaker instance.

### Permissions Required

Your ProcessMaker user account or group membership must have the following permissions to view Data Connector Categories unless your user account has the **Make this user a Super Admin** setting selected:

* Data Connectors: View Data Connector Categories
* Data Connectors: View Data Connectors

See the ProcessMaker [Data Connectors](../../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#data-connectors) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to view [Data Connector Categories](what-is-a-data-connector-category.md):

1. [Log on](../../../../using-processmaker/log-in.md#log-in) to ProcessMaker.
2. Click the **Designer** option from the top menu. The **Processes** page displays.
3. Click the **Data Connectors** icon![](../../../../.gitbook/assets/data-connectors-icon-package.png)from the left sidebar. The **Data Connectors** tab displays all ProcessMaker Data Connectors in the **Data Connectors** page.
4. Click the **Categories** tab. The Data Connector Categories display.

![&quot;Categories&quot; tab in the &quot;Data Connectors&quot; page](../../../../.gitbook/assets/data-connector-categories-package.png)

The **Categories** tab displays the following information in tabular format about Data Connector Categories:

* **Name:** The **Name** column displays the name of the Data Connector Category. The Data Connector Category named **Generated** is the default Category. Data Connectors that are automatically created when a [ProcessMaker Collection](../../../../collections/what-is-a-collection.md) is created are assigned the **Generated** Category by default.
* **Status:** The **Status** column displays the status of the Data Connector Category. Below is a description of each status:
  * **Active:** Active Data Connector Categories can have ProcessMaker Data Connectors assigned to them. The Data Connector Category named **Generated** is active by default.
  * **Inactive:** Inactive Data Connector Categories cannot have ProcessMaker Data Connectors assigned to them.
* **Screens:** The **\# Screens** column displays how many ProcessMaker Data Connectors in your organization have been assigned to that Data Connector Category.
* **Modified:** The **Modified** column displays the date and time the Data Connector Category was last modified. The time zone setting to display the time is according to the ProcessMaker instance unless your [user profile's](../../../../using-processmaker/profile-settings.md#change-your-profile-settings) **Time zone** setting is specified.
* **Created:** The **Created** column displays the date and time the Data Connector Category was created. The time zone setting to display the time is according to the ProcessMaker instance unless your [user profile's](../../../../using-processmaker/profile-settings.md#change-your-profile-settings) **Time zone** setting is specified.

{% hint style="info" %}
### No Data Connector Categories? <a id="no-processes"></a>

If no Data Connector Categories exist, the following message displays: **No Results**.

### Search Data Connector Categories

Use the **Search** setting to filter Data Connector Categories by their names.

### Display Information the Way You Want It <a id="display-information-the-way-you-want-it"></a>

​[Control how tabular information displays](https://processmaker.gitbook.io/processmaker-4-community/-LPblkrcFWowWJ6HZdhC/~/drafts/-LWD5skTaOptuIWIWk76/primary/using-processmaker/control-how-requests-display-in-a-tab), including how to sort columns or how many items display per page.
{% endhint %}

## Related Topics

{% page-ref page="what-is-a-data-connector-category.md" %}

{% page-ref page="create-a-new-data-connector-category.md" %}

{% page-ref page="edit-a-data-connector-category.md" %}

{% page-ref page="delete-a-data-connector-category.md" %}

{% page-ref page="../../what-is-a-data-connector.md" %}

