---
description: These are brief descriptions about commonly used Process modeling elements.
---

# Process Modeling Element Descriptions

## Overview

The following are brief descriptions about each Process modeling element that ProcessMaker provides. See the [BPMN 2.0 specification](https://www.omg.org/spec/BPMN/2.0/About-BPMN/) for more information.

{% hint style="info" %}
### Looking for Information About Connectors?

While connectors are used similarly as Process model elements in Process Modeler, connectors are not part of the BPMN 2.0 specification. Connections provide integrations with third-party services that are configured in a Process model so that ProcessMaker integrates with that third-party service during [Requests](../../../using-processmaker/requests/what-is-a-request.md). See the following topics for more information:

* [What is a Connector?](../model-processes-using-connectors/what-is-a-connector.md)
* [Available Connectors from ProcessMaker](../model-processes-using-connectors/available-connectors-from-processmaker/)

### Permissions Required

Your ProcessMaker user account or group membership must have the following permissions to use Process modeling elements in Process Modeler unless your user account has the **Make this user a Super Admin** setting selected:

* Processes: View Processes
* Processes: Edit Processes

See the [Process](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

## Events

Use event-type elements to represent an event, milestone, or delay in the Process. ProcessMaker provides the following event type Process model elements:

* [Start Event](process-modeling-element-descriptions.md#start-event)
* [Start Timer Event](process-modeling-element-descriptions.md#start-timer-event)
* [Intermediate Timer Event](process-modeling-element-descriptions.md#intermediate-timer-event)
* [Intermediate Message Catch Event](process-modeling-element-descriptions.md#intermediate-message-catch-event)
* [End Event](process-modeling-element-descriptions.md#end-event)

### Start Event

A Start Event element represents the start of a [Request](../../../using-processmaker/requests/what-is-a-request.md) for a Process. Note that a Start Event element does not represent an assignee because a Request has not started until a Start Event element triggers. Each Start Event element can be configured who can start a Request, but it is not until the Request starts and the Request routes to the next element that any assignee can be determined. Therefore, a Start Event element cannot have an incoming [Sequence Flow](process-modeling-element-descriptions.md#sequence-flow) element, though it may have an outgoing [Message Flow](process-modeling-element-descriptions.md#message-flow) element. A Process model can have multiple Start Event elements.

Use a Start Event element to represent how a Request for that Process starts in one of the following ways:

* The Request can be started by an authenticated ProcessMaker [user](../../../processmaker-administration/add-users/what-is-a-user.md) \(Jane Doe\) or any member of a specified [group](../../../processmaker-administration/assign-groups-to-users/what-is-a-group.md) \(Accounting department\).
* The Request can be started by either an anonymous or authenticated ProcessMaker user through a published URL. This allows a ProcessMaker Screen to be available on a public-facing Web site that starts the Request when that Screen is submitted. Note that this feature is only available if the Web Entry package is installed in your ProcessMaker instance. See [Web Entry](../../../package-development-distribution/package-a-connector/web-entry.md).

In the left panel in Process Modeler, the Start Event element is labeled as "Start Event."

![Start Event element in the left side panel in Process Modeler](../../../.gitbook/assets/start-event-bpmn-side-bar-process-modeler-processes.png)

Below is a Start Event element when it has been placed into a Process model.

![Start Event element](../../../.gitbook/assets/start-event-element-process-modeler-processes.png)

{% hint style="info" %}
See [Add and Configure Event Elements](add-and-configure-an-event-element.md#add-a-start-event-element).
{% endhint %}

### Start Timer Event

A Start Timer Event element represents a time or periodic interval when a [Request](../../../using-processmaker/requests/what-is-a-request.md) starts for a Process. A Start Timer Event element begins the Process. Therefore, a Start Timer Event element cannot have an incoming [Sequence Flow](process-modeling-element-descriptions.md#sequence-flow) element. A Process model can have multiple Start Timer Event elements. Use this element to indicate that a Request for that Process must begin at a specific date and time, such as on an employee’s employment anniversary to schedule a performance review.

In the left panel in Process Modeler, the Start Timer Event element is labeled as "Start Timer Event."

![Start Timer Event element in the left side panel in Process Modeler](../../../.gitbook/assets/start-timer-event-bpmn-side-bar-process-modeler-processes.png)

Below is a Start Timer Event element when it has been placed into a Process model.

![Start Timer Event element](../../../.gitbook/assets/start-timer-event-element-process-modeler-processes.png)

{% hint style="info" %}
See [Add and Configure Start Timer Event Elements](add-and-configure-start-timer-event-elements.md).
{% endhint %}

### Intermediate Timer Event

An Intermediate Timer Event element represents a delay in a Process at a specific time. When the specified time occurs, the Intermediate Timer Event element triggers, thereby resuming workflow for that Process's [Request](../../../using-processmaker/requests/what-is-a-request.md). Use this element to cause a Request to wait until a specific time. For example, use this element to make a Process wait 30 days before checking if you receive an invoice from a customer after services are rendered.

In the left panel in Process Modeler, the Intermediate Timer Event element is labeled as "Intermediate Timer Event."

![Intermediate Timer Event element in the left side panel in Process Modeler](../../../.gitbook/assets/intermediate-timer-event-bpmn-side-bar-process-modeler-processes.png)

Below is an Intermediate Timer Event element when it has been placed into a Process model.

![Intermediate Timer Event element](../../../.gitbook/assets/intermediate-timer-event-element-process-modeler-processes.png)

{% hint style="info" %}
See [Add and Configure Intermediate Timer Event Elements](add-and-configure-intermediate-timer-event-elements.md).
{% endhint %}

### Intermediate Message Catch Event

An Intermediate Message Catch Event element represents a delay in a [Request](../../../using-processmaker/requests/what-is-a-request.md) until that element receives a message from either an Intermediate Message Throw Event element or a Message End Event element \(but not both\) located in a different [Pool](process-modeling-element-descriptions.md#pool) element than the Intermediate Message Catch Event element receiving the message. The purpose of the message transfer is to convey information between Requests running from the same Process model since each Pool element represents its own Request with its own distinct Request data. As part of this information transfer, workflow is affected in the Pool element's Request that contains the Intermediate Message Catch Event element.

Use a [Message Flow](process-modeling-element-descriptions.md#message-flow) element to indicate messaging workflow between the triggering element and the Intermediate Message Catch Event element. Ensure that Intermediate Message Catch Event element and its triggering element are in different Pool elements. When configuring the Intermediate Message Catch Event element during Process modeling, select which message from the triggering element sends to the Intermediate Message Catch Event element.

An Intermediate Message Catch Event element functions as follows during a Request:

* The Intermediate Message Throw Event element or Message End Event element triggers.
* That triggering element sends its message to the Intermediate Message Catch Event element.
* The Intermediate Message Catch Event triggers. Workflow resumes in that Request.

Consider the following example how the Intermediate Message Catch Event element functions. This is an overly simple purchase request and order fulfillment Process model.

![Simple Process model example to demonstrate how an Intermediate Message Catch Event functions](../../../.gitbook/assets/intermediate-throw-catch-event-example.png)

Instead of using a Message Start Event element in the "Purchase Fulfillment" Pool element to start that Request, use an Intermediate Message Catch Event element \(labeled "Catch from Order"\) after the Request has started.

After the "Purchase Fulfillment" Request starts, the following occurs:

* Workflow delays after the "Preparation" Task element.
* When the Intermediate Message Throw Event element triggers from the "Purchase Order" Request \(labeled "Throw to Fulfillment"\), it sends its message to the Intermediate Message Catch Event element in the "Purchase Fulfillment" Request. Workflow continues in the "Purchase Order" Request to the End Event element.
* In the "Purchase Fulfillment" Request, the Intermediate Message Catch Event element triggers and receives the Intermediate Message Throw Event element's message.
* Workflow resumes in the "Purchase Fulfillment" Request.

Below is an Intermediate Message Catch Event element when it has been placed into a Process model.

![Intermediate Message Catch Event element](../../../.gitbook/assets/inetermediate-message-catch-event-process-modeler-processes.png)

{% hint style="info" %}
See [Add and Configure Intermediate Timer Event Elements](add-and-configure-intermediate-timer-event-elements.md).
{% endhint %}

### End Event

An End Event element represents the completion of a [Request](../../../using-processmaker/requests/what-is-a-request.md) for a Process. Therefore, an End Event element cannot have an outgoing [Sequence Flow](process-modeling-element-descriptions.md#sequence-flow) element. A Process model can have multiple End Event elements.

In the left panel in Process Modeler, the End Event element is labeled as "End Event."

![End Event element in the left side panel in Process Modeler](../../../.gitbook/assets/end-event-bpmn-side-bar-process-modeler-processes.png)

Below is an End Event element when it has been placed into a Process model.

![End Event element](../../../.gitbook/assets/end-event-element-process-modeler-processes.png)

{% hint style="info" %}
See [Add and Configure Event Elements](add-and-configure-an-event-element.md#add-an-end-event-element).
{% endhint %}

## Tasks

Tasks represent activities performed by persons in ProcessMaker software or in the physical environment, or by a [ProcessMaker Script](../../scripts/). ProcessMaker provides the following Task-type Process model elements:

* [Task](process-modeling-element-descriptions.md#task)
* [Script Task](process-modeling-element-descriptions.md#script-task)
* [Manual Task](process-modeling-element-descriptions.md#manual-task)

### Task

A Task element represents an activity a person performs while participating in a [Request](../../../using-processmaker/requests/what-is-a-request.md) via ProcessMaker. A Task element is different than a [Manual Task](process-modeling-element-descriptions.md#manual-task) element, in which a person performs an activity in the physical environment. Assign the [Task](../../../using-processmaker/task-management/what-is-a-task.md) that the Task element represents to any of the following types of Request participants:

* The ProcessMaker user who started the Request, referred to as the Requester
* A specific ProcessMaker [user](../../../processmaker-administration/add-users/what-is-a-user.md)
* Any member of a specified ProcessMaker [group](../../../processmaker-administration/assign-groups-to-users/what-is-a-group.md)
* The previous Task assignee in that Request's workflow

People perform Task activities through ProcessMaker Screens as digital [forms](../../design-forms/screens-builder/types-for-screens.md#forms) and [displays](../../design-forms/screens-builder/types-for-screens.md#display). ProcessMaker Screens are designed in [Screens Builder](../../design-forms/screens-builder/).

In the left panel in Process Modeler, the Task element is labeled as "Task."

![Task element in the left side panel in Process Modeler](../../../.gitbook/assets/task-bpmn-side-bar-process-modeler-processes.png)

Below is a Task element when it has been placed into a Process model.

![Task element](../../../.gitbook/assets/task-element-process-modeler-processes.png)

{% hint style="info" %}
See [Add and Configure Task Elements](add-and-configure-task-elements.md).
{% endhint %}

### Script Task

A Script Task element represents an activity performed by a [ProcessMaker Script](../../scripts/what-is-a-script.md). Use ProcessMaker Scripts in the following ways:

* Interact with legacy systems in your organization such as ERPs and CRMs.
* Connect with third-party services like Adobe DocuSign, Short Message Service \(SMS\), or APIs.

ProcessMaker Scripts are designed in [Scripts Editor](../../scripts/scripts-editor.md). ProcessMaker Scripts are independent of Process models: any ProcessMaker Script can be reused in any Process model in your organization. This architecture allows Process Owners to focus on Process modeling in a no-code environment while ProcessMaker Developers develop reusable ProcessMaker Scripts. ProcessMaker Scripts can leverage ProcessMaker Screens variable values for in-progress Requests.

In the left panel in Process Modeler, the Script Task element is labeled as "Script Task."

![Script Task element in the left side panel in Process Modeler](../../../.gitbook/assets/script-task-bpmn-side-bar-process-modeler-processes.png)

Below is a Script Task element when it has been placed into a Process model.

![Script Task element](../../../.gitbook/assets/script-task-element-process-modeler-processes.png)

{% hint style="info" %}
See [Add and Configure Script Task Elements](add-and-configure-script-task-elements.md).
{% endhint %}

### Manual Task

A Manual Task element represents an activity a person performs offline and/or in the physical environment such that ProcessMaker cannot monitor its activity. A Manual Task element is different than a [Task](process-modeling-element-descriptions.md#task) element, in which a person performs an activity via ProcessMaker. ProcessMaker relies on the Task assignee to acknowledge completion of that activity. An example of a Manual Task activity is moving physical merchandise in a warehouse: this activity occurs offline and is one which does not involve ProcessMaker interaction.

In the left panel in Process Modeler, the Manual Task element is labeled as "Manual Task."

![Manual Task element in the left side panel in Process Modeler](../../../.gitbook/assets/manual-task-bpmn-side-bar-process-modeler-processes.png)

Below is a Manual Task element when it has been placed into a Process model.

![Manual Task element](../../../.gitbook/assets/manual-task-element-process-modeler-processes.png)

{% hint style="info" %}
See [Add and Configure Manual Task Elements](add-and-configure-manual-task-elements.md).
{% endhint %}

## Sub Process

A Sub Process element represents a call to a Sub Process that can be re-used by other Processes in the ProcessMaker instance. The Sub Process that the Sub Process element calls is referred to as the "child" Sub Process. Use the Sub Process element to call a child Sub Process from the current Process, which is referred to as the "parent" Process.

The child Sub Process that the Sub Process element calls from the parent Process's [Request](../../../using-processmaker/requests/what-is-a-request.md) must be in the same ProcessMaker instance and not [archived](../../viewing-processes/view-the-list-of-processes/remove-a-process.md).

The child Sub Process has its own Request. The Request for the parent Process waits until the child Sub Process's Request completes before its workflow continues. When the child Sub Process's Request completes, the parent Process's Request continues from the Sub Process element.

{% hint style="info" %}
To prevent routing for the parent Process's Request from waiting until the child Sub Process's Request completes, use a [Parallel Gateway](process-modeling-element-descriptions.md#parallel-gateway) element preceding the Sub Process element. Use a parallel outgoing [Sequence Flow](the-quick-toolbar.md) element from the Parallel Gateway element to continue routing the parent Process while the Sub Process element waits for the child Sub Process's Request to complete.
{% endhint %}

In the left panel in Process Modeler, the Sub Process element is labeled as "Sub Process."

![Sub Process element in the left side panel in Process Modeler](../../../.gitbook/assets/call-activity-bpmn-side-bar-process-modeler-processes.png)

Below is a Sub Process element when it has been placed into a Process model.

![Sub Process element](../../../.gitbook/assets/call-activity-process-modeler-processes.png)

{% hint style="info" %}
See [Add and Configure Sub Process Elements](add-and-configure-sub-process-elements.md).
{% endhint %}

## Gateways

Gateway elements route [Request](../../../using-processmaker/requests/what-is-a-request.md) workflow in the following ways:

* Limit workflow based on one passing conditions, as the [Exclusive Gateway](process-modeling-element-descriptions.md#exclusive-gateway) element does.
* Limit workflow based on multiple passing conditions, as the [Inclusive Gateway](process-modeling-element-descriptions.md#inclusive-gateway) element does.
* Limit workflow based on an event, as the [Event-Based Gateway](process-modeling-element-descriptions.md#event-based-gateway) elements does.
* Synchronize or continue parallel workflows, as the [Parallel Gateway](process-modeling-element-descriptions.md#parallel-gateway) element does.

### Exclusive Gateway

An Exclusive Gateway element represents an evaluation of a [Request's](../../../using-processmaker/requests/what-is-a-request.md) workflow routing conditions for a Process. These routing conditions are configured on each outgoing [Sequence Flow](process-modeling-element-descriptions.md#sequence-flow) element from the Exclusive Gateway element. When a Request is in progress and the Exclusive Gateway element triggers, each of its outgoing Sequence Flow elements' conditions are evaluated to determine which single Sequence Flow element workflow routes for that Request. Unlike the [Inclusive Gateway](process-modeling-element-descriptions.md#inclusive-gateway) element, only one Sequence Flow element can trigger from the Exclusive Gateway element to route workflow.

Use an Exclusive Gateway element when you want only one condition to pass. Otherwise, consider using an Inclusive Gateway element whereby any conditions that pass specified conditions allow workflow routing to continue.

In the left panel in Process Modeler, the Exclusive Gateway element is labeled as "Exclusive Gateway."

![Exclusive Gateway element in the left side panel in Process Modeler](../../../.gitbook/assets/bpmn-panel-exclusive-gateway-process-modeler-processes.png)

Below is an Exclusive Gateway element when it has been placed into a Process model.

![Exclusive Gateway element](../../../.gitbook/assets/exclusive-gateway-element-process-modeler-processes.png)

{% hint style="info" %}
See the following topics about Exclusive Gateway elements:

* [Add and Configure Exclusive Gateway Elements](add-and-configure-exclusive-gateway-elements.md#add-an-exclusive-gateway-element)
* [Configure a Sequence Flow from an Exclusive Gateway Element](the-quick-toolbar.md#configure-a-sequence-flow-from-an-exclusive-gateway-element)
{% endhint %}

### Inclusive Gateway

An Inclusive Gateway element represents an evaluation of a [Request's](../../../using-processmaker/requests/what-is-a-request.md) workflow routing conditions for a Process. These routing conditions are configured on each outgoing [Sequence Flow](process-modeling-element-descriptions.md#sequence-flow) element from the Inclusive Gateway element. When a Request is in progress and the Inclusive Gateway element triggers, each of its outgoing Sequence Flow elements' conditions are evaluated to determine which Sequence Flow element\(s\) continue routing for that Request. Unlike the [Exclusive Gateway](process-modeling-element-descriptions.md#exclusive-gateway) element, multiple Sequence Flow elements can trigger from the Inclusive Gateway element, thereby causing multiple workflow routes simultaneously for the same Request that stem from the Inclusive Gateway element.

Use an Inclusive Gateway element when you potentially want multiple workflow routes to occur simultaneously in that Request. Otherwise, consider using an Exclusive Gateway element to allow only one Sequence Flow element's condition\(s\) to continue workflow route for that Request.

In the left panel in Process Modeler, the Inclusive Gateway element is labeled as "Inclusive Gateway."

![Inclusive Gateway element in the left side panel in Process Modeler](../../../.gitbook/assets/bpmn-inclusive-gateway-process-modeler-processes.png)

Below is an Inclusive Gateway element when it has been placed into a Process model.

![Inclusive Gateway element](../../../.gitbook/assets/inclusive-gateway-element-process-modeler-processes.png)

{% hint style="info" %}
See [Add and Configure Inclusive Gateway Elements](add-and-configure-inclusive-gateway-elements.md).
{% endhint %}

### Parallel Gateway

A Parallel Gateway element synchronizes [Request](../../../using-processmaker/requests/what-is-a-request.md) workflow for a Process by converging or diverging parallel [Sequence Flow](process-modeling-element-descriptions.md#sequence-flow) elements. The Parallel Gateway element has two separate functions:

* **Converging workflow:** Converging workflow represents two or more incoming Sequence Flow elements to the Parallel Gateway element. All incoming Sequence Flow elements converging to the Parallel Gateway element must trigger before the Parallel Gateway element triggers, thereby synchronizing a Request's workflow. Use this coordinate workflow.  

  ![](../../../.gitbook/assets/parallel-gateway-converging.png)

* **Diverging workflow:** Diverging workflow represents two or more outgoing Sequence Flow elements from the Parallel Gateway element. When a Parallel Gateway triggers, all outgoing Sequence Flow elements from the gateway element trigger simultaneously without exception. Conditions cannot be placed on any outgoing Sequence Flow elements from the Parallel Gateway element. Use this when multiple workflow routes must occur simultaneously.  

  ![](../../../.gitbook/assets/parallel-gateway-diverging.png)

One Parallel Gateway element can only converge or diverge workflow, but not both. Use two Parallel Gateway elements to synchronize both converging and diverging parallel workflow.  

![Use two Parallel Gateway elements for both converging and diverging parallel workflow](../../../.gitbook/assets/parallel-gateway-converging-and-diverging.png)

In the left panel in Process Modeler, the Parallel Gateway element is labeled as "Parallel Gateway."

![Parallel Gateway element in the left side panel in Process Modeler](../../../.gitbook/assets/parallel-gateway-bpmn-panel-process-modeler-processes.png)

Below is a Parallel Gateway element when it has been placed into a Process model.

![Parallel Gateway element](../../../.gitbook/assets/parallel-gateway-element-process-modeler-processes.png)

{% hint style="info" %}
See [Add and Configure Parallel Gateway Elements](add-and-configure-parallel-gateway-elements.md).
{% endhint %}

### Event-Based Gateway

An Event-Based Gateway element represents an evaluation of a [Request's](../../../using-processmaker/requests/what-is-a-request.md) workflow routing for a Process based on which event occurs immediately after the Event-Based Gateway element. Follow these guidelines to use the Event-Based Gateway element:

* The Event-Based Gateway element requires two or more outgoing [Sequence Flow](process-modeling-element-descriptions.md#sequence-flow) elements. When evaluating events, workflow routes through only one Sequence Flow element; multiple events cannot pass simultaneously from one Event-Based Gateway element during a Request.
* The Event-Based Gateway element can only connect with [Intermediate Timer Event](process-modeling-element-descriptions.md#intermediate-timer-event) or [Intermediate Message Catch Event](process-modeling-element-descriptions.md#intermediate-message-catch-event) elements. This creates the scenario that either a timed event occurs or an Intermediate Message Catch Event element receives a message.

When the Event-Based Gateway element triggers during a Request, workflow for that Request pauses. ProcessMaker then evaluates the events immediately following the Event-Based Gateway element's via its outgoing Sequence Flow elements and waits until one of those events occur. Request workflow resumes by routing to the event that occurs first.

Consider the following example. Suppose that you have a Process that monitors if you receive package shipments on time. Use an Event-Based Gateway element to monitor which event occurs next. Refer to the Process modeling elements below.

![Event-Based Gateway element example](../../../.gitbook/assets/event-based-gateway-example.png)

In this example, connect the following Process modeling elements from the Event-Based Gateway element:

* **Intermediate Timer Event element:** The first connecting event from the Event-Based Gateway element is an Intermediate Timer Event element that is set to 24 hours. This event represents a 24-hour period in which presumably a notification has not arrived that the package shipped within that time period. If the timer set in the Intermediate Timer Event expires, then workflow routes to a [Manual Task](process-modeling-element-descriptions.md#manual-task) element in which its assignee telephones the shipping company.
* **Intermediate Message Catch Event element:** The second connecting element is an Intermediate Message Catch Event element that represents a notification of the package’s shipment presumably before the timer set in the Intermediate Timer Event element expires. If the Intermediate Message Catch Event element triggers, then the notification was received before the 24-hour period expired. No further action is required.

In the left panel in Process Modeler, the Event-Based Gateway element is labeled as "Event-Based Gateway."

![Event-Based Gateway element in the left side panel in Process Modeler](../../../.gitbook/assets/bpmn-event-based-gateway-process-modeler-processes.png)

Below is an Event-Based Gateway element when it has been placed into a Process model.

![Event-Based Gateway element](../../../.gitbook/assets/event-based-gateway-process-modeler-processes.png)

{% hint style="info" %}
See [Add and Configure Event-Based Gateway Elements](add-and-configure-event-based-gateway-elements.md).
{% endhint %}

## Organize Process Participants

BPMN 2.0 provides graphical representations to organize participants in a Process model.

### Pool

A Pool element represents an organization or entity involved in a Process model. The Pool element might represent a specific role \("Human Resources"\), entity \(such as a company\) or a general relationship \(such as a buyer, seller, or manufacturer\).

Each Pool element represents its own Request, and therefore its own Request data. While a Process model can have multiple Pool elements, each Pool element represents its own Request with distinct Request data.

In the left panel in Process Modeler, the Pool element is labeled as "Pool."

![Pool element in the left side panel in Process Modeler](../../../.gitbook/assets/bpmn-panel-pool-process-modeler-processes.png)

Below is a Pool element when it has been placed into a Process model. "New Pool" is the name of the Pool element.

![Pool element containing a modeled Process](../../../.gitbook/assets/pool-element-process-modeler-processes.png)

{% hint style="info" %}
See [Add and Configure Pool and Lane Elements](add-and-configure-pool-and-lane-elements.md).
{% endhint %}

### Lane

A Lane element represents a partition within a [Pool](process-modeling-element-descriptions.md#pool) element. Each Lane element indicates a role, actor, or participant within the Pool element. Text within the Lane element indicates the participant in the Process model. Any elements within the Lane element indicate that the participant is the actor or is responsible for performing actions in the Process model. Furthermore, [Sequence Flow](process-modeling-element-descriptions.md#sequence-flow) elements between elements in other Pool or Lane elements indicate with which other Process participants that Lane element interacts.

Below is a Pool element that contains three Lane elements when it has been placed into a Process model: "Requester," "Approval," and "Requisition" from top to bottom in the Pool element. Each Lane element indicates roles within the overall organization.

![Pool element with three Lane elements that indicate roles within the organization](../../../.gitbook/assets/pool-element-with-lanes-process-modeler-processes.png)

{% hint style="info" %}
See [Add and Configure Pool and Lane Elements](add-and-configure-pool-and-lane-elements.md).
{% endhint %}

## Flow Indicators

Flow indicators represent the order in which workflow routing and messaging occur in a Process model. ProcessMaker provides the following Process model elements that indicate workflow:

* [Sequence Flow](process-modeling-element-descriptions.md#sequence-flow)
* [Message Flow](process-modeling-element-descriptions.md#message-flow)

### Sequence Flow

Sequence Flow elements connect Process model elements to represent the intended workflow routing in a Process model. Process workflow is the order in which elements trigger or activate in a Process model. Sequence Flow elements are not to be confused with [Message Flow](process-modeling-element-descriptions.md#message-flow) elements.

As a best practice, indicate a consistent direction of Sequence Flow elements: either left to right or top to bottom, to make Process models easier to understand.

In Process Modeler, Flow indicators display when you click an element in the Process model. The top Flow indicator is for Sequence Flows \(highlighted below\), represented with a solid line.

![Sequence Flow indicator \(highlighted\) on a selected Process model element](../../../.gitbook/assets/sequence-flow-indicator-process-modeler-processes.png)

{% hint style="info" %}
[Text annotations](process-modeling-element-descriptions.md#text-annotation), [Pool](process-modeling-element-descriptions.md#pool), and [Lane](process-modeling-element-descriptions.md#lane) elements do not use Sequence Flow elements. Furthermore, Sequence Flow elements cannot connect between Process model elements that are in different Pool elements since Pool elements represent different organizations. However, use Message Flow elements to infer communication between elements in different Pool elements.

Sequence Flow elements from Exclusive Gateway and Inclusive Gateway elements can be configured to specify under which condition\(s\) Request workflow routes through that Sequence Flow element. See [Set Sequence Flow Elements to Indicate Workflow Routing](the-quick-toolbar.md#configure-an-outgoing-sequence-flow-element-from-an-exclusive-gateway-or-inclusive-gateway-element).

A Start Event or Start Timer Event element begins Request workflow for that Process. Therefore, these elements cannot have an incoming Sequence Flow elements.

An End Event element terminates Request workflow for that Process. Therefore, an End Event element cannot have an outgoing Sequence Flow element.
{% endhint %}

The Sequence Flow element indicates in which order workflow routing occurs between two connected Process model elements. Below are two Process model elements connected in Process Modeler.

![Process model elements connected by a Sequence Flow element infers the order of workflow](../../../.gitbook/assets/sequence-flow-connecting-elements-process-modeler-processes.png)

{% hint style="info" %}
See [Set and Delete Sequence Flow Between Elements](the-quick-toolbar.md).
{% endhint %}

### Message Flow

In a Process model, Message Flow elements represent messages between elements in different Pool elements. Message Flow elements are not to be confused with [Sequence Flow](process-modeling-element-descriptions.md#sequence-flow) elements.

In Process Modeler, Flow indicators display when you click an element in the Process model. The bottom Flow indicator is for Message Flows, represented with a dotted line \(highlighted below\).

![Message Flow indicator \(highlighted\) on a selected Process element](../../../.gitbook/assets/message-flow-indicator-process-model-processes.png)

These messages indicate indirect communication between separate Process participants. The Message Flow element does not indicate whether the message is physical or digital. Use a [Text Annotation](process-modeling-element-descriptions.md#text-annotation) element to add information about the type of communication.

![A Message Flow element \(dotted line\) between two elements in different Pool elements](../../../.gitbook/assets/message-flow-between-pool-elements-process-model-processes.png)

Message Flow elements cannot connect to Process model elements within the same Pool element.

{% hint style="info" %}
See [Set and Delete Message Flow Between Elements](set-and-delete-message-flow-between-elements.md).
{% endhint %}

## Text Annotations and Associations

Use [Text Annotation](process-modeling-element-descriptions.md#text-annotation) and [Association](process-modeling-element-descriptions.md#association) elements to add human-readable descriptions about the Process model.

### Text Annotation

A Text Annotation element is human-readable text in a Process model that provides description about the Process. Text Annotation elements perform no functional role in Process Requests or workflow routing.

In the left panel in Process Modeler, the Text Annotation element is labeled as "Text Annotation."

![Text Annotation element in the Controls panel of Process Modeler](../../../.gitbook/assets/bpmn-panel-text-annotation-process-modeler-processes.png)

Below is a Text Annotation element when it has been placed into a Process model.

![Text Annotation element](../../../.gitbook/assets/text-annotation-process-modeler-processes.png)

{% hint style="info" %}
See [Add and Configure Text Annotation and Association Elements](add-and-configure-text-annotation-elements.md).
{% endhint %}

### Association

An Association element is part of a Text Annotation element that graphically references the Process model element that the Text Annotation element describes. Multiple Association elements can be used from one Text Annotation element. However, a Text Annotation element must be placed into the Process model before an Association element can be used.

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

{% page-ref page="add-and-configure-manual-task-elements.md" %}

{% page-ref page="add-and-configure-sub-process-elements.md" %}

{% page-ref page="add-and-configure-exclusive-gateway-elements.md" %}

{% page-ref page="add-and-configure-inclusive-gateway-elements.md" %}

{% page-ref page="add-and-configure-parallel-gateway-elements.md" %}

{% page-ref page="add-and-configure-event-based-gateway-elements.md" %}

{% page-ref page="add-and-configure-pool-and-lane-elements.md" %}

{% page-ref page="the-quick-toolbar.md" %}

{% page-ref page="set-and-delete-message-flow-between-elements.md" %}

{% page-ref page="add-and-configure-text-annotation-elements.md" %}

{% page-ref page="../remove-process-model-elements.md" %}

{% page-ref page="../undo-and-redo-changes.md" %}

{% page-ref page="../navigate-around-your-process-model.md" %}

{% page-ref page="../toolboxes.md" %}

{% page-ref page="../validate-bpmn-2.0-compliance.md" %}

