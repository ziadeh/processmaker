---
description: Edit the configuration for a ProcessMaker Script.
---

# Configure a Script

## Configure a ProcessMaker Script

{% hint style="info" %}
Your user account or group membership must have the following permissions to configure a ProcessMaker Script's configuration:

* Scripts: View Scripts
* Scripts: Edit Scripts

See the ProcessMaker [Scripts](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#scripts) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to configure a ProcessMaker Script:

1. [View your ProcessMaker Scripts.](view-all-scripts.md#view-all-processmaker-scripts) The **Scripts** page displays.
2. Click the **Configure** icon![](../../../.gitbook/assets/configure-process-icon-processes-page-processes.png)for your ProcessMaker Script. The **Edit** page displays.  

   ![](../../../.gitbook/assets/edit-script-page-processes.png)

3. Edit the following information about the ProcessMaker Script as necessary:
   * In the **Name** field, edit the ProcessMaker Script name. This is a required field.
   * From the **Language** drop-down menu, select one of the following programming languages in which the ProcessMaker Script is written:

     * PHP
     * Lua

     This is a required field.

   * From the **Run script as** drop-down menu, select which ProcessMaker user's API client token to use with the ProcessMaker Spark REST API. This is a required field, though it only applies if this ProcessMaker Script makes calls to the ProcessMaker Spark REST API. Ensure that the selected ProcessMaker user's account has the appropriate API [permissions](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md) to access the ProcessMaker Spark REST API.
   * In the **Description** field, edit the description of the ProcessMaker Script.
   * In the **Timeout** field, use the slider control or enter how many seconds the ProcessMaker Script is allowed to run before it times out. Use `0` to indicate that the ProcessMaker Script never times out. The default timeout is **60** seconds. This is a required field.
4. Click **Save**.

## Related Topics

{% page-ref page="../what-is-a-script.md" %}

{% page-ref page="view-all-scripts.md" %}

{% page-ref page="create-a-new-script.md" %}

{% page-ref page="search-for-a-script.md" %}

{% page-ref page="edit-a-script.md" %}

{% page-ref page="duplicate-a-script.md" %}

{% page-ref page="remove-a-script.md" %}

{% page-ref page="../scripts-editor.md" %}

