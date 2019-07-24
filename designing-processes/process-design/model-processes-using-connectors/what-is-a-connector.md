---
description: >-
  Use your Process model to connect with third-party services for that Process's
  Requests.
---

# What is a Connector?

## Overview

ProcessMaker refers to a connector as an integration with a third-party service that has configuration settings that make it easy for any Process Owner to indicate that the Process connects with a third-party service as part of a [Request](../../../using-processmaker/requests/what-is-a-request.md). Connectors are not part of the [BPMN 2.0 specification](https://www.omg.org/spec/BPMN/2.0/About-BPMN/); connectors extend ProcessMaker functionality outside of the BPMN 2.0 specification. A connector can be [packaged](../../../package-development-distribution/first-topic.md) and then installed to a ProcessMaker instance for any Process Owner in that organization to use. After the package is installed, the connector becomes available in Process Modeler. A Process Owner can then use that connector in a Process model like any [BPMN-compliant element](../model-your-process/process-modeling-element-descriptions.md): drag the connector into the Process model and then configure it.

After the connector is configured and the [BPMN-compliant Process](../validate-bpmn-2.0-compliance.md) is deployed, Requests for that Process use that configured connector. For example, if your Process model uses the [Email connector](available-connectors-from-processmaker/email-connector.md) that installs from the [Email package](../../../package-development-distribution/package-a-connector/email.md), Requests for that Process can email Request participants during each Request's workflow using configuration settings and [ProcessMaker Screens](../../design-forms/screens-builder/types-for-screens.md#email) you've specified.

Connectors, and packages to install them, can be created by the ProcessMaker open-source community. However, ProcessMaker provides connectors to Enterprise customers that are not available to the open-source community or the ProcessMaker open-source edition.

{% hint style="info" %}
### Available Connectors from ProcessMaker

See [Available Connectors from ProcessMaker](available-connectors-from-processmaker/). These connectors are not available with the ProcessMaker open-source edition.

While every connector requires a package to install it, not all packages provide connectors. Connectors are used in Process Modeler, while some packages might provide ProcessMaker functionality that do not require a connector. See [Available Packages from ProcessMaker](../../../package-development-distribution/package-a-connector/). These packages are not available with the ProcessMaker open-source edition.

### Looking for Information About Process Model Elements?

See [Process Modeling Element Descriptions](../model-your-process/process-modeling-element-descriptions.md).
{% endhint %}

## Related Topics

{% page-ref page="available-connectors-from-processmaker/email-connector.md" %}

{% page-ref page="../../../package-development-distribution/first-topic.md" %}

{% page-ref page="../../../package-development-distribution/package-a-connector/email.md" %}

