---
description: Add and configure Event-Based Gateway elements in your Process model.
---

# Add and Configure Event-Based Gateway Elements

## Add an Event-Based Gateway Element

{% hint style="info" %}
### Don't Know What an Event-Based Gateway Element Is?

See [Process Modeling Element Descriptions](process-modeling-element-descriptions.md) for a description of the [Event-Based Gateway](process-modeling-element-descriptions.md#event-based-gateway) element.

### Permissions Required

Your ProcessMaker user account or group membership must have the following permissions to add an Event-Based Gateway element to the Process model unless your user account has the **Make this user a Super Admin** setting selected:

* Processes: View Processes
* Processes: Edit Processes

See the [Process](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to add an Event-Based Gateway element to the Process model:

1. [View your Processes](../../viewing-processes/view-the-list-of-processes/view-your-processes.md#view-all-active-processes). The **Processes** page displays.
2. [Create a new Process](../../viewing-processes/view-the-list-of-processes/create-a-process.md) or click the **Open Modeler** icon![](../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)to edit the selected Process model. Process Modeler displays.
3. Locate the **Gateway** control in the **Controls** palette that is to the left of the Process Modeler canvas. If the [**Hide Menus** button](../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view)![](../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is enabled, the **Controls** palette displays the **Gateway** control's icon![](../../../.gitbook/assets/gateway-icon-process-modeler-processes.png). ![](../../../.gitbook/assets/gateway-control-process-modeler-processes.png) 
4. Drag the control into the Process model canvas where you want to place it. If a Pool element is in your Process model, the Event-Based Gateway element cannot be placed outside of the Pool element.
5. From the **Elements** drop-down menu, select the **Event Based Gateway** option. The Event-Based Gateway element displays. ![](../../../.gitbook/assets/event-based-gateway-selection-process-modeler-processes.png) 

![Event-Based Gateway element](../../../.gitbook/assets/event-based-gateway-in-process-modeler-processes.png)

After the element is placed into the Process model, you may move it by dragging it to the new location.

{% hint style="warning" %}
Moving an Event-Based Gateway element has the following limitations in regards to the following Process model elements:

* **Pool element:** If the Event-Based Gateway element is inside of a [Pool](process-modeling-element-descriptions.md#pool) element, it cannot be moved outside of the Pool element. If you attempt to do so, Process Modeler places the Event-Based Gateway element inside the Pool element closest to where you attempted to move it.
* **Lane element:** If the Event-Based Gateway element is inside of a Lane element, it can be moved to another Lane element in the same Pool element. However, the Event-Based Gateway element cannot be moved outside of the Pool element.
{% endhint %}

## Settings

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to configure an Event-Based Gateway element unless your user account has the **Make this user a Super Admin** setting selected:

* Processes: View Processes
* Processes: Edit Processes

See the [Process](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

The Event-Based Gateway element has the following panels that contain settings:

* **Configuration** panel
  * [Edit the element name](add-and-configure-event-based-gateway-elements.md#edit-the-element-name)
* **Advanced** panel
  * [Edit the element's identifier value](add-and-configure-event-based-gateway-elements.md#edit-the-elements-identifier-value)

### Configuration Panel Settings

#### Edit the Element Name

An element name is a human-readable reference for a Process element. Process Modeler automatically assigns the name of a Process element with its element type. However, an element's name can be changed.

Follow these steps to edit the name for an Event-Based Gateway element:

1. Ensure that the **Hide Menus** button![](../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is not enabled. See [Maximize the Process Modeler Canvas View](../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view).
2. Select the Event-Based Gateway element from the Process model in which to edit its name. Panels to configure this element display.
3. Expand the **Configuration** panel if it is not presently expanded. The **Name** setting displays. ![](../../../.gitbook/assets/event-based-gateway-configuration-name-process-modeler-processes.png)
4. In the **Name** setting, edit the selected element's name and then press **Enter**.

### Advanced Panel Settings

#### Edit the Element's Identifier Value

Process Modeler automatically assigns a unique value to each Process element added to a Process model. However, an element's identifier value can be changed if it is unique to all other elements in the Process model, including the Process model's identifier value.

{% hint style="warning" %}
All identifier values for all elements in the Process model must be unique.
{% endhint %}

Follow these steps to edit the identifier value for an Event-Based Gateway element:

1. Ensure that the **Hide Menus** button![](../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is not enabled. See [Maximize the Process Modeler Canvas View](../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view).
2. Select the Event-Based Gateway element from the Process model in which to edit its identifier value. Panels to configure this element display.
3. Expand the **Advanced** panel if it is not presently expanded. The **Node Identifier** setting displays. This is a required field. ![](../../../.gitbook/assets/identifier-event-based-gateway-process-modeler-processes.png)
4. In the **Node Identifier** setting, edit the Event-Based Gateway element's identifier to a unique value from all elements in the Process model and then press **Enter**.

## Related Topics

{% page-ref page="process-modeling-element-descriptions.md" %}

{% page-ref page="../../viewing-processes/view-the-list-of-processes/view-your-processes.md" %}

{% page-ref page="../../viewing-processes/view-the-list-of-processes/create-a-process.md" %}

{% page-ref page="../remove-process-model-elements.md" %}

