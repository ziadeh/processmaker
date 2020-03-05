---
description: Delete elements or connectors you've added to your Process model.
---

# Delete Process Model Elements or Connectors

## Delete Process Model Elements or Connectors

Deleting a Process model element or a [connector](model-processes-using-connectors/what-is-a-connector.md) also deletes any [Sequence Flow](model-your-process/process-modeling-element-descriptions.md#sequence-flow) and/or [Message Flow](model-your-process/process-modeling-element-descriptions.md#message-flow) elements incoming to or outgoing from that element. For example, if a Process model element is deleted that has both incoming and outgoing Sequence Flow elements, the Sequence Flow elements must be reconnected for the remaining elements/connectors.

{% hint style="info" %}
### Don't Know What Process Model Elements Are?

See [Process Modeling Element Descriptions](model-your-process/process-modeling-element-descriptions.md).

### Don't Know What a ConnectorIs?

See [What is a Connector?](model-processes-using-connectors/what-is-a-connector.md).

### Permissions Required

Your ProcessMaker user account or group membership must have the following permissions to delete elements from the Process model unless your user account has the **Make this user a Super Admin** setting selected:

* Processes: Edit Processes
* Processes: View Processes

See the [Process](../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

### Delete a Non-Pool Element or a Connector

Follow these steps to delete any non-Pool element or a connector from a Process model:

1. Select the non-Pool element/connector to delete. Available options display above the selected element/connector.  

   ![](../../.gitbook/assets/delete-element-process-modeler-processes.png)

2. Click the **Delete** icon![](../../.gitbook/assets/remove-icon.png). The Process model element/connector is deleted.

### Delete a Pool Element

{% hint style="warning" %}
When a Pool element is deleted, all elements and connectors within it are also deleted. If you want to keep the elements/controls within a Pool element, you must add those elements/controls outside of the Pool element prior to deleting the Pool element.

If you accidentally delete a Pool element with other elements/connectors you want to keep, then select the **Undo** button.
{% endhint %}

Follow these steps to delete a Pool element from a Process model:

1. ​Select the Pool name in the Pool element to delete, thereby selecting the Pool element. Available options display to the right of the selected element.
2. Click the **Delete** icon![](../../.gitbook/assets/remove-icon.png). The Pool element is deleted. All non-Pool elements and connectors within the Pool element are also deleted.

### Delete a Lane Element from a Pool Element

Follow these steps to delete a Lane element from a Pool element:

1. ​Select the Lane element in the Pool element to delete. Available options display above the selected element.
2. Click the **Delete** icon![](../../.gitbook/assets/remove-icon.png). The Pool element is deleted. All non-Pool elements and connectors that were within the deleted Lane element stay in their current positions within the Pool element.

## Related Topics

{% page-ref page="model-your-process/process-modeling-element-descriptions.md" %}

{% page-ref page="../viewing-processes/view-the-list-of-processes/view-your-processes.md" %}

{% page-ref page="../viewing-processes/view-the-list-of-processes/create-a-process.md" %}

