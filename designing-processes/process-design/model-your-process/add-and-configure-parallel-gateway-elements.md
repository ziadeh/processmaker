---
description: Add and configure Parallel Gateway elements in your Process model.
---

# Add and Configure Parallel Gateway Elements

## Add a Parallel Gateway Element

{% hint style="info" %}
### Don't Know What a Parallel Gateway Element Is?

See [Process Modeling Element Descriptions](process-modeling-element-descriptions.md) for a description of the [Parallel Gateway](process-modeling-element-descriptions.md#parallel-gateway) element.

### Permissions Required

Your ProcessMaker user account or group membership must have the following permissions to add a Parallel Gateway element to the Process model unless your user account has the **Make this user a Super Admin** setting selected:

* Processes: View Processes
* Processes: Edit Processes

See the [Process](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to add a Parallel Gateway element to the Process model:

1. [View your Processes](https://processmaker.gitbook.io/processmaker-4-community/-LPblkrcFWowWJ6HZdhC/~/drafts/-LRhVZm0ddxDcGGdN5ZN/primary/designing-processes/viewing-processes/view-the-list-of-processes/view-your-processes#view-all-processes). The **Processes** page displays.
2. [Create a new Process](../../viewing-processes/view-the-list-of-processes/create-a-process.md) or click the **Open Modeler** icon![](../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)to edit the selected Process model. Process Modeler displays.
3. Locate the **Parallel Gateway** element in the panel to the left of the Process Modeler canvas.  

   ![](../../../.gitbook/assets/parallel-gateway-bpmn-panel-process-modeler-processes.png)

4. Drag the element into the Process model canvas where you want to place it. If a Pool element is in your Process model, the Parallel Gateway element cannot be placed outside of the Pool element.

![Parallel Gateway element](../../../.gitbook/assets/parallel-gateway-process-modeler-processes.png)

After the element is placed into the Process model, you may move it by dragging it to the new location.

{% hint style="warning" %}
Moving a Parallel Gateway element has the following limitations in regards to the following Process model elements:

* **Pool element:** If the Parallel Gateway element is inside of a [Pool](process-modeling-element-descriptions.md#pool) element, it cannot be moved outside of the Pool element. If you attempt to do so, Process Modeler places the Parallel Gateway element inside the Pool element closest to where you attempted to move it.
* **Lane element:** If the Parallel Gateway element is inside of a Lane element, it can be moved to another Lane element in the same Pool element. However, the Parallel Gateway element cannot be moved outside of the Pool element.
{% endhint %}

## Settings

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to configure a Parallel Gateway element unless your user account has the **Make this user a Super Admin** setting selected:

* Processes: View Processes
* Processes: Edit Processes

See the [Process](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

The Parallel Gateway element has the following panels that contain settings:

* **Configuration** panel
  * Edit the element name
* **Advanced** panel
  * Edit the element's identifier value

### Edit the Element's Identifier Value

Process Modeler automatically assigns a unique value to each Process element added to a Process model. However, an element's identifier value can be changed if it is unique to all other elements in the Process model, including the Process model's identifier value.

{% hint style="warning" %}
All identifier values for all elements in the Process model must be unique.
{% endhint %}

Follow these steps to edit the identifier value for a Parallel Gateway element:

1. Select the Parallel Gateway element from the Process model in which to edit its identifier value. The **Configuration** setting section.
2. Expand the **Configuration** setting section if it is not presently expanded. The **Identifier** field displays. This is a required field.  

   ![](../../../.gitbook/assets/parallel-gateway-configuration-identifier-name-direction-process-modeler-processes.png)

3. In the **Identifier** field, edit the Parallel Gateway element's identifier to a unique value from all elements in the Process model and then press **Enter**. The element's identifier value is changed.

### Edit the Element Name

An element name is a human-readable reference for a Process element. Process Modeler automatically assigns the name of a Process element with its element type. However, an element's name can be changed.

Follow these steps to edit the name for a Parallel Gateway element:

1. Select the Parallel Gateway element from the Process model in which to edit its name. The **Configuration** setting section.
2. Expand the **Configuration** setting section if it is not presently expanded. The **Name** field displays.  

   ![](../../../.gitbook/assets/parallel-gateway-configuration-name-process-modeler-processes.png)

3. In the **Name** field, edit the selected element's name and then press **Enter**. The element's name is changed.

### Indicate Workflow Direction

Indicate if the workflow direction for the Parallel Gateway is converging or diverging:

* **Converging:** Converging workflow represents two or more incoming [Sequence Flow](process-modeling-element-descriptions.md#sequence-flow) elements to the Parallel Gateway element. All incoming Sequence Flow elements converging to the Parallel Gateway element must trigger before the Parallel Gateway element triggers, thereby synchronizing a [Request's](../../../using-processmaker/requests/what-is-a-request.md) workflow. Use this coordinate workflow.

  ![](../../../.gitbook/assets/parallel-gateway-converging.png)

* **Diverging:** Diverging workflow represents two or more outgoing Sequence Flow elements from the Parallel Gateway element. When a Parallel Gateway triggers, all outgoing Sequence Flow elements from the gateway element trigger simultaneously without exception. Conditions cannot be placed on any outgoing Sequence Flow elements from the Parallel Gateway element. Use this when multiple workflow routes must occur simultaneously.

  ![](../../../.gitbook/assets/parallel-gateway-diverging.png)

One Parallel Gateway element can only converge or diverge parallel workflow, but not both. Use two Parallel Gateway elements to synchronize both converging and diverging parallel workflow.

![Use two Parallel Gateway elements for both converging and diverging parallel workflow](../../../.gitbook/assets/parallel-gateway-converging-and-diverging.png)

Follow these steps to indicate the workflow direction for a Parallel Gateway element:

1. Select the Parallel Gateway element from the Process model in which to indicate the workflow direction. The **Configuration** setting section.
2. Expand the **Configuration** setting section if it is not presently expanded. The **Direction** drop-down menu displays.  

   ![](../../../.gitbook/assets/parallel-gateway-configuration-direction-process-modeler-processes.png)

3. From the **Direction** drop-down menu, select from one of the following options:
   * **Diverging:** Select the **Diverging** option to indicate that the workflow direction is for outgoing Sequence Flow elements. When this option is selected, all outgoing Sequence Flow elements from the Parallel Gateway element trigger simultaneously without exception.
   * **Converging:** Select the **Converging** option to indicate the workflow direction is for incoming Sequence Flow elements. The first incoming Sequence Flow element to the Parallel Gateway element that triggers causes the Parallel Gateway element to trigger.

## Related Topics

{% page-ref page="process-modeling-element-descriptions.md" %}

{% page-ref page="../../viewing-processes/view-the-list-of-processes/view-your-processes.md" %}

{% page-ref page="../../viewing-processes/view-the-list-of-processes/create-a-process.md" %}

{% page-ref page="../remove-process-model-elements.md" %}

