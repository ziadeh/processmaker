---
description: Automatically generate PDFs of Display-type ProcessMaker Screens in a Process.
---

# PDF Generator Connector

## Overview

The PDF Generator [connector](../what-is-a-connector.md) is part of the [PDF Generator package](../../../../package-development-distribution/package-a-connector/pdf-generator-package.md) that can automatically generate PDFs of [Display](../../../design-forms/screens-builder/types-for-screens.md#display)-type [ProcessMaker Screens](../../../design-forms/what-is-a-form.md) during [Requests](../../../../using-processmaker/requests/what-is-a-request.md).

{% hint style="info" %}
### ProcessMaker Package Required

The PDF Generator connector requires that the [PDF Generator package](../../../../package-development-distribution/package-a-connector/pdf-generator-package.md) be installed in your ProcessMaker instance. The PDF Generator connector and the PDF Generator [package](../../../../package-development-distribution/first-topic.md) are not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](https://www.processmaker.com/contact/) or ask your ProcessMaker sales representative how the PDF Generator connector can be installed in your ProcessMaker instance.
{% endhint %}

## Add a PDF Generator Connector to the Process Model

{% hint style="info" %}
### ProcessMaker Package Required

The [PDF Generator package](../../../../package-development-distribution/package-a-connector/pdf-generator-package.md) is required. The PDF Generator [package](../../../../package-development-distribution/first-topic.md) installs the PDF Generator connector, which is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](https://www.processmaker.com/contact/) or ask your ProcessMaker sales representative how the PDF Generator connector can be installed in your ProcessMaker instance.

### Permissions Required

Your ProcessMaker user account or group membership must have the following permissions to add a PDF Generator connector to the Process model unless your user account has the **Make this user a Super Admin** setting selected:

* Processes: Edit Processes
* Processes: View Processes

See the [Process](../../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to add a PDF Generator connector to the Process model:

1. [View your Processes](../../../viewing-processes/view-the-list-of-processes/view-your-processes.md#view-all-active-processes). The **Processes** page displays.
2. [Create a new Process](../../../viewing-processes/view-the-list-of-processes/create-a-process.md) or click the **Open Modeler** icon![](../../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)to edit the selected Process model. Process Modeler displays.
3. Locate the **PDF Generator** connector in the **Elements and Connectors** palette that is to the left of the Process Modeler canvas. If the [**Hide Menus** button](../../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view)![](../../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is enabled, the **Elements and Connectors** palette displays the **PDF Generator** connector's icon![](../../../../.gitbook/assets/pdf-generator-icon-process-modeler-package-processes.png). ![](../../../../.gitbook/assets/pdf-generator-control-package-process-modeler-processes.png) 
4. Drag the connector into the Process model canvas where you want to place it. If a Pool element is in your Process model, the PDF Generator connector cannot be placed outside of the Pool element.

![Actions By Email connector](../../../../.gitbook/assets/actions-by-email-control-process-modeler-package-processes.png)

{% hint style="info" %}
After adding the PDF Generator connector, consider adding the following Boundary-type Process model elements to design business solutions when your best-case scenarios don't happen:

* [Boundary Timer Event](../../model-your-process/add-and-configure-boundary-timer-event-elements.md#add-a-boundary-timer-event-element) element \([Don't know what that is?](../../model-your-process/process-modeling-element-descriptions.md#boundary-timer-event)\)
* [Boundary Error Event](../../model-your-process/add-and-configure-boundary-error-event-elements.md#add-a-boundary-error-event-element) element \([Don't know what that is?](../../model-your-process/process-modeling-element-descriptions.md#boundary-error-event)\)
{% endhint %}

After the PDF Generator connector is placed into the Process model, you may move it by dragging it to the new location.

{% hint style="warning" %}
Moving a PDF Generator connector has the following limitations in regards to the following Process model elements:

* **Pool element:** If the PDF Generator connector is inside of a [Pool](../../model-your-process/process-modeling-element-descriptions.md#pool) element, it cannot be moved outside of the Pool element. If you attempt to do so, Process Modeler places the PDF Generator connector inside the Pool element closest to where you attempt to move it.
* **Lane element:** If the PDF Generator connector is inside of a Lane element, it can be moved to another Lane element in the same Pool element. However, the PDF Generator connector cannot be moved outside of the Pool element.
{% endhint %}

## Settings

{% hint style="info" %}
### ProcessMaker Package Required

The [PDF Generator package](../../../../package-development-distribution/package-a-connector/pdf-generator-package.md) is required. The PDF Generator [package](../../../../package-development-distribution/first-topic.md) installs the PDF Generator connector, which is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](https://www.processmaker.com/contact/) or ask your ProcessMaker sales representative how the PDF Generator connector can be installed in your ProcessMaker instance.

### Permissions Required

Your ProcessMaker user account or group membership must have the following permissions to configure a PDF Generator connector unless your user account has the **Make this user a Super Admin** setting selected:

* Processes: Edit Processes
* Processes: View Processes

See the [Process](../../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to configure a PDF Generator connector:

1. Ensure that the **Hide Menus** button![](../../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is not enabled. See [Maximize the Process Modeler Canvas View](../../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view).
2. Select the PDF Generator connector from the Process model in which to configure its settings. The **Configuration** panel displays.

## Related Topics



