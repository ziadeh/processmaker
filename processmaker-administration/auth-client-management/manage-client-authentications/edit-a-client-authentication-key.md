---
description: Edit an authenticated client.
---

# Edit an Authenticated Client

## Edit an Authenticated Client

{% hint style="info" %}
Your user account or group membership must have the following permissions to edit client authentication:

* Auth Clients: View Auth Clients
* Auth Clients: Edit Auth Clients

See the [Auth Clients](../../permission-descriptions-for-users-and-groups.md#auth-clients) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to edit an authenticated client that allows that ProcessMaker user to access the ProcessMaker REST API in your ProcessMaker instance:

1. [View all authenticated clients.](view-all-client-authentication-keys.md#view-all-scripts) The **Auth Clients** page displays.
2. Click the **Edit** icon![](../../../.gitbook/assets/edit-icon.png) for the authenticated client to edit. The **Edit Auth Client** screen displays.  

   ![](../../../.gitbook/assets/edit-auth-client-screen-admin.png)

3. Edit the following information about the authenticated client as necessary:
   * In the **Name** field, edit to whom the authenticated client is granted. This name must be unique from all other authenticated clients. This is a required field.
   * In the **Redirect URL** field, edit the URL that redirects the authenticated client to your ProcessMaker instance. This is a required field.
4. Click **Save**.

## Related Topics

{% page-ref page="../what-is-client-authentication.md" %}

{% page-ref page="view-all-client-authentication-keys.md" %}

{% page-ref page="delete-a-client-authentication-key.md" %}

{% page-ref page="create-a-new-client-authentication-key.md" %}

