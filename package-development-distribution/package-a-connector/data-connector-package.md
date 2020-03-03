---
description: >-
  Access both ProcessMaker Collection records and third-party data sources from
  any ProcessMaker asset, including ProcessMaker Screens, ProcessMaker Scripts,
  and Process models.
---

# Data Connector Package

## Overview

{% hint style="info" %}
The Data Connector [package](../first-topic.md) is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](https://www.processmaker.com/contact/) or ask your ProcessMaker sales representative how the Data Connector package can be installed in your ProcessMaker instance.
{% endhint %}

Use the Data Connector package to connect your ProcessMaker assets, such as [ProcessMaker Screens](../../designing-processes/design-forms/what-is-a-form.md), [ProcessMaker Scripts](../../designing-processes/scripts/what-is-a-script.md), and [ProcessMaker Collections](../../collections/what-is-a-collection.md) to and from third-party data sources such as Application Program Interfaces \(APIs\). After a ProcessMaker Data Connector is created, ProcessMaker designers can reference the data source via the ProcessMaker Data Connector from within their ProcessMaker assets. Incorporating data from external data sources such as APIs helps you make business decisions from information outside of your ProcessMaker instance.

 Below are a few ways to use ProcessMaker Data Connectors:

* In [Screen Builder](../../designing-processes/design-forms/screens-builder/what-is-screens-builder.md), use the records in a ProcessMaker Collection as [Select List](../../designing-processes/design-forms/screens-builder/control-descriptions/select-list-control-settings.md) control options in a [ProcessMaker Screen](../../designing-processes/design-forms/what-is-a-form.md).
* In Screen Builder, use a [Watcher](../../designing-processes/design-forms/screens-builder/manage-watchers/what-is-a-watcher.md) to act on data from a ProcessMaker Data Connector when the value of a Screen control changes.
* While [modeling a Process](../../designing-processes/process-design/what-is-process-modeling.md), place a [Data Connector connector](../../designing-processes/process-design/model-processes-using-connectors/available-connectors-from-processmaker/data-connector-connector.md) into your [Process](../../designing-processes/viewing-processes/what-is-a-process.md) model to automatically access records from a ProcessMaker Collection records or access external data from a third-party data source to incorporate new information into [Requests](../../using-processmaker/requests/what-is-a-request.md) started from your Process. After this external data has been incorporated into Requests, make business decisions based on that data.

The Data Connector package has the following components after it is installed to your ProcessMaker instance:

* **Manage ProcessMaker Data Connectors:** [Manage your ProcessMaker Data Connectors](../../designing-processes/data-connector-management/manage-data-connectors/) from one place. After your ProcessMaker Data Connectors are configured, your Process designers can access them from their ProcessMaker assets.
* **Process model connector:** A [Data Connector connector](../../designing-processes/process-design/model-processes-using-connectors/available-connectors-from-processmaker/data-connector-connector.md) is a control that integrates into Process Modeler. Use the Data Connector connector as you would [BPMN controls](../../designing-processes/process-design/model-your-process/): drag and place the Data Connector connector into your Process model, configure its settings, and then add its [incoming and outgoing Sequence Flow elements](../../designing-processes/process-design/model-your-process/the-quick-toolbar.md).
* **Screen Builder controls:** Interact with ProcessMaker Collection records and third-party data source directly from within specific Screen Builder controls, such as the [Select List](../../designing-processes/design-forms/screens-builder/control-descriptions/select-list-control-settings.md) and [Record List](../../designing-processes/design-forms/screens-builder/control-descriptions/record-list-control-settings.md) controls.

## Related Topics

{% page-ref page="../first-topic.md" %}

{% page-ref page="collections.md" %}

{% page-ref page="../../designing-processes/data-connector-management/what-is-a-data-connector.md" %}

{% page-ref page="../../collections/what-is-a-collection.md" %}

{% page-ref page="../../designing-processes/scripts/what-is-a-script.md" %}

{% page-ref page="../../designing-processes/design-forms/what-is-a-form.md" %}

{% page-ref page="../../designing-processes/viewing-processes/what-is-a-process.md" %}

{% page-ref page="../../using-processmaker/requests/what-is-a-request.md" %}

