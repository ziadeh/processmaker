---
description: These are brief descriptions about commonly used Process modeling elements.
---

# Process Modeling Element Descriptions

## Overview

The following are brief descriptions about each Process modeling element that ProcessMaker Spark provides. See the [BPMN 2.0 specification](https://www.omg.org/spec/BPMN/2.0/About-BPMN/) for more information.

## Events

Use event-type elements to represent an event, milestone, or delay in the Process. ProcessMaker Spark provides the following event type Process model elements:

* [Start Event](process-modeling-element-descriptions.md#start-event)
* [Start Timer Event](process-modeling-element-descriptions.md#start-timer-event)
* [Intermediate Timer Event](process-modeling-element-descriptions.md#intermediate-timer-event)
* [Intermediate Message Catch Event](process-modeling-element-descriptions.md#intermediate-message-catch-event)
* [End Event](process-modeling-element-descriptions.md#end-event)

### Start Event

A Start Event element represents the start of a Process. Therefore, a Start Event element cannot have an incoming [Sequence Flow](process-modeling-element-descriptions.md#sequence-flow). A Process model can have multiple Start Event elements.

Use a Start Event element to represent how a [Request](../../../using-processmaker/requests/what-is-a-request.md) for that Process starts. The Request can be started from an API request to a Webhook URL or by a specified ProcessMaker [user](../../../processmaker-administration/add-users/what-is-a-user.md) or [group](../../../processmaker-administration/assign-groups-to-users/what-is-a-group.md).

In Process Modeler, the Start Event element is labeled as "Start Event" in the **BPMN** panel as highlighted below.

![Start Event element in the BPMN panel of Process Modeler](../../../.gitbook/assets/bpmn-panel-start-event-process-modeler-processes.png)

Below is a Start Event element when it has been placed into a Process model.

![Start Event element](../../../.gitbook/assets/start-event-element-process-modeler-processes.png)

{% hint style="info" %}
See [Add and Configure Event Elements](add-and-configure-an-event-element.md#add-a-start-event-element).
{% endhint %}

### Start Timer Event

A Start Timer Event element represents a time or periodic interval when a modeled Process starts. A Start Timer Event element begins the workflow of a Request for that Process. Therefore, a Start Timer Event element cannot have an incoming [Sequence Flow](process-modeling-element-descriptions.md#sequence-flow) element. A Process model can have multiple Start Timer Event elements.

In Process Modeler, the Start Timer Event element is labeled as "Start Timer Event" in the **BPMN** panel as highlighted below.

![Start Timer Event element in the BPMN panel of Process Modeler](../../../.gitbook/assets/start-timer-event-bpmn-panel-process-modeler-processes.png)

Below is a Start Timer Event element when it has been placed into a Process model.

![Start Timer Event element](../../../.gitbook/assets/start-timer-event-element-process-modeler-processes.png)

{% hint style="info" %}
See [Add and Configure Start Timer Event Elements](add-and-configure-start-timer-event-elements.md).
{% endhint %}

### Intermediate Timer Event

An Intermediate Timer Event element represents a delay in a [Request's](../../../using-processmaker/requests/what-is-a-request.md) workflow for a Process either at a specific time or at a periodic interval. When the specified time or interval occurs, the Intermediate Timer Event element triggers, thereby resuming workflow for that Process's Request.

In Process Modeler, the Intermediate Timer Event element is labeled as "Intermediate Timer Event" in the **BPMN** panel as highlighted below.

![Intermediate Timer Event element in the BPMN panel of Process Modeler](../../../.gitbook/assets/intermediate-timer-event-bpmn-panel-process-modeler-processes.png)

Below is an Intermediate Timer Event element when it has been placed into a Process model.

![Intermediate Timer Event element](../../../.gitbook/assets/intermediate-timer-event-element-process-modeler-processes.png)

{% hint style="info" %}
See [Add and Configure Intermediate Timer Event Elements](add-and-configure-intermediate-timer-event-elements.md).
{% endhint %}

### Intermediate Message Catch Event

An Intermediate Message Catch Event element represents a delay in a [Request's](../../../using-processmaker/requests/what-is-a-request.md) workflow for a Process until that element receives an external API call. This external API call can be represented as an incoming [Message Flow](process-modeling-element-descriptions.md#message-flow) element from another Pool element.

The Intermediate Message Catch Event element can receive the external API call that uses the authorization credentials from any of the following:

* A specified ProcessMaker user
* Any member of a specified ProcessMaker group
* A whitelisted \(allowed\) IP address or domain

When the Intermediate Catch Event element receives the API call the element triggers, thereby resuming workflow for that Process's Request.

In Process Modeler, the Intermediate Message Catch Event element is labeled as "Intermediate Message Catch Event" in the **BPMN** panel as highlighted below.

![Intermediate  Message Catch Event element in the BPMN panel of Process Modeler](../../../.gitbook/assets/bpmn-intermediate-message-catch-event-process-modeler-processes.png)

Below is an Intermediate Message Catch Event element when it has been placed into a Process model.

![Intermediate Message Catch Event element](../../../.gitbook/assets/inetermediate-message-catch-event-process-modeler-processes.png)

{% hint style="info" %}
See [Add and Configure Intermediate Timer Event Elements](add-and-configure-intermediate-timer-event-elements.md).
{% endhint %}

### End Event

An End Event element represents where a modeled Process normally ends when abnormal events do not terminate a [Request](../../../using-processmaker/requests/) for a Process \(such as a [canceled Request](../../../using-processmaker/requests/delete-a-request.md)\). An End Event element terminates the workflow of a Request for that Process. Therefore, an End Event element cannot have an outgoing [Sequence Flow](process-modeling-element-descriptions.md#sequence-flow) element, though it may have an outgoing [Message Flow](process-modeling-element-descriptions.md#message-flow) element. A Process model can have multiple End Event elements.

In Process Modeler, the End Event element is labeled as "End Event" in the **BPMN** panel as highlighted below.

![End Event element in the BPMN panel of Process Modeler](../../../.gitbook/assets/bpmn-panel-end-event-process-modeler-processes.png)

Below is an End Event element when it has been placed into a Process model.

![End Event element](../../../.gitbook/assets/end-event-element-process-modeler-processes.png)

{% hint style="info" %}
See [Add and Configure Event Elements](add-and-configure-an-event-element.md#add-an-end-event-element).
{% endhint %}

## Tasks

A Task represents an activity to be performed either by a [Request](../../../using-processmaker/requests/what-is-a-request.md) participant or a [ProcessMaker Script](../../scripts/). ProcessMaker Spark provides the following Task type Process model elements:

* [Task](process-modeling-element-descriptions.md#task)
* [Script Task](process-modeling-element-descriptions.md#script-task)

### Task

A Task element represents an activity to be performed by a person participating in a [Request](../../../using-processmaker/requests/what-is-a-request.md). The Request participant assigned that Task might be determined by the conditions in a Request's workflow.

People perform Task activities through ProcessMaker Screens as digital [forms](../../design-forms/screens-builder/types-for-screens.md#forms) and [displays](../../design-forms/screens-builder/types-for-screens.md#display). ProcessMaker Screens are designed in [Screens Builder](../../design-forms/screens-builder/).

In Process Modeler, the Task element is labeled as "Task" in the **BPMN** panel as highlighted below.

![Task element in the BPMN panel of Process Modeler](../../../.gitbook/assets/bpmn-panel-task-process-modeler-processes.png)

Below is a Task element when it has been placed into a Process model.

![Task element](../../../.gitbook/assets/task-element-process-modeler-processes.png)

{% hint style="info" %}
See [Add and Configure Task Elements](add-and-configure-task-elements.md).
{% endhint %}

### Script Task

A Script Task element represents an activity to be performed by a ProcessMaker Script.

ProcessMaker Scripts are designed in [Scripts Editor](../../scripts/scripts-editor.md). ProcessMaker Scripts are independent of modeled processes: any ProcessMaker Script can be reused in any modeled process in your organization. This architecture allows Process Owners to focus on process modeling in a no-code environment while ProcessMaker Developers develop reusable ProcessMaker Scripts. ProcessMaker Scripts can leverage Request-level variable data as well as variable data designed in ProcessMaker Screens from [Screens Builder](../../design-forms/screens-builder/).

In Process Modeler, the Script Task element is labeled as "Script Task" in the **BPMN** panel as highlighted below.

![Script Task element in the BPMN panel of Process Modeler](../../../.gitbook/assets/bpmn-panel-script-task-process-modeler-processes.png)

Below is a Script Task element when it has been placed into a Process model.

![Script Task element](../../../.gitbook/assets/script-task-element-process-modeler-processes.png)

{% hint style="info" %}
See [Add and Configure Script Task Elements](add-and-configure-script-task-elements.md).
{% endhint %}

## Call Activity

A Call Activity element represents a call to an external sub-Process. This is not to be confused when an embedded sub-Process is depicted in the Process model. Use the Call Activity element to call a reusable external Process from another Process.

The external sub-Process that the Call Activity calls must be a ProcessMaker Spark Process that is not archived.

The called sub-Process has its own [Request](../../../using-processmaker/requests/what-is-a-request.md). The Request for the calling Process waits until the sub-Process's Request completes. When the external sub-Process's Request completes, workflow returns to the calling Process's Call Activity element and then continues.

In Process Modeler, the Call Activity element is labeled as "Call Activity" in the **BPMN** panel as highlighted below.

![Call Activity element in the BPMN panel of Process Modeler](../../../.gitbook/assets/bpmn-call-activity-process-modeler-processes.png)

Below is a Call Activity element when it has been placed into a Process model.

![Call Activity element](../../../.gitbook/assets/call-activity-process-modeler-processes.png)

{% hint style="info" %}
See [Add and Configure Call Activity Elements](add-and-configure-call-activity-elements.md).
{% endhint %}

## Gateways

Gateway elements route Request workflow in the following ways:

* Limit workflow based on conditions or events, such as the [Exclusive Gateway](process-modeling-element-descriptions.md#exclusive-gateway) and [Event-Based Gateway](process-modeling-element-descriptions.md#event-based-gateway) elements do, respectively.
* Synchronize or continue parallel workflows, as the [Parallel Gateway](process-modeling-element-descriptions.md#parallel-gateway) element does.

### Exclusive Gateway

An Exclusive Gateway element represents a decision that creates alternative paths within a [Request's](../../../using-processmaker/requests/) workflow for a Process. During a Request's workflow routing, only one outgoing [Sequence Flow](process-modeling-element-descriptions.md#sequence-flow) element from the Exclusive Gateway element is followed based on a valid condition that is met in that Request.

In Process Modeler, the Exclusive Gateway element is labeled as "Exclusive Gateway" in the **BPMN** panel as highlighted below.

![Exclusive Gateway element in the BPMN panel of Process Modeler](../../../.gitbook/assets/bpmn-panel-exclusive-gateway-process-modeler-processes.png)

Below is an Exclusive Gateway element when it has been placed into a Process model.

![Exclusive Gateway element](../../../.gitbook/assets/exclusive-gateway-element-process-modeler-processes.png)

{% hint style="info" %}
See the following topics about Exclusive Gateway elements:

* [Add and Configure Exclusive Gateway Elements](add-and-configure-exclusive-gateway-elements.md#add-an-exclusive-gateway-element)
* [Configure a Sequence Flow from an Exclusive Gateway Element](the-quick-toolbar.md#configure-a-sequence-flow-from-an-exclusive-gateway-element)
{% endhint %}

### Parallel Gateway

A Parallel Gateway element represents the synchronization and/or creation of parallel paths within a [Request's](../../../using-processmaker/requests/) workflow. The Parallel Gateway element has two functions:

* A Parallel Gateway does not trigger until all its incoming [Sequence Flows](process-modeling-element-descriptions.md#sequence-flow) route to it. This is how Parallel Gateways synchronize workflow.
* When a Parallel Gateway triggers, its outgoing Sequence Flows creates parallel workflows without any conditions. This function differentiates it from outgoing Sequence Flows for [Exclusive Gateway](process-modeling-element-descriptions.md#exclusive-gateway) or [Event-Based Gateway](process-modeling-element-descriptions.md#event-based-gateway) elements.

In Process Modeler, the Parallel Gateway element is labeled as "Parallel Gateway" in the **BPMN** panel as highlighted below.

![Parallel Gateway element in the BPMN panel of Process Modeler](../../../.gitbook/assets/parallel-gateway-bpmn-panel-process-modeler-processes.png)

Below is a Parallel Gateway element when it has been placed into a Process model.

![Parallel Gateway element](../../../.gitbook/assets/parallel-gateway-element-process-modeler-processes.png)

{% hint style="info" %}
See [Add and Configure Parallel Gateway Elements](add-and-configure-parallel-gateway-elements.md).
{% endhint %}

### Event-Based Gateway

An Event-Based Gateway element represents a decision that creates alternative paths within a [Request's](../../../using-processmaker/requests/) workflow for a Process. During a Request's workflow routing, only one outgoing [Sequence Flow](process-modeling-element-descriptions.md#sequence-flow) element from the Event-Based Gateway element is followed based on the event that occurs immediately following the Event-Based Gateway element. Those possible events are represented immediately after the Event-Based Gateway element's outgoing Sequence Flow elements.

Below are examples of how to use the Event-Based Gateway element to represent subsequent workflow:

* Use an [Intermediate Timer Event](process-modeling-element-descriptions.md#intermediate-timer-event) element to indicate that the following event must occur at a time or an interval for workflow to continue.
* Use an [Intermediate Message Catch Event](process-modeling-element-descriptions.md#intermediate-message-catch-event) element to indicate that the following event must receive an external API call for workflow to continue.
* Use a [Task](process-modeling-element-descriptions.md#task) element to indicate what that a Task is assigned to a specific ProcessMaker user or group for workflow to continue.
* Use a [Script Task](process-modeling-element-descriptions.md#script-task) element to indicate that a [ProcessMaker Script](../../scripts/what-is-a-script.md) runs for workflow to continue.
* Use a [Call Activity](process-modeling-element-descriptions.md#call-activity) element to indicate that an external sub-Process is called for workflow to continue.

In Process Modeler, the Event-Based Gateway element is labeled as "Event-Based Gateway" in the **BPMN** panel as highlighted below.

![Event-Based Gateway in the BPMN panel of Process Modeler](../../../.gitbook/assets/bpmn-event-based-gateway-process-modeler-processes.png)

Below is an Event-Based Gateway element when it has been placed into a Process model.

![Event-Based Gateway element](../../../.gitbook/assets/event-based-gateway-process-modeler-processes.png)

{% hint style="info" %}
See [Add and Configure Event-Based Gateway Elements](add-and-configure-event-based-gateway-elements.md).
{% endhint %}

## Organize Process Participants

BPMN 2.0 provides graphical representations to organize participants in a Process model.

### Pool

A Pool element represents an organization or entity involved in a Process model. The Pool element might apply to a specific role \("Human Resources"\), entity \(such as a company\) or a general relationship \(such as a buyer, seller, or manufacturer\). A Pool element can even reference another Process model.

In Process Modeler, the Pool element is labeled as "Pool" in the **BPMN** panel as highlighted below.

![Pool element in the BPMN panel of Process Modeler](../../../.gitbook/assets/bpmn-panel-pool-process-modeler-processes.png)

Below is a Pool element when it has been placed into a Process model.

![Pool element containing a modeled Process](../../../.gitbook/assets/pool-element-process-modeler-processes.png)

{% hint style="info" %}
See [Add and Configure Pool and Lane Elements](add-and-configure-pool-and-lane-elements.md).
{% endhint %}

### Lane

A Lane element represents a partition within a [Pool](process-modeling-element-descriptions.md#pool) element. Each Lane element indicates individual roles and/or participants that perform Tasks within the Pool element. Text within the Lane element indicates the participant in the Process model. Any elements within the Lane element indicate that the participant is the actor or is responsible for performing tasks in the Process. Furthermore, [Sequence Flow](process-modeling-element-descriptions.md#sequence-flow) elements between elements in other Pool or Lane elements indicate with which other Process participants that Lane element interacts.

Below is a Pool element with three Lane elements when it has been placed into a Process model. Each Lane element indicates roles within the overall organization.

![Pool element with three Lane elements that indicate roles within the organization](../../../.gitbook/assets/pool-element-with-lanes-process-modeler-processes.png)

{% hint style="info" %}
See [Add and Configure Pool and Lane Elements](add-and-configure-pool-and-lane-elements.md).
{% endhint %}

## Flows

Flows represent the order in which workflow routing and messaging occur in a Process model. ProcessMaker Spark provides the following Process model elements that indicate workflow:

* [Sequence Flow](process-modeling-element-descriptions.md#sequence-flow)
* [Message Flow](process-modeling-element-descriptions.md#message-flow)

### Sequence Flow

Sequence Flow elements represent the intended workflow routing in a Process model. Process workflow is the order in which elements trigger or activate in a Process model. Sequence Flow elements are not to be confused with [Message Flow](process-modeling-element-descriptions.md#message-flow) elements.

As a best practice indicate a consistent direction of Sequence Flow elements, either left to right or top to bottom, to make Process models easier to understand.

In Process Modeler, Flow indicators display when you click an element in the Process model. The top Flow indicator is for Sequence Flows \(highlighted below\), represented with a solid line.

![Sequence Flow indicator \(highlighted\) on a selected Process element](../../../.gitbook/assets/sequence-flow-indicator-process-modeler-processes.png)

{% hint style="info" %}
[Text annotations](process-modeling-element-descriptions.md#text-annotation), [Pool](process-modeling-element-descriptions.md#pool), and [Lane](process-modeling-element-descriptions.md#lane) elements do not use Sequence Flow elements. Furthermore, Sequence Flow elements cannot connect between Process model elements that are in different Pool elements since Pool elements represent different organizations. However, use Message Flow elements to infer communication between elements in different Pool elements.

Sequence Flows from Exclusive Gateway elements can be configured to specify under which condition a Request routes through that Sequence Flow. See [Set and Delete Sequence Flow Between Elements](the-quick-toolbar.md#configure-the-sequence-flow-for-exclusive-gateway-elements).

A Start Event begins the flow of a Request for that Process. Therefore, a Start Event cannot have an incoming Sequence Flow.

An End Event element terminates the flow of a Request for that Process. Therefore, an End Event element cannot have an outgoing Sequence Flow.
{% endhint %}

The Sequence Flow element indicates in which order workflow or routing occurs between two connected Process elements. Below are two Process model elements connected in Process Modeler.

![Two Process elements connected by the Sequence Flow to infer the order of workflow](../../../.gitbook/assets/sequence-flow-connecting-elements-process-modeler-processes.png)

{% hint style="info" %}
See [Set and Delete Sequence Flow Between Elements](the-quick-toolbar.md).
{% endhint %}

### Message Flow

In a Process model, Message Flow elements represent communication between an element in one Pool element with another element in a separate Pool element. Message Flow elements are not to be confused with [Sequence Flow](process-modeling-element-descriptions.md#sequence-flow) elements.

In Process Modeler, Flow indicators display when you click an element in the Process model. The bottom Flow indicator is for Message Flows, represented with a dotted line \(highlighted below\).

![Message Flow indicator \(highlighted\) on a selected Process element](../../../.gitbook/assets/message-flow-indicator-process-model-processes.png)

The Message Flow element indicates communication between elements in two separate Pool elements. The Message Flow does not indicate whether the communication is physical or digital. Use a [Text Annotation](process-modeling-element-descriptions.md#text-annotation) element to add information about the communication.

![A Message Flow element \(dotted line\) between two elements in different Pool elements](../../../.gitbook/assets/message-flow-between-pool-elements-process-model-processes.png)

Message Flow elements cannot connect to Process model elements within the same Pool element.

{% hint style="info" %}
See [Set and Delete Message Flow Between Elements](set-and-delete-message-flow-between-elements.md).
{% endhint %}

## Text Annotations and Associations

Use [Text Annotation](process-modeling-element-descriptions.md#text-annotation) and [Association](process-modeling-element-descriptions.md#association) elements to add human-readable descriptions about the Process model.

### Text Annotation

A Text Annotation element is human-readable text in a Process model that provides description about the Process. Text Annotation elements perform no functional role in Process Requests or workflow routing.

In Process Modeler, the Text Annotation element is labeled as "Text Annotation" in the **BPMN** panel as highlighted below.

![Text Annotation element in the BPMN panel of Process Modeler](../../../.gitbook/assets/bpmn-panel-text-annotation-process-modeler-processes.png)

Below is a Text Annotation element when it has been placed into a Process model.

![Text Annotation element](../../../.gitbook/assets/text-annotation-process-modeler-processes.png)

{% hint style="info" %}
See [Add and Configure Text Annotation and Association Elements](add-and-configure-text-annotation-elements.md).
{% endhint %}

### Association

An Association element is part of a Text Annotation element that graphically references the Process model element that the Text Annotation element describes. Multiple Association elements can be used from one Text Annotation element. However, a Text Annotation element must be placed into the Process model before an Association element can be.

Each Annotation element can display a directional arrow to and/or from the Text Annotation element.

Below is an Association element when it has been placed into a Process model.

![Association element that references the Text Annotation element to the element it describes](../../../.gitbook/assets/association-process-modeler-processes.png)

{% hint style="info" %}
See [Add and Configure Text Annotation and Association Elements](add-and-configure-text-annotation-elements.md#add-an-association-element).
{% endhint %}

## Related Topics

{% page-ref page="../../../using-processmaker/requests/what-is-a-request.md" %}

{% page-ref page="edit-the-process-model-information.md" %}

{% page-ref page="filter-elements-in-the-bpmn-panel.md" %}

{% page-ref page="add-and-configure-an-event-element.md" %}

{% page-ref page="add-and-configure-start-timer-event-elements.md" %}

{% page-ref page="add-and-configure-intermediate-timer-event-elements.md" %}

{% page-ref page="add-and-configure-intermediate-message-catch-event-elements.md" %}

{% page-ref page="add-and-configure-end-event-elements.md" %}

{% page-ref page="add-and-configure-task-elements.md" %}

{% page-ref page="add-and-configure-script-task-elements.md" %}

{% page-ref page="add-and-configure-call-activity-elements.md" %}

{% page-ref page="add-and-configure-exclusive-gateway-elements.md" %}

{% page-ref page="add-and-configure-parallel-gateway-elements.md" %}

{% page-ref page="add-and-configure-event-based-gateway-elements.md" %}

{% page-ref page="add-and-configure-pool-and-lane-elements.md" %}

{% page-ref page="the-quick-toolbar.md" %}

{% page-ref page="set-and-delete-message-flow-between-elements.md" %}

{% page-ref page="add-and-configure-text-annotation-elements.md" %}

{% page-ref page="remove-process-model-elements.md" %}

{% page-ref page="undo-and-redo-changes.md" %}

{% page-ref page="navigate-around-your-process-model.md" %}

{% page-ref page="toolboxes.md" %}

{% page-ref page="validate-bpmn-2.0-compliance.md" %}

