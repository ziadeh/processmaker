---
description: Add and configure Message End Event elements in your Process model.
---

# Add and Configure Message End Event Elements

## Add a Message End Event Element

{% hint style="info" %}
### Don't Know What a Message End Event Is?

See [Process Modeling Element Descriptions](process-modeling-element-descriptions.md) for a description of the [Message End Event](process-modeling-element-descriptions.md#message-end-event) element.

### Permissions Required

Your ProcessMaker user account or group membership must have the following permissions to add an End Event element to the Process model unless your user account has the **Make this user a Super Admin** setting selected:

* Processes: View Processes
* Processes: Edit Processes

See the [Process](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to add a Message End Event element to the Process model:

1. [View your Processes](../../viewing-processes/view-the-list-of-processes/view-your-processes.md#view-all-active-processes). The **Processes** page displays.
2. [Create a new Process](../../viewing-processes/view-the-list-of-processes/create-a-process.md) or click the **Open Modeler** icon![](../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)to edit the selected Process model. Process Modeler displays.
3. Locate the **End Event** control in the **Controls** palette that is to the left of the Process Modeler canvas. If the [**Hide Menus** button](../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view)![](../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is enabled, the **Controls** palette displays the **End Event** control's icon![](../../../.gitbook/assets/end-event-icon-process-modeler-processes.png).

   ![](../../../.gitbook/assets/end-event-control-process-modeler-processes.png)

4. Drag the control into the Process model canvas where you want to place it. If a Pool element is in your Process model, the Message End Event element cannot be placed outside of the Pool element.
5. From the **Elements** drop-down menu, select the **Message End Event** option. The Message End Event element displays.  ![](../../../.gitbook/assets/message-end-event-selection-process-modeler-processes.png) 

![Message End Event element](../../../.gitbook/assets/message-end-event-process-modeler-processes.png)

After the element is placed into the Process model, you may move it by dragging it to the new location.

{% hint style="warning" %}
Moving a Message End Event element has the following limitations in regards to the following Process model elements:

* **Pool element:** If the Message End Event element is inside of a [Pool](process-modeling-element-descriptions.md#pool) element, it cannot be moved outside of the Pool element. If you attempt to do so, Process Modeler places the Message End Event element inside the Pool element closest to where you attempted to move it.
* **Lane element:** If the Message End Event element is inside of a Lane element, it can be moved to another Lane element in the same Pool element. However, the Message End Event element cannot be moved outside of the Pool element.
{% endhint %}

## Settings

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to configure a Message End Event element unless your user account has the **Make this user a Super Admin** setting selected:

* Processes: View Processes
* Processes: Edit Processes

See the [Process](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

The Message End Event element has the following panels that contain settings:

* **Configuration** panel
  * [Edit the element name](add-and-configure-message-end-event-elements.md#edit-the-element-name)
  * [Edit the message name](add-and-configure-message-end-event-elements.md#edit-the-message-name)
* **Advanced** panel
  * [Edit the element's identifier value](add-and-configure-message-end-event-elements.md#edit-the-elements-identifier-value)

### Configuration Panel Settings

#### Edit the Element Name

An element name is a human-readable reference for a Process element. Process Modeler automatically assigns the name of a Process element with its element type. However, an element's name can be changed.

Follow these steps to edit the name for a Message End Event element:

1. Ensure that the **Hide Menus** button![](../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is not enabled. See [Maximize the Process Modeler Canvas View](../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view).
2. Select the Message End Event element from the Process model in which to edit its name. Panels to configure this element display.
3. Expand the **Configuration** panel if it is not presently expanded. The **Name** setting displays. ![](../../../.gitbook/assets/message-end-event-configuration-name-process-modeler-processes.png) 
4. In the **Name** setting, edit the selected element's name and then press **Enter**.

#### Edit the Message Name

The Message End Event element uses a message name as a placeholder for the Request data that this element sends to a catching element. When a [Message Start Event](process-modeling-element-descriptions.md#message-start-event) element or an [Intermediate Message Catch Event](process-modeling-element-descriptions.md#intermediate-message-catch-event) element listens for a message, it references the Message End Event element's message name.

Follow these steps to configure how to trigger a Message End Event element:

1. Ensure that the **Hide Menus** button![](../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is not enabled. See [Maximize the Process Modeler Canvas View](../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view).
2. Select the Message End Event element from the Process model in which to configure its message name. Panels to configure this element display.
3. Expand the **Configuration** panel if it is not presently expanded, and then locate the **Message Name** setting. ![](../../../.gitbook/assets/message-end-event-configuration-message-name-process-modeler-processes.png) 
4. In the **Message Name** setting, edit the message name that a catching element references to listen for the Message End Event's message.

### Advanced Panel Settings

#### Edit the Element's Identifier Value

Process Modeler automatically assigns a unique value to each Process element added to a Process model. However, an element's identifier value can be changed if it is unique to all other elements in the Process model, including the Process model's identifier value.

{% hint style="warning" %}
All identifier values for all elements in the Process model must be unique.
{% endhint %}

Follow these steps to edit the identifier value for a Message End Event element:

1. Ensure that the **Hide Menus** button![](../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is not enabled. See [Maximize the Process Modeler Canvas View](../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view).
2. Select the Message End Event element from the Process model in which to edit its identifier value. Panels to configure this element display.
3. Expand the **Advanced** panel if it is not presently expanded. The **Node Identifier** setting displays. This is a required setting. ![](../../../.gitbook/assets/message-end-event-configuration-identifier-process-modeler-processes.png) 
4. In the **Node Identifier** setting, edit the Message End Event element's identifier to a unique value from all elements in the Process model and then press **Enter**.

## Related Topics

{% page-ref page="process-modeling-element-descriptions.md" %}

{% page-ref page="../../viewing-processes/view-the-list-of-processes/view-your-processes.md" %}

{% page-ref page="../../viewing-processes/view-the-list-of-processes/create-a-process.md" %}

{% page-ref page="../remove-process-model-elements.md" %}

