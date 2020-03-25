---
description: Request participants can make decisions via email with the click of a button.
---

# Actions By Email Package

## Overview

{% hint style="info" %}
The Actions By Email [package](../first-topic.md) is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](https://www.processmaker.com/contact/) or ask your ProcessMaker sales representative how the Actions By Email package can be installed in your ProcessMaker instance.
{% endhint %}

Use the Actions By Email package to send emails automatically during your Processes' [Requests](../../using-processmaker/requests/what-is-a-request.md). During a Request, email recipients can make business decisions directly in the email by clicking on a button to indicate that decision. The email response returns to your ProcessMaker instance to acknowledge the decision, then routes workflow for that Request. While an email may be sent to multiple recipients, only the first response is acknowledged to affect workflow in that Request.

The Actions By Email package has the [Actions By Email](../../designing-processes/process-design/model-processes-using-connectors/available-connectors-from-processmaker/actions-by-email-connector.md) connector that integrates into Process Modeler. Use the Actions By Email connector as you would BPMN elements: drag and place the Actions By Email connector into your Process model, configure its settings, and then add its [incoming and outgoing Sequence Flow elements](../../designing-processes/process-design/model-your-process/the-quick-toolbar.md).

When the Actions By Email connector triggers during an in-progress Request, ProcessMaker sends an email from the "no-reply@processmaker.net" email address to one email recipient so that this Request participant can make a decision as part of the Request. For example, this Request participant must make a decision to approve or deny a vacation request or for a purchase. The email recipient receives an email with buttons in the email to easily indicate the decision.

![Example email the Actions By Email connector sends to an email recipient](../../.gitbook/assets/actions-by-email-package.png)

After the email recipient clicks a button to indicate the decision, ProcessMaker receives the response and uses the indicated decision as part of the Request routing. For example, if you grant a leave request, the Request routes differently than if you deny that leave request.

See [Actions By Email Connector](../../designing-processes/process-design/model-processes-using-connectors/available-connectors-from-processmaker/actions-by-email-connector.md).

## Related Topics

{% page-ref page="../../designing-processes/process-design/model-processes-using-connectors/available-connectors-from-processmaker/actions-by-email-connector.md" %}

{% page-ref page="../first-topic.md" %}

{% page-ref page="../../designing-processes/process-design/model-processes-using-connectors/what-is-a-connector.md" %}

