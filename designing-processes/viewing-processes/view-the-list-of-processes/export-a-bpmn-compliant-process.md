---
description: Export a ProcessMaker Process that is BPMN 2.0 compliant.
---

# Export a BPMN-Compliant Process

## Overview

Export Processes from ProcessMaker that are BPMN 2.0 compliant. An exported Process may then be [imported](import-a-bpmn-compliant-process.md) in the following ways:

* Import into ProcessMaker: Import a Process to the same or another ProcessMaker instance of the same product version.
* Import into a third-party tool: Import into a BPMN 2.0 compliant third-party tool. All ProcessMaker features that are not part of the [BPMN 2.0 specification](https://www.omg.org/spec/BPMN/2.0/About-BPMN/) are ignored.

The following ProcessMaker components are exported if they are specified in the Process:

* [ProcessMaker Scripts](../../scripts/what-is-a-script.md) configured for [Script Task elements](../../process-design/model-your-process/add-and-configure-script-task-elements.md) as well as their Script configurations
* [ProcessMaker Screens](../../design-forms/what-is-a-form.md) configured for [Task elements](../../process-design/model-your-process/add-and-configure-task-elements.md) as well as routing rule expressions
* [Sequence Flows](../../process-design/model-your-process/the-quick-toolbar.md) and their routing rule expressions
* [ProcessMaker Environment Variables](../../environment-variable-management/what-is-an-environment-variable.md), but not the sensitive data an Environment Variable contained in the original Process

ProcessMaker does not export [users](../../../processmaker-administration/add-users/what-is-a-user.md) or [groups](../../../processmaker-administration/assign-groups-to-users/what-is-a-group.md) associated with the original ProcessMaker Process. Therefore, Task element assignments are not exported and must be configured if the Process is imported to another ProcessMaker instance or third-party BPMN 2.0 modeler application.

An exported Process has the `.json` file extension.

## Export a BPMN 2.0 Compliant Process

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to export a Process unless your user account has the **Make this user a Super Admin** setting selected:

* Processes: Export Processes
* Processes: View Processes

See the ProcessMaker [Processes](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

{% hint style="warning" %}
ProcessMaker Processes that are not BPMN 2.0 compliant can be exported successfully. However, such Processes will not [import](import-a-bpmn-compliant-process.md) successfully. Therefore, validate that your Process is BPMN 2.0 compliant before exporting it. See [Validate Your Process is BPMN 2.0 Compliant](../../process-design/validate-bpmn-2.0-compliance.md).
{% endhint %}

Follow these steps to export a BPMN 2.0 compliant Process:

1. [View your active Processes.](./#view-your-processes) The **Processes** tab displays.
2. Click the **Export** icon![](../../../.gitbook/assets/export-process-icon-processes.png)for your Process. The following message displays: **You are about to export a Process. User assignments and sensitive environment variables will not be exported.**  

   ![](../../../.gitbook/assets/export-process-message-processes.png)

3. Click **Download**, and then browse for the location on your local computer to save the exported Process.
4. By default, ProcessMaker exports the Process using the original Process name except spaces in the name are replaced with underscores \(`_`\). The file has the file extension `.json`. Rename the default file name if necessary, though do not change the file extension. As a best practice, specify in the file name that this is an exported ProcessMaker Process and not an [exported ProcessMaker Screen](../../design-forms/manage-forms/export-a-screen.md#export-a-processmaker-screen) or an [exported ProcessMaker Collection](../../../collections/manage-collections/export-a-collection.md).
5. Save the file. ProcessMaker exports the `.json` file to your local computer or network. The following message displays when the Process exports successfully: **The process was exported.**

## Related Topics

{% page-ref page="../what-is-a-process.md" %}

{% page-ref page="view-your-processes.md" %}

{% page-ref page="manage-process-categories/" %}

{% page-ref page="create-a-process.md" %}

{% page-ref page="import-a-bpmn-compliant-process.md" %}

{% page-ref page="search-for-a-process.md" %}

{% page-ref page="edit-the-name-description-category-or-status-of-a-process.md" %}

{% page-ref page="remove-a-process.md" %}

{% page-ref page="restore-a-process.md" %}

{% page-ref page="../../process-design/" %}

