---
description: >-
  Indicate messaging in your Process model by setting Message Flows elements
  between elements in separate Pool elements.
---

# Set Message Flow Elements to Indicate Messaging

## Overview

In a Process model, Message Flow elements represent communication between an element in one Pool element with another element in a separate Pool element. Message Flow elements are not to be confused with [Sequence Flow](process-modeling-element-descriptions.md#sequence-flow) elements.

In Process Modeler, Flow indicators display when you click an element in the Process model. The dotted-line Flow indicator is for Message Flows \(highlighted below\).

![Message Flow indicator \(highlighted\) on a selected Process model element](../../../.gitbook/assets/message-flow-indicator-process-model-processes.png)

### Types of Messaging

The Message Flow element indicates the following types of messaging:

* **Symbolic communication:** The Message Flow element does not indicate whether the communication is physical or digital. Use a [Text Annotation](process-modeling-element-descriptions.md#text-annotation) element to add information about the communication. Message Flow elements cannot connect to Process model elements within the same Pool element.

![A Message Flow element \(dotted line\) between two elements in different Pool elements](../../../.gitbook/assets/message-flow-between-pool-elements-process-model-processes.png)

* **External API call:** An [Intermediate Message Catch Event](process-modeling-element-descriptions.md#intermediate-message-catch-event) element receives an external API call. The Intermediate Message Catch Event element must be in a different Pool element than the source of the Message Flow element.

![External API call to an Intermediate Message Catch Event element using a Message Flow element](../../../.gitbook/assets/message-flow-connecting-to-intermediate-message-catch-event.png)

### Incoming and Outgoing Message Flow

From the context of a Process model element associated with a Message Flow element, that Message Flow element can be "incoming" or "outgoing." Consider the following Process model example to demonstrate their differences.

![Message Flow element is outgoing for Task 1, but incoming for Task 2](../../../.gitbook/assets/message-flow-between-pool-elements-process-model-processes.png)

Below are the differences between incoming and outgoing Message Flow elements:

* **Incoming:** An incoming Message Flow element comes from its connecting element. In the Process model example above, the Message Flow element is incoming to the "Task 2" element.
* **Outgoing:** An outgoing Message Flow element goes to the connecting element. In the Process model example above, the Message Flow element is outgoing from the "Task 1" element. The outgoing Message Flow element must originate from a separate Pool element than from where it connects.

### Restrictions on Message Flow Elements

The following element types do not use Message Flow elements:

* ​[Start Timer Event](process-modeling-element-descriptions.md#start-timer-event)
* [Intermediate Timer Event](process-modeling-element-descriptions.md#intermediate-timer-event)
* [End Event](process-modeling-element-descriptions.md#end-event)
* [Script Task](process-modeling-element-descriptions.md#script-task)
* [Manual Task](process-modeling-element-descriptions.md#manual-task)
* [Call Activity](process-modeling-element-descriptions.md#call-activity)
* [Exclusive Gateway](process-modeling-element-descriptions.md#exclusive-gateway)
* [Inclusive Gateway](process-modeling-element-descriptions.md#inclusive-gateway)
* [Parallel Gateway](process-modeling-element-descriptions.md#parallel-gateway)
* [Event-Based Gateway](process-modeling-element-descriptions.md#event-based-gateway)
* [Text Annotation](process-modeling-element-descriptions.md#text-annotation)
* [Association](process-modeling-element-descriptions.md#association)

## Set the Message Flow Element Between Elements in Separate Pool Elements

{% hint style="info" %}
### Looking for Information about Sequence Flow Elements?

See [Set and Delete Sequence Flow Between Elements](the-quick-toolbar.md).

### Permissions Required

Your ProcessMaker user account or group membership must have the following permissions to set Message Flow elements in the Process model unless your user account has the **Make this user a Super Admin** setting selected:

* Processes: View Processes
* Processes: Edit Processes

See the [Process](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to set the Message Flow element between elements in separate Pool elements:

1. ​[View your Processes](../../viewing-processes/view-the-list-of-processes/view-your-processes.md#view-all-processes). The **Processes** page displays.
2. Click the **Open Modeler** icon![](../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)to edit the selected Process model. Process Modeler displays. Ensure that the Process model has at least two \(2\) Pool elements from which to establish Message Flow between them.
3. From one Pool element, select the Process model element from which you want to establish communication via the Message Flow element. Available options display to the right of the selected element. Process model element types that do not support the Message Flow element do not have the Message Flow indicator as highlighted below.  

   ![](../../../.gitbook/assets/message-flow-indicator-process-model-processes.png)

4. Click the **Message Flow** icon![](../../../.gitbook/assets/message-flow-icon-process-modeler-processes.png).
5. Do one of the following:
   * Click the second Pool element to which to establish communication between the two elements. Message flow indicates that communication is between an element in one Pool element to another Pool element.  

     ![](../../../.gitbook/assets/message-flow-to-pool-element-process-modeler-processes.png)

   * Click an element inside the second Pool element to which to establish communication between the two elements. Message flow indicates that communication is between two elements in separate Pool elements.  

     ![](../../../.gitbook/assets/message-flow-between-pool-elements-process-model-processes.png)

## Settings

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to configure a Message Flow element unless your user account has the **Make this user a Super Admin** setting selected:

* Processes: View Processes
* Processes: Edit Processes

See the [Process](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

The Message Flow element has the following panels that contain settings:

* **Configuration** panel
  * Edit the element name
* **Advanced** panel
  * Edit the element's identifier value

### Edit the Element's Identifier Value

Process Modeler automatically assigns a unique value to each Process element added to a Process model. However, an element's identifier value can be changed if it is unique to all other elements in the Process model, including the Process model's identifier value.

{% hint style="warning" %}
All identifier values for all elements in the Process model must be unique.
{% endhint %}

Follow these steps to edit the identifier value for a Message Flow element:

1. Select the Message Flow element from the Process model in which to edit its identifier value. The **Configuration** setting section displays.
2. Expand the **Configuration** setting section if it is not presently expanded. The **Identifier** field displays. This is a required field.  

   ![](../../../.gitbook/assets/message-flow-configuration-identifier-name-process-modeler-processes.png)

3. In the **Identifier** field, edit the Message Flow element's identifier to a unique value from all elements in the Process model and then press **Enter**. The element's identifier value is changed.

### Edit the Element Name

An element name is a human-readable reference for a Process element. Process Modeler automatically assigns the name of a Process element with its element type. However, an element's name can be changed.

Follow these steps to edit the name for a Message Flow element:

1. Select the Message Flow element from the Process model in which to edit its name. The **Configuration** setting section displays.
2. Expand the **Configuration** setting section if it is not presently expanded. The **Name** field displays.  

   ![](../../../.gitbook/assets/message-flow-configuration-name-process-modeler-processes.png)

3. In the **Name** field, edit the selected element's name and then press **Enter**. The element's name is changed.

## Related Topics

{% page-ref page="process-modeling-element-descriptions.md" %}

{% page-ref page="../../viewing-processes/view-the-list-of-processes/view-your-processes.md" %}

{% page-ref page="../../viewing-processes/view-the-list-of-processes/create-a-process.md" %}

{% page-ref page="the-quick-toolbar.md" %}

{% page-ref page="../remove-process-model-elements.md" %}

