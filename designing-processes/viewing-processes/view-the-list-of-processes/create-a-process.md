---
description: Create a new Process to begin your Process modeling.
---

# Create a New Process

## Create a New Process

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to create a new Process unless your user account has the **Make this user a Super Admin** setting selected:

* Processes: View Processes
* Processes: Create Processes

See the [Processes](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to create a new Process:

1. [View your active Processes.](./#view-your-processes) The **Processes** tab displays.
2. Click the **+Process** button. The **Create Process** screen displays.  

   ![](../../../.gitbook/assets/add-a-process-screen-processes.png)

3. In the **Name** field, enter the name of the Process. This is a required field.
4. In the **Description** field, enter a description of the Process. This is a required field.
5. From the **Category** drop-down, select a category to associate with the Process. This is a required field. See [Process Categories](../process-categories.md) for more information.
6. Optionally, upload a third-party [BPMN 2.0 compliant](https://www.omg.org/spec/BPMN/2.0/About-BPMN/) BPMN file from which to use its Process model in ProcessMaker. Do not use this function to [import a ProcessMaker version 4](import-a-bpmn-compliant-process.md) `.json` file.

   To do so, follow these guidelines:

   1. Ensure that the third-party process model is BPMN 2.0 compliant and has the `.BPMN` file extension.
   2. Click the **Upload File** button, and then browse for the third-party `.BPMN` file to use as your Process model.

7. Click **Save**.

Your new Process opens in Process Modeler. If you uploaded a third-party `.BPMN` file, Process model elements that comply with the [BPMN 2.0 specification](https://www.omg.org/spec/BPMN/2.0/About-BPMN/) display. See [Process Modeling](../../process-design/) for topics.

{% hint style="warning" %}
If you upload a third-party `.BPMN` file to use as your Process model, any Process model elements that do not comply with the [BPMN 2.0 specification](https://www.omg.org/spec/BPMN/2.0/About-BPMN/) cannot be used after the Process is created. An error displays for any invalid Process model elements.
{% endhint %}

## Related Topics

{% page-ref page="../what-is-a-process.md" %}

{% page-ref page="view-your-processes.md" %}

{% page-ref page="import-a-bpmn-compliant-process.md" %}

{% page-ref page="search-for-a-process.md" %}

{% page-ref page="export-a-bpmn-compliant-process.md" %}

{% page-ref page="../process-categories.md" %}

{% page-ref page="edit-the-name-description-category-or-status-of-a-process.md" %}

{% page-ref page="remove-a-process.md" %}

{% page-ref page="restore-a-process.md" %}

{% page-ref page="../../process-design/model-your-process/" %}



