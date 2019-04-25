---
description: Export a ProcessMaker Screen.
---

# Export a Screen

## Overview

Export a ProcessMaker Screen to your local computer. The exported ProcessMaker Screen may then be imported to the same or another ProcessMaker Spark instance of the same product version. An exported ProcessMaker Screen may then be shared with others so they can import your ProcessMaker Screen for their Processes.

An exported ProcessMaker Screen contains all the [controls](../screens-builder/control-descriptions/) as they were configured at the time the Screen was exported.

The exported ProcessMaker Screen has the `.spark` file extension.

## Export a ProcessMaker Screen

{% hint style="info" %}
Your user account or group membership must have the following permissions to export a ProcessMaker Screen:

* Screens: View Screens
* Screens: Export Screens

See the ProcessMaker [Screens](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#screens) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to export a ProcessMaker Screen:

1. [View your ProcessMaker Screens.](view-all-forms.md) The **Screens** page displays.
2. Select the **Export** icon![](../../../.gitbook/assets/export-process-icon-processes.png)for your ProcessMaker Screen. The following message displays: **You are about to export a Screen. All the configurations of the screen will be exported.**  

   ![](../../../.gitbook/assets/export-screen-processes.png)

3. Click **Download**, and then browse for the location on your local computer to save the exported ProcessMaker Screen.
4. By default, ProcessMaker Spark exports the ProcessMaker Screen using the original Screen name except spaces in the name are replaced with underscores \(`_`\). The file has the file extension `.spark`. Rename the default file name if necessary, though do not change the file extension. As a best practice, specify in the file name that this is an exported ProcessMaker Screen and not an [exported ProcessMaker Process](../../viewing-processes/view-the-list-of-processes/export-a-bpmn-compliant-process.md#export-a-bpmn-2-0-compliant-process).
5. Save the file. ProcessMaker Spark exports the `.spark` file to your local computer. The following message displays when the ProcessMaker Screen exports successfully: **The screen was exported.**

## Related Topics

{% page-ref page="../what-is-a-form.md" %}

{% page-ref page="view-all-forms.md" %}

{% page-ref page="create-a-new-form.md" %}

{% page-ref page="import-a-screen.md" %}

{% page-ref page="search-for-a-screen.md" %}

{% page-ref page="edit-a-screen.md" %}

{% page-ref page="duplicate-a-screen.md" %}

{% page-ref page="remove-a-screen.md" %}

{% page-ref page="../screens-builder/" %}

{% page-ref page="../../../using-processmaker/control-how-requests-display-in-a-tab.md" %}

