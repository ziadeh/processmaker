---
description: Add and configure Start Event elements in your Process model.
---

# Add and Configure Start Event Elements

## Add a Start Event Element

{% hint style="info" %}
### Don't Know What a Start Event Element Is?

See [Process Modeling Element Descriptions](process-modeling-element-descriptions.md) for a description of the [Start Event](process-modeling-element-descriptions.md#start-event) element.

### Permissions Required

Your ProcessMaker user account or group membership must have the following permissions to add a Start Event element to the Process model unless your user account has the **Make this user a Super Admin** setting selected:

* Processes: View Processes
* Processes: Edit Processes

See the [Process](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to add a Start Event element to the Process model:

1. [View your Processes](https://processmaker.gitbook.io/processmaker-4-community/-LPblkrcFWowWJ6HZdhC/~/drafts/-LRhVZm0ddxDcGGdN5ZN/primary/designing-processes/viewing-processes/view-the-list-of-processes/view-your-processes#view-all-processes). The **Processes** page displays.
2. [Create a new Process](../../viewing-processes/view-the-list-of-processes/create-a-process.md) or click the **Open Modeler** icon![](../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)to edit the selected Process model. Process Modeler displays.
3. Locate the **Start Event** element in the panel to the left of the Process Modeler canvas.  

   ![](../../../.gitbook/assets/start-event-bpmn-side-bar-process-modeler-processes.png)

4. Drag the element into the Process model canvas where you want to place it. If a Pool element is in your Process model, the Start Event element cannot be placed outside of the Pool element.

![Start Event element](../../../.gitbook/assets/start-event-process-modeler-processes.png)

After the element is placed into the Process model, you may move it by dragging it to the new location.

{% hint style="warning" %}
Moving a Start Event element has the following limitations in regards to the following Process model elements:

* **Pool element:** If the Start Event element is inside of a [Pool](process-modeling-element-descriptions.md#pool) element, it cannot be moved outside of the Pool element. If you attempt to do so, Process Modeler places the Start Event element inside the Pool element closest to where you attempted to move it.
* **Lane element:** If the Start Event element is inside of a Lane element, it can be moved to another Lane element in the same Pool element. However, the Start Event element cannot be moved outside of the Pool element.
{% endhint %}

## Settings

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to configure a Start Event element unless your user account has the **Make this user a Super Admin** setting selected:

* Processes: View Processes
* Processes: Edit Processes

See the [Process](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

The Start Event element has the following panels that contain settings:

* **Configuration** panel
  * [Edit the element name](add-and-configure-an-event-element.md#edit-the-element-name)
* **Advanced** panel
  * [Edit the **Identifier** value](add-and-configure-an-event-element.md#edit-the-identifier-value)
* **Start Permissions** panel
  * [Select the ProcessMaker user that can start Requests](add-and-configure-an-event-element.md#select-the-processmaker-user-that-can-start-requests)
  * [Select the ProcessMaker group that can start Requests](add-and-configure-an-event-element.md#select-the-processmaker-group-that-can-start-a-request)
* **Vocabularies** panel \(available when the [Vocabularies package](../../../package-development-distribution/package-a-connector/vocabularies.md) is installed\)
  * [Assign ProcessMaker Vocabularies that validate Request data from this element](add-and-configure-an-event-element.md#assign-processmaker-vocabularies-that-validate-request-data-from-this-element)
* **Web Entry** panel \(available when the [Web Entry package](../../../package-development-distribution/package-a-connector/web-entry.md) is installed\)
  * [Select who can start a Request via a Web Entry](add-and-configure-an-event-element.md#select-who-can-start-a-request-via-a-web-entry)

### Configuration Panel Settings

#### Edit the Element Name

An element name is a human-readable reference for a Process element. Process Modeler automatically assigns the name of a Process element with its element type. However, an element's name can be changed.

Follow these steps to edit the name for a Start Event element:

1. Ensure that the **Maximize Canvas** icon![](../../../.gitbook/assets/maximize-canvas-icon-process-modeler-processes.png)is not enabled. See [Maximize the Process Modeler Canvas View](../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view).
2. Select the Start Event element from the Process model in which to edit its name. The **Configuration** panel displays.
3. Expand the **Configuration** panel if it is not presently expanded. The **Name** field displays.  

   ![](../../../.gitbook/assets/start-event-configuration-name-process-modeler-processes.png)

4. In the **Name** field, edit the selected element's name and then press **Enter**. The element's name is changed.

### Advanced Panel Settings

#### Edit the Identifier Value

Process Modeler automatically assigns a unique value to each Process element added to a Process model. However, an element's identifier value can be changed if it is unique to all other elements in the Process model, including the Process model's identifier value.

{% hint style="warning" %}
All identifier values for all elements in the Process model must be unique.
{% endhint %}

Follow these steps to edit the identifier value for a Start Event element:

1. Ensure that the **Maximize Canvas** icon![](../../../.gitbook/assets/maximize-canvas-icon-process-modeler-processes.png)is not enabled. See [Maximize the Process Modeler Canvas View](../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view).
2. Select the Start Event element from the Process model in which to edit its identifier value. Panels to configure a Start Event element display.
3. Expand the **Advanced** panel if it is not presently expanded. The **Identifier** setting displays. This is a required field.  

   ![](../../../.gitbook/assets/start-event-configuration-identifier-name-process-modeler-processes.png)

4. In the **Identifier** setting, edit the Start Event element's identifier to a unique value from all elements in the Process model and then press **Enter**. The element's identifier value is changed.

### Start Permissions Panel Settings

#### Select the ProcessMaker User That Can Start Requests

When a Start Event element is placed into a Process model, it is not configured to indicate how a Request can start via that Start Event element. Therefore, it must be configured.

Follow these steps to select which ProcessMaker [user](../../../processmaker-administration/add-users/what-is-a-user.md) can start a Request via this Start Event element:

1. Ensure that the **Maximize Canvas** icon![](../../../.gitbook/assets/maximize-canvas-icon-process-modeler-processes.png)is not enabled. See [Maximize the Process Modeler Canvas View](../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view).
2. Select the Start Event element from the Process model in which to select the ProcessMaker user that may start a Request. The **Configuration** setting section displays.
3. Expand the **Start Permissions** panel if it is not presently expanded. The **Type** setting displays.  

   ![](../../../.gitbook/assets/start-permission-request-event-process-modeler-processes.png)

4. From the **Type** drop-down menu, select the **User** option. The **User** drop-down menu displays below the **Start Permission** drop-down menu.  

   ![](../../../.gitbook/assets/start-permission-request-user-event-process-modeler-processes.png)

5. From the **User** drop-down menu, select which ProcessMaker user can start a Request via the Start Event element. That ProcessMaker user may start a Request.

#### Select the ProcessMaker Group That Can Start a Request

When a Start Event element is placed into a Process model, it is not configured to indicate how a Request can start via that Start Event element. Therefore, it must be configured.

Follow these steps to select which ProcessMaker [group](../../../processmaker-administration/assign-groups-to-users/what-is-a-group.md) members can start a Request via this Start Event element:

1. Ensure that the **Maximize Canvas** icon![](../../../.gitbook/assets/maximize-canvas-icon-process-modeler-processes.png)is not enabled. See [Maximize the Process Modeler Canvas View](../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view).
2. Select the Start Event element from the Process model in which to select the ProcessMaker group that may start a Request. The **Configuration** setting section displays.
3. Expand the **Start Permissions** panel if it is not presently expanded. The **Type** setting displays.

   ![](../../../.gitbook/assets/start-permission-request-event-process-modeler-processes.png)

4. From the **Type** drop-down menu, select the **Group** option. The **Group** drop-down menu displays below the **Start Permission** drop-down menu.  

   ![](../../../.gitbook/assets/start-permission-request-group-event-process-modeler-processes.png)

5. From the **Group** drop-down menu, select which ProcessMaker group can start a Request via the Start Event element. Any member of that ProcessMaker group may start a Request.

### Web Entry Panel Settings

#### Select Who Can Start a Request via a Web Entry

{% hint style="info" %}
### ProcessMaker Package Required

Your ProcessMaker instance must have the [Web Entry package](../../../package-development-distribution/package-a-connector/web-entry.md) installed to select who can start a Request via a Web entry. The Web Entry package allows anonymous or authenticated ProcessMaker users to start or participate in Requests via a published URL.

The Web Entry package is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Web Entry package can be installed in your ProcessMaker instance.
{% endhint %}

When a Start Event element is placed into a Process model, Web Entry settings for that element are disabled. Therefore, even if the [Web Entry](../../../package-development-distribution/package-a-connector/web-entry.md) package is installed in your ProcessMaker instance, it must be configured for use.

Follow these steps to select who can start a Request via a Web Entry URL via this Start Event element:

1. Select the Start Event element from the Process model in which to select who may start a Request via a Web Entry URL. The **Configuration** setting section displays.
2. Expand the **Web Entry** setting section. The **Mode** drop-down menu displays.  

   ![](../../../.gitbook/assets/web-entry-mode-start-event-process-modeler-processes.png)

3. From the **Mode** drop-down menu, select one of the following options:
   * **Anonymous:** Select the **Anonymous** option to allow any person who has access to the Web Entry's URL to start a Request. This person is not authenticated as a ProcessMaker user. Note that if an anonymous person starts a Request and a later Task element or [Manual Task](process-modeling-element-descriptions.md#manual-task) element is assigned to the requester, then the following Request error occurs: **This process was started by an anonymous user so this task can not be assigned to the requester**. Therefore, use this option cautiously.  

     ![](../../../.gitbook/assets/web-entry-anonymous-mode-start-event-process-modeler-processes.png)

   * **Authenticated:** Select the **Authenticated** option to require an authenticated ProcessMaker user or group member to start a Request via the Web Entry's URL.  

     ![](../../../.gitbook/assets/web-entry-authenticated-mode-start-event-process-modeler-processes.png)

     Select whether a ProcessMaker user or group member may start a Request via the Web Entry's URL. To do so, follow these guidelines:

     **ProcessMaker User**

     1. From the **Web Entry Start Permission** drop-down menu, select the **User** option. The **User** drop-down menu displays below the **Web Entry Start Permission** drop-down menu.  

        ![](../../../.gitbook/assets/web-entry-authenticated-mode-user-start-event-process-modeler-processes.png)

     2. From the **User** drop-down menu, select which ProcessMaker user may start a Request via the Web Entry's URL.

     **ProcessMaker Group**

     1. From the **Web Entry Start Permission** drop-down menu, select the **Group** option. The **Group** drop-down menu displays below the **Web Entry Start Permission** drop-down menu.  

        ![](../../../.gitbook/assets/web-entry-authenticated-mode-group-start-event-process-modeler-processes.png)

     2. From the **Group** drop-down menu, select which ProcessMaker group may start a Request via the Web Entry's URL. Any member of that ProcessMaker group may start a Request via the Web Entry's URL.
4. From the **Screen Associated** drop-down menu, select the [ProcessMaker Screen](../../design-forms/what-is-a-form.md) that displays when the Web Entry URL is accessed. This drop-down menu displays only [Form](../../design-forms/screens-builder/types-for-screens.md#form) types so the Requester can interact with information in the ProcessMaker Screen. This is a required field.  

   ![](../../../.gitbook/assets/web-entry-screen-associated-start-event-process-modeler-processes.png)

5. From the **Completed Action** drop-down menu, select one of the following options:
   * **Screen:** Select the **Screen** option to indicate that a ProcessMaker Screen displays after the Requester submits the ProcessMaker Screen selected from the **Screen Associated** drop-down menu. **Screen** is the default setting.  

     ![](../../../.gitbook/assets/web-entry-completed-action-screen-start-event-process-modeler-processes.png)

     After the **Screen** option is selected, the **Screen For Completed** drop-down menu displays below the **Completed Action** drop-down menu. From the **Screen For Completed** drop-down menu, select the ProcessMaker Screen that displays after the Requester submits the ProcessMaker Screen selected from the **Screen Associated** drop-down menu. This drop-down menu displays only [Display](../../design-forms/screens-builder/types-for-screens.md#display) types to display a message to the Requester. This is a required field.  

     ![](../../../.gitbook/assets/web-entry-screen-completed-start-event-process-modeler-processes.png)

   * **Url:** Select the **Url** option to indicate that the Requester is redirected to a URL after the Requester submits the ProcessMaker Screen selected from the **Screen Associated** drop-down menu.  

     ![](../../../.gitbook/assets/web-entry-completed-action-url-start-event-process-modeler-processes.png)

     After the **Url** option is selected, the **Url to redirect to** field displays below the **Completed Action** drop-down menu. In the **Url to redirect to** field, enter the URL to redirect the Requester after the Requester submits the ProcessMaker Screen selected from the **Screen Associated** drop-down menu, and then press **Enter**. This is a required field.  

     ![](../../../.gitbook/assets/web-entry-url-start-event-process-modeler-processes.png)
6. The **Web Entry URL** displays the Web Entry URL from which the Requester accesses the ProcessMaker Screen selected from the **Screen Associated** drop-down menu. The **Web Entry URL** value cannot be changed. The Web Entry package generates this URL using the following structure: _`ProcessMaker instance domain`_`/webentry/`_`Web Entry numerical instance`_`/`_`Identifier Value of this Start Event element`_. If necessary, click the **Copy to clipboard** link to copy the **Web Entry URL** value so that it is available in your clipboard.  

   ![](../../../.gitbook/assets/web-entry-url-access-start-event-process-modeler-processes.png)

### Vocabularies Panel Settings

#### Assign ProcessMaker Vocabularies That Validate Request Data from This Element

{% hint style="info" %}
### ProcessMaker Package Required

Your ProcessMaker instance must have the [Vocabularies package](../../../package-development-distribution/package-a-connector/vocabularies.md) installed to assign which ProcessMaker Vocabularies validate Request data at a Start Event element. Use the Vocabularies package to maintain uniform JSON schemas across all assets in your organization. These assets include [Processes](../../viewing-processes/what-is-a-process.md), [ProcessMaker Screens](../../design-forms/what-is-a-form.md), and [ProcessMaker Scripts](../../scripts/what-is-a-script.md).

A ProcessMaker Vocabulary is a JSON schema. The JSON schema describes the data objects, types, and structure that you want in both a machine and human readable format. Apply one or more ProcessMaker Vocabularies to your Processes and/or specific BPMN 2.0 elements in your Process models to ensure the JSON data model in Request data complies with the data structure outlined in the JSON schema that you need to meet regulatory specifications or ensure Request data contains required information.

The Vocabularies package is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Vocabularies package can be installed in your ProcessMaker instance.
{% endhint %}

Assign [ProcessMaker Vocabularies](../../vocabularies-management/what-is-a-vocabulary.md) that validate Request data complies with a specific JSON schema. This is often mandatory for many types of business sectors including banking and healthcare. Ensure the quality and compliance of Request data. For example, during a Loan Application process, ensure that personal information has been included in the Request to that moment in that in-progress Request. The Vocabularies package must be installed in your ProcessMaker instance to make this configuration.

Use a ProcessMaker Vocabulary on a Start Event element when using the [Web Entry package](../../../package-development-distribution/package-a-connector/web-entry.md). After the Request data is submitted from the Web Entry, ProcessMaker Vocabularies assigned to the Start Event element validate the Request data complies with the Vocabulary's JSON schema. See [What is a Vocabulary?](../../vocabularies-management/what-is-a-vocabulary.md) for more information. See [Select Who Can Start a Request via a Web Entry](add-and-configure-an-event-element.md#select-who-can-start-a-request-via-a-web-entry) for information how to use the Web Entry package on a Start Event element.

Each moment ProcessMaker evaluates workflow routing for an in-progress Request, ProcessMaker also evaluates the Request data's conformity to the ProcessMaker Vocabularies applied to the Process and/or a specific BPMN 2.0 element in the Process model. The Request's JSON data model must conform to the ProcessMaker Vocabulary's JSON schema.

During an in-progress Request, if ProcessMaker evaluates that the Request data no longer complies with all ProcessMaker Vocabularies to that moment, the Request status changes from In Progress to Error. The error displays in the [Request summary](../../../using-processmaker/requests/request-details/summary-for-requests-with-errors.md). ProcessMaker Vocabularies are cumulative in an in-progress Request: as the Request progresses, if Request data does not conform with any Vocabulary's JSON schema to that moment in the Request, the Request errors.

If no ProcessMaker Vocabularies are assigned, ProcessMaker does not validate Request data complies with a specific JSON schema prior to continuing workflow for that Request.

One or more ProcessMaker Vocabularies must be created to your ProcessMaker instance before assigning a Vocabulary. See [Create a New Vocabulary](../../vocabularies-management/manage-your-vocabularies/create-a-new-vocabulary.md#create-a-new-processmaker-vocabulary). Multiple ProcessMaker Vocabularies can be assigned to a Start Event element.

Follow these steps to assign ProcessMaker Vocabularies that validate Request data from a Start Event element:

1. Select the Start Event element from the Process model in which to assign ProcessMaker Vocabularies that validate Request data prior to when this element completes. The **Configuration** setting section displays.
2. Expand the **Vocabularies** setting section. The **Assigned** setting displays.
3. Click the![](../../../.gitbook/assets/add-icon.png)icon to add a ProcessMaker Vocabulary. The **Assign Vocabulary** option displays. ![](../../../.gitbook/assets/assign-vocabulary-option-process-modeler-processes.png) 
4. From the **Select Vocabulary** drop-down menu, select a ProcessMaker Vocabulary from which to validate Request data complies with its JSON schema.

   To remove a ProcessMaker Vocabulary that is currently selected, select the Vocabulary again or press `Enter` when the drop-down is visible.

   If no ProcessMaker Vocabularies are configured in your ProcessMaker instance, then the following message displays: **List is empty.** Create at least one ProcessMaker Vocabulary. See [Create a New Vocabulary](../../vocabularies-management/manage-your-vocabularies/create-a-new-vocabulary.md#create-a-new-processmaker-vocabulary).

5. Click **Save**.
6. Repeat Steps 3 through 5 as necessary for each ProcessMaker Vocabulary required to validate Request data complies with its JSON schema.

{% hint style="info" %}
Click the **Remove** icon![](../../../.gitbook/assets/delete-remove-icon.png)from the **Vocabularies** setting to remove a ProcessMaker Vocabulary from assignment to this element.
{% endhint %}

After one or more ProcessMaker Vocabularies are assigned to a Start Event element, the Vocabulary icon displays above that element.

![Start Event element with an assigned ProcessMaker Vocabulary](../../../.gitbook/assets/start-event-vocabulary-process-modeler-processes.png)

## Related Topics

{% page-ref page="process-modeling-element-descriptions.md" %}

{% page-ref page="../../viewing-processes/view-the-list-of-processes/view-your-processes.md" %}

{% page-ref page="../../viewing-processes/view-the-list-of-processes/create-a-process.md" %}

{% page-ref page="../../../using-processmaker/requests/what-is-a-request.md" %}

{% page-ref page="../../../processmaker-administration/add-users/what-is-a-user.md" %}

{% page-ref page="../../../processmaker-administration/assign-groups-to-users/what-is-a-group.md" %}

{% page-ref page="../remove-process-model-elements.md" %}

{% page-ref page="../../../package-development-distribution/package-a-connector/web-entry.md" %}

{% page-ref page="../../../package-development-distribution/package-a-connector/vocabularies.md" %}

{% page-ref page="../../vocabularies-management/what-is-a-vocabulary.md" %}

{% page-ref page="../../vocabularies-management/manage-your-vocabularies/create-a-new-vocabulary.md" %}

{% page-ref page="../../design-forms/screens-builder/types-for-screens.md" %}

{% page-ref page="../../../using-processmaker/requests/request-details/summary-for-requests-with-errors.md" %}

