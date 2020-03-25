---
description: Automatically generate PDFs of Display-type ProcessMaker Screens in a Process.
---

# PDF Generator Package

## Overview

{% hint style="info" %}
The PDF Generator [package](../first-topic.md) is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](https://www.processmaker.com/contact/) or ask your ProcessMaker sales representative how the PDF Generator package can be installed in your ProcessMaker instance.
{% endhint %}

Use the PDF Generator package to automatically generate PDFs of [Display](../../designing-processes/design-forms/screens-builder/types-for-screens.md#display)-type [ProcessMaker Screens](../../designing-processes/design-forms/what-is-a-form.md) during [Requests](../../using-processmaker/requests/what-is-a-request.md).

After the PDF Generator package is installed to your ProcessMaker instance, the [PDF Generator connector](../../designing-processes/process-design/model-processes-using-connectors/available-connectors-from-processmaker/pdf-generator-connector.md) integrates into Process Modeler. Use the PDF Generator [connector](../../designing-processes/process-design/model-processes-using-connectors/what-is-a-connector.md) in your Process models as you would [BPMN elements](../../designing-processes/process-design/model-your-process/): drag and place the PDF Generator connector into your Process model, configure its settings, and then add its [incoming and outgoing Sequence Flow elements](../../designing-processes/process-design/model-your-process/the-quick-toolbar.md).

Use the PDF Generator connector in your Process models when you want to provide a printable copy of a Display-type ProcessMaker Screen, such as for Request summaries or purchase order receipts.

When the PDF Generator connector successfully generates the PDF during an in-progress Request, the PDF output can be downloaded from the [**Files** tab in its Request summary](../../using-processmaker/requests/request-details/summary-for-in-progress-requests.md#files-associated-with-the-request). The PDF Generator names the PDF output the same as the ProcessMaker Screen from which the PDF was generated. As long as the PDF Generator successfully generates the PDF, the PDF output remains available from that Request's summary regardless of that Request's status.

See the following topics:

* [PDF Generator Connector](../../designing-processes/process-design/model-processes-using-connectors/available-connectors-from-processmaker/pdf-generator-connector.md)
* \*\*\*\*[**Files** tab for in-progress Requests](../../using-processmaker/requests/request-details/summary-for-in-progress-requests.md#files-associated-with-the-request), which contains the same information as that for other Request statuses

## Related Topics

{% page-ref page="../first-topic.md" %}

{% page-ref page="../../designing-processes/process-design/model-processes-using-connectors/available-connectors-from-processmaker/pdf-generator-connector.md" %}

{% page-ref page="../../using-processmaker/requests/request-details/" %}

{% page-ref page="../../designing-processes/design-forms/what-is-a-form.md" %}

{% page-ref page="../../designing-processes/design-forms/screens-builder/types-for-screens.md" %}

