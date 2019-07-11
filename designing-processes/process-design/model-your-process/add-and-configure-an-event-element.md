---
description: Add and configure Start Event elements in your Process model.
---

# Add and Configure Start Event Elements

## Add a Start Event Element

{% hint style="info" %}
### Don't Know What a Start Event Element Is?

See [Process Modeling Element Descriptions](process-modeling-element-descriptions.md) for a description of the [Start Event](process-modeling-element-descriptions.md#start-event) element.

### Permissions Required

Your user account or group membership must have the following permissions to add a Start Event element to the Process model:

* Processes: View Processes
* Processes: Edit Processes

See the [Process](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to add a Start Event element to the Process model:

1. [View your Processes](https://processmaker.gitbook.io/processmaker-4-community/-LPblkrcFWowWJ6HZdhC/~/drafts/-LRhVZm0ddxDcGGdN5ZN/primary/designing-processes/viewing-processes/view-the-list-of-processes/view-your-processes#view-all-processes). The **Processes** page displays.
2. [Create a new Process](../../viewing-processes/view-the-list-of-processes/create-a-process.md) or click the **Open Modeler** icon![](../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)to edit the selected Process model. Process Modeler displays.
3. Locate the **Start Event** element in the **Control** panel.  

   ![](../../../.gitbook/assets/start-event-bpmn-side-bar-process-modeler-processes.png)

4. Drag the element to where in the Process model canvas that you want to place it. If a Pool element is in your Process model, the Start Event element cannot be placed outside of the Pool element.

![Start Event element](../../../.gitbook/assets/start-event-process-modeler-processes.png)

After the element is placed into the Process model, you may move it by dragging it to the new location.

{% hint style="warning" %}
Moving a Start Event element has the following limitations in regards to the following Process model elements:

* **Pool element:** If the Start Event element is inside of a [Pool](process-modeling-element-descriptions.md#pool) element, it cannot be moved outside of the Pool element. If you attempt to do so, Process Modeler places the Start Event element inside the Pool element closest to where you attempted to move it.
* **Lane element:** If the Start Event element is inside of a Lane element, it can be moved to another Lane element in the same Pool element. However, the Start Event element cannot be moved outside of the Pool element.
{% endhint %}

## Configure a Start Event Element

{% hint style="info" %}
Your user account or group membership must have the following permissions to configure a Start Event element:

* Processes: View Processes
* Processes: Edit Processes

See the [Process](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

### Edit the Identifier Value

Process Modeler automatically assigns a unique value to each Process element added to a Process model. However, an element's identifier value can be changed if it is unique to all other elements in the Process model, including the Process model's identifier value.

{% hint style="warning" %}
All identifier values for all elements in the Process model must be unique.
{% endhint %}

Follow these steps to edit the identifier value for a Start Event element:

1. Select the Start Event element from the Process model in which to edit its identifier value. The **Inspector** panel displays the **Configuration** setting section.
2. Expand the **Configuration** setting section if it is not presently expanded. The **Identifier** field displays. This is a required field.  

   ![](../../../.gitbook/assets/start-event-configuration-identifier-name-process-modeler-processes.png)

3. In the **Identifier** field, edit the Start Event element's identifier to a unique value from all elements in the Process model and then press **Enter**. The element's identifier value is changed.

### Edit the Element Name

An element name is a human-readable reference for a Process element. Process Modeler automatically assigns the name of a Process element with its element type. However, an element's name can be changed.

Follow these steps to edit the name for a Start Event element:

1. Select the Start Event element from the Process model in which to edit its name. The **Inspector** panel displays the **Configuration** setting section.
2. Expand the **Configuration** setting section if it is not presently expanded. The **Name** field displays.  

   ![](../../../.gitbook/assets/start-event-configuration-identifier-name-process-modeler-processes.png)

3. In the **Name** field, edit the selected element's name and then press **Enter**. The element's name is changed.

## Select the ProcessMaker User or Group That Can Start Requests

{% hint style="info" %}
Your user account or group membership must have the following permissions to set which ProcessMaker user or group can start a Request for a Process:

* Processes: View Processes
* Processes: Edit Processes

See the [Process](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

### Select the ProcessMaker User That Can Start a Request

Follow these steps to select which ProcessMaker [user](../../../processmaker-administration/add-users/what-is-a-user.md) can start a Request for this Process:

1. Select the Start Event element from the Process model in which to select the user may start a Request. The **Inspector** panel displays the **Configuration** setting section.
2. Expand the **Configuration** setting section if it is not presently expanded. The **Start Permission** drop-down menu displays.  

   ![](../../../.gitbook/assets/start-permission-request-event-process-modeler-processes.png)

3. From the **Start Permission** drop-down menu, select the **User** option. The **User** drop-down menu displays below the **Start Permission** drop-down menu.  

   ![](../../../.gitbook/assets/start-permission-request-user-event-process-modeler-processes.png)

4. From the **User** drop-down menu, select which ProcessMaker user can start a Request via the Start Event element. That ProcessMaker user may start a Request.

### Select the ProcessMaker Group That Can Start a Request

Follow these steps to select which ProcessMaker [group](../../../processmaker-administration/assign-groups-to-users/what-is-a-group.md) members can start a Request for this Process:

1. Select the Start Event element from the Process model in which to select the user may start a Request.
2. Expand the **Configuration** setting section if it is not presently expanded. The **Start Permission** drop-down menu displays.

   ![](../../../.gitbook/assets/start-permission-request-event-process-modeler-processes.png)

3. From the **Start Permission** drop-down menu, select the **Group** option. The **Group** drop-down menu displays below the **Start Permission** drop-down menu.  

   ![](../../../.gitbook/assets/start-permission-request-group-event-process-modeler-processes.png)

4. From the **Group** drop-down menu, select which ProcessMaker group can start a Request via the Start Event element. All members of that ProcessMaker group may start a Request.

## Select Who Can Start a Request via a Web Entry

{% hint style="info" %}
### ProcessMaker Package Required

Your ProcessMaker instance must have the Web Entry package installed to select who can start a Request via a Web entry. The Web Entry package allows anonymous or authenticated ProcessMaker users to start or participate in Requests via a published URL. See [Web Entry](../../../package-development-distribution/package-a-connector/web-entry.md).

### Permissions Required

Your user account or group membership must have the following permissions to set which ProcessMaker user or group can start a Request for a Process:

* Processes: View Processes
* Processes: Edit Processes

See the [Process](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}



## Related Topics

{% page-ref page="process-modeling-element-descriptions.md" %}

{% page-ref page="../../viewing-processes/view-the-list-of-processes/view-your-processes.md" %}

{% page-ref page="../../viewing-processes/view-the-list-of-processes/create-a-process.md" %}

{% page-ref page="../../../using-processmaker/requests/what-is-a-request.md" %}

{% page-ref page="../../../processmaker-administration/add-users/what-is-a-user.md" %}

{% page-ref page="../../../processmaker-administration/assign-groups-to-users/what-is-a-group.md" %}

{% page-ref page="remove-process-model-elements.md" %}

