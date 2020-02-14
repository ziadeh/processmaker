---
description: Send emails automatically during your Processes' Requests.
---

# Send Email Package

## Overview

{% hint style="info" %}
The Send Email [package](../first-topic.md) is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](https://www.processmaker.com/contact/) or ask your ProcessMaker sales representative how the Send Email package can be installed in your ProcessMaker instance.
{% endhint %}

Use the Send Email package to send emails automatically during your Processes' [Requests](../../using-processmaker/requests/what-is-a-request.md). The Send Email package has the following components after it is installed to your ProcessMaker instance:

* **Process model connector:** A [Send Email connector](../../designing-processes/process-design/model-processes-using-connectors/available-connectors-from-processmaker/email-connector.md) is a control that integrates into Process Modeler. Use the Send Email connector as you would [BPMN controls](../../designing-processes/process-design/model-your-process/): drag and place the Email connector into your Process model, configure its settings, and then add its [incoming and outgoing Sequence Flow elements](../../designing-processes/process-design/model-your-process/the-quick-toolbar.md).
* **New ProcessMaker Screen type:** The Send Email package adds a new [ProcessMaker Screen](../../designing-processes/design-forms/what-is-a-form.md) type called [Email](../../designing-processes/design-forms/screens-builder/types-for-screens.md#email). Use an email-type ProcessMaker Screen to compose the email body for email messages to sent with the Send Email package. In doing so, use **Variable Name** setting values from ProcessMaker Screens referenced in a Process model to customize the sent email. The content of referenced Email-type ProcessMaker Screens become the email body content. When creating a new ProcessMaker Screen, select the **Email** type.
* **Send email notifications from Task and Manual Task elements:** Send email notifications when a [Task](../../designing-processes/process-design/model-your-process/process-modeling-element-descriptions.md#task) or [Manual Task](../../designing-processes/process-design/model-your-process/process-modeling-element-descriptions.md#manual-task) element triggers, completes, or under a specified condition. Include either plain text or the contents of an Email-type ProcessMaker Screen as the email body content.

## Related Topics

{% page-ref page="../../designing-processes/process-design/model-processes-using-connectors/available-connectors-from-processmaker/email-connector.md" %}

{% page-ref page="../first-topic.md" %}

{% page-ref page="../../designing-processes/process-design/model-processes-using-connectors/what-is-a-connector.md" %}

{% page-ref page="../../designing-processes/design-forms/manage-forms/create-a-new-form.md" %}

{% page-ref page="../../designing-processes/design-forms/screens-builder/types-for-screens.md" %}

{% page-ref page="../../designing-processes/process-design/model-your-process/add-and-configure-task-elements.md" %}

{% page-ref page="../../designing-processes/process-design/model-your-process/add-and-configure-manual-task-elements.md" %}

