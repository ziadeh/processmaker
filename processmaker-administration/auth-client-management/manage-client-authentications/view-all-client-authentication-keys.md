---
description: View the authenticated clients in your organization.
---

# View Authenticated Clients

## View All Authenticated Clients <a id="view-all-scripts"></a>

ProcessMaker displays all authenticated clients in one table that ProcessMaker Administrators throughout your organization have created. This makes it easy to manage authenticated clients to allow these ProcessMaker users to access the [ProcessMaker's RESTful API](https://staging-pm4.processmaker.net/api/documentation). The most recently created authenticated clients display at the top of the table.

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the "Auth Clients: View Auth Clients" permission to view the list of authenticated clients unless your user account has the **Make this user a Super Admin** setting selected.

See the [Auth Clients](../../permission-descriptions-for-users-and-groups.md#auth-clients) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to view all authenticated clients:

1. [Log on](../../../using-processmaker/log-in.md#log-in) to ProcessMaker.
2. Click the **Admin** option from the top menu. The **Users** page displays.
3. Click the **Auth Clients** icon![](../../../.gitbook/assets/auth-client-icon-admin.png). The **Auth Clients** page displays all client authentication keys. 

![&quot;Auth Clients&quot; page displays all authenticated clients that can access the ProcessMaker&apos;s RESTful API](../../../.gitbook/assets/auth-client-page-admin.png)

The **Auth Clients** page displays the following information in tabular format about authenticated clients that can access the ProcessMaker's RESTful API:

* **Client ID:** The **Client ID** column displays the Client ID for the authenticated client. ProcessMaker automatically generates the Client ID value when the client authentication is created and represents a sequential number of how many total authenticated clients have been created to that time.
* **Name:** The **Name** column displays to whom the client authentication applies. See [Create a New Client Authentication Key](create-a-new-client-authentication-key.md).
* **Redirect:** The **Redirect** column displays the URL that redirects the authenticated client back to the ProcessMaker application. See [Create a New Client Authentication Key](create-a-new-client-authentication-key.md).
* **Client Secret:** The **Client Secret** column displays the Client Secret for the authenticated client. ProcessMaker automatically generates the Client Secret when the key is created. Click the **Copy Client Secret to Clipboard** icon![](../../../.gitbook/assets/copy-icon-admin.png)to copy the Client Secret. Paste the Client Secret into your ProcessMaker authorization server.

{% hint style="info" %}
### Edit a Client Authentication Key

Click the **Edit** icon![](../../../.gitbook/assets/edit-icon.png). See [Edit a Client Authentication Key](edit-a-client-authentication-key.md).

### Create a Client Authentication Key

Click the **+Auth Client** button. See [Create a New Client Authentication Key](create-a-new-client-authentication-key.md#create-a-client-authentication-key).

### Delete a Client Authentication Key

Click the **Delete** icon![](../../../.gitbook/assets/trash-icon-process-modeler-processes.png). See [Delete a Client Authentication Key](delete-a-client-authentication-key.md#delete-a-client-authentication-key).

### No Client Authentication Keys?

If no authenticated clients have been created, the following message displays: **No Data Available**.

### Display Information the Way You Want It

[Control how tabular information displays](../../../using-processmaker/control-how-requests-display-in-a-tab.md), including how to sort columns or how many items display per page.
{% endhint %}

## Related Topics

{% page-ref page="../what-is-client-authentication.md" %}

{% page-ref page="edit-a-client-authentication-key.md" %}

{% page-ref page="delete-a-client-authentication-key.md" %}

{% page-ref page="create-a-new-client-authentication-key.md" %}

