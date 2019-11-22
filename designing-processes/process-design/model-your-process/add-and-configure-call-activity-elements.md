---
description: Add and configure Call Activity elements in your Process model.
---

# Add and Configure Call Activity Elements

## Add a Call Activity Element

{% hint style="info" %}
### Don't Know What a Call Activity Element Is?

See [Process Modeling Element Descriptions](process-modeling-element-descriptions.md) for a description of the [Call Activity](process-modeling-element-descriptions.md#call-activity) element.

### Permissions Required

Your ProcessMaker user account or group membership must have the following permissions to add a Call Activity element to the Process model unless your user account has the **Make this user a Super Admin** setting selected:

* Processes: View Processes
* Processes: Edit Processes

See the [Process](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to add a Call Activity element to the Process model:

1. [View your Processes](https://processmaker.gitbook.io/processmaker-4-community/-LPblkrcFWowWJ6HZdhC/~/drafts/-LRhVZm0ddxDcGGdN5ZN/primary/designing-processes/viewing-processes/view-the-list-of-processes/view-your-processes#view-all-processes). The **Processes** page displays.
2. [Create a new Process](../../viewing-processes/view-the-list-of-processes/create-a-process.md) or click the **Open Modeler** icon![](../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)to edit the selected Process model. Process Modeler displays.
3. Locate the **Call Activity** element in the panel to the left of the Process Modeler canvas.  

   ![](../../../.gitbook/assets/call-activity-bpmn-side-bar-process-modeler-processes.png)

4. Drag the element into the Process model canvas where you want to place it. If a Pool element is in your Process model, the Call Activity element cannot be placed outside of the Pool element.

![Event-Based Gateway element](../../../.gitbook/assets/event-based-gateway-in-process-modeler-processes.png)

After the element is placed into the Process model, you may move it by dragging it to the new location.

{% hint style="warning" %}
Moving a Call Activity element has the following limitations in regards to the following Process model elements:

* **Pool element:** If the Call Activity element is inside of a [Pool](process-modeling-element-descriptions.md#pool) element, it cannot be moved outside of the Pool element. If you attempt to do so, Process Modeler places the Call Activity element inside the Pool element closest to where you attempted to move it.
* **Lane element:** If the Call Activity element is inside of a Lane element, it can be moved to another Lane element in the same Pool element. However, the Call Activity element cannot be moved outside of the Pool element.
{% endhint %}

## Configure a Call Activity Element

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to configure a Call Activity element unless your user account has the **Make this user a Super Admin** setting selected:

* Processes: View Processes
* Processes: Edit Processes

See the [Process](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

### Edit the Identifier Value

Process Modeler automatically assigns a unique value to each Process element added to a Process model. However, an element's identifier value can be changed if it is unique to all other elements in the Process model, including the Process model's identifier value.

{% hint style="warning" %}
All identifier values for all elements in the Process model must be unique.
{% endhint %}

Follow these steps to edit the identifier value for a Call Activity element:

1. Select the Call Activity element from the Process model in which to edit its identifier value. The **Configuration** setting section displays.
2. Expand the **Configuration** setting section if it is not presently expanded. The **Identifier** field displays. This is a required field.  

   ![](../../../.gitbook/assets/identifier-call-activity-process-modeler-processes.png)

3. In the **Identifier** field, edit the Call Activity element's identifier to a unique value from all elements in the Process model and then press **Enter**. The element's identifier value is changed.

### Edit the Element Name

An element name is a human-readable reference for a Process element. Process Modeler automatically assigns the name of a Process element with its element type. However, an element's name can be changed.

Follow these steps to edit the name for a Call Activity element:

1. Select the Call Activity element from the Process model in which to edit its name. The **Configuration** setting section displays.
2. Expand the **Configuration** setting section if it is not presently expanded. The **Name** field displays.  

   ![](../../../.gitbook/assets/call-activity-configuration-name-process-modeler-processes%20%281%29.png)

3. In the **Name** field, edit the selected element's name and then press **Enter**. The element's name is changed.

### Select the Called Process

The Call Activity element calls an external Process when it triggers. The external Process is referred to as a "child" Process, while the calling Process is referred to as the "parent" Process. The child Process must in the same ProcessMaker instance as the parent Process and not [archived](../../viewing-processes/view-the-list-of-processes/remove-a-process.md).

Follow these steps to select the child Process the Call Activity element calls when it triggers:

1. Select the Call Activity element from the Process model in which to select the called child Process. The **Configuration** setting section displays.
2. Expand the **Configuration** setting section if it is not presently expanded. The **Process** drop-down menu displays.  

   ![](../../../.gitbook/assets/call-activity-configuration-process-modeler-processes.png)

3. From the **Process** drop-down menu, select which Process the Call Activity element calls when it triggers.

## Related Topics

{% page-ref page="process-modeling-element-descriptions.md" %}

{% page-ref page="../../viewing-processes/view-the-list-of-processes/view-your-processes.md" %}

{% page-ref page="../../viewing-processes/view-the-list-of-processes/create-a-process.md" %}

{% page-ref page="../remove-process-model-elements.md" %}

