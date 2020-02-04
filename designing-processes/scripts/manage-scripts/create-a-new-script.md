---
description: >-
  Create a new ProcessMaker Script to automate or add functionality to any
  Process.
---

# Create a New Script

## Create a New ProcessMaker Script

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to create a ProcessMaker Script unless your user account has the **Make this user a Super Admin** setting selected:

* Scripts: View Scripts
* Scripts: Create Scripts

See the ProcessMaker [Scripts](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#scripts) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to create a new ProcessMaker Script:

1. [View your ProcessMaker Scripts](view-all-scripts.md). The **Scripts** page displays.
2. Click the **+Script** button. The **Create Script** screen displays.  

   ![](../../../.gitbook/assets/add-a-script-screen-processes.png)

3. In the **Name** field, enter the name of the ProcessMaker Script. ProcessMaker Script names must be unique and can only use alphanumeric characters and spaces. This is a required field.
4. In the **Description** field, enter the description of the ProcessMaker Script. This is a required field.
5. From the **Category** drop-down menu, select one or more Script Categories to associate with this ProcessMaker Script. In doing so, [Script Categories](manage-script-categories/what-is-a-script-category.md) may be sorted from the [**Scripts** page](view-all-scripts.md#view-all-processmaker-scripts). To remove a Script Category that is currently selected, click the ![](../../../.gitbook/assets/remove-group-user-admin.png)icon for that selection or press `Enter` when the drop-down is visible. This is a required field.
6. From the **Language** drop-down menu, select one of the following programming languages in which the ProcessMaker Script is written:

   * PHP
   * Lua
   * JavaScript
   * C\# \(when the [C\# package](../../../package-development-distribution/package-a-connector/c-package.md) is installed to your ProcessMaker instance\)
   * Java \(when the [Java package](../../../package-development-distribution/package-a-connector/java-package.md) is installed to your ProcessMaker instance\)
   * R \(when the [R package](../../../package-development-distribution/package-a-connector/r-package.md) is installed to your ProcessMaker instance\)

   This is a required field.

7. From the **Run script as** drop-down menu, select which ProcessMaker user's API client token to use with the ProcessMaker REST API. Ensure that the selected ProcessMaker user's account has the appropriate API [permissions](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md) to access the ProcessMaker REST API. This is a required field.
8. In the **Timeout** field, use the slider control or enter how many seconds the ProcessMaker Script is allowed to run before it times out. Use `0` to indicate that the ProcessMaker Script never times out. The default timeout is **60** seconds. This field requires an integer.
9. Click **Save**. Scripts Editor displays so you can develop your ProcessMaker Script. See [Scripts Editor](../scripts-editor.md).

## Related Topics

{% page-ref page="../what-is-a-script.md" %}

{% page-ref page="manage-script-categories/" %}

{% page-ref page="view-all-scripts.md" %}

{% page-ref page="search-for-a-script.md" %}

{% page-ref page="edit-script-configuration.md" %}

{% page-ref page="edit-a-script.md" %}

{% page-ref page="duplicate-a-script.md" %}

{% page-ref page="remove-a-script.md" %}

{% page-ref page="../scripts-editor.md" %}

{% page-ref page="../../../package-development-distribution/first-topic.md" %}

{% page-ref page="../../../package-development-distribution/package-a-connector/c-package.md" %}

{% page-ref page="../../../package-development-distribution/package-a-connector/java-package.md" %}

{% page-ref page="../../../package-development-distribution/package-a-connector/r-package.md" %}

