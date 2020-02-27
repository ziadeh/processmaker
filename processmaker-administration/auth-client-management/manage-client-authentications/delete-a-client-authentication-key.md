---
description: Delete an authenticated client.
---

# Delete an Authenticated Client

## Delete an Authenticated Client

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to delete an authenticated client unless your user account has the **Make this user a Super Admin** setting selected:

* Auth Clients: Delete Auth Clients
* Auth Clients: View Auth Clients

See the [Auth Clients](../../permission-descriptions-for-users-and-groups.md#auth-clients) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

{% hint style="warning" %}
When an authenticated client is deleted, the ProcessMaker user to whom the client authentication applied will no longer be able to access the ProcessMaker REST API in the ProcessMaker instance to which that user is granted.

Deleting an authenticated client from the **Auth Clients** page cannot be undone.
{% endhint %}

Follow these steps to delete an authenticated client:

1. [View all authenticated clients.](view-all-client-authentication-keys.md#view-all-scripts) The **Auth Clients** page displays.
2. Click the **Delete** icon![](../../../.gitbook/assets/trash-icon-process-modeler-processes.png)for the authenticated client to be deleted. The **Caution** screen displays to confirm the deletion of the authenticated client.  

   ![](../../../.gitbook/assets/caution-remove-client-authentication-key-admin.png)

3. Click **Confirm**.

## Related Topics

{% page-ref page="../what-is-client-authentication.md" %}

{% page-ref page="view-all-client-authentication-keys.md" %}

{% page-ref page="edit-a-client-authentication-key.md" %}

{% page-ref page="create-a-new-client-authentication-key.md" %}

