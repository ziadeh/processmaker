---
description: >-
  Delete a ProcessMaker Environment Variable from being used in all processes in
  your organization.
---

# Delete an Environment Variable

## Delete a ProcessMaker Environment Variable

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to delete a ProcessMaker Environment Variable unless your user account has the **Make this user a Super Admin** setting selected:

* Environment Variables: View Environment Variables
* Environment Variables: Delete Environment Variables

See the ProcessMaker [Environment Variable](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#environment-variables) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

{% hint style="warning" %}
The data that a ProcessMaker Environment Variable maintains secure remains so for completed Requests associated with Processes that reference a deleted Environment Variable. However, in-progress and future Requests that reference a deleted ProcessMaker Environment Variable no longer have a secure environment for that data. Be extremely cautious when considering deleting a ProcessMaker Environment Variable.

Deleting a ProcessMaker Environment Variable from the **Environment Variables** page cannot be undone.
{% endhint %}

Follow these steps to delete a ProcessMaker Environment Variable:

1. [View your ProcessMaker Environment Variables.](view-all-environment-variables.md) The **Environment Variables** page displays.
2. Click the **Delete** icon![](../../../.gitbook/assets/trash-icon-process-modeler-processes.png)for the ProcessMaker Environment Variable to delete. The **Caution** screen displays to confirm the deletion of the ProcessMaker Environment Variable.

   ![](../../../.gitbook/assets/caution-environment-variable-removal-screen-processes.png)

3. Click **Confirm**.

## Related Topics

{% page-ref page="../what-is-an-environment-variable.md" %}

{% page-ref page="view-all-environment-variables.md" %}

{% page-ref page="create-a-new-environment-variable.md" %}

{% page-ref page="search-for-an-environment-variable.md" %}

{% page-ref page="edit-an-environmental-variable.md" %}

