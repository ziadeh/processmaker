---
description: >-
  Understand what a ProcessMaker Data Connector is and how ProcessMaker
  designers can interact with a data source from within their ProcessMaker
  assets such as Screen Builder and Process Modeler.
---

# What is a Data Connector?

## Overview

In ProcessMaker, a Data Connector connects your ProcessMaker assets to a data source. Data sources may include [ProcessMaker Collections](../../collections/what-is-a-collection.md) and third-party data sources such as Application Program Interfaces \(APIs\). After a ProcessMaker Data Connector is created, ProcessMaker designers can reference the data source via the ProcessMaker Data Connector from within their ProcessMaker assets. Each ProcessMaker Data Connector is configured with which data source that Data Connector interacts, making it easy for ProcessMaker designers to interact with technical data sources such as APIs. Incorporating data from external data sources helps you make business decisions from information outside of your ProcessMaker instance.

 Below are a few ways to use ProcessMaker Data Connectors:

* In [Screen Builder](../design-forms/screens-builder/what-is-screens-builder.md), use the records in a ProcessMaker Collection as [Select List](../design-forms/screens-builder/control-descriptions/select-list-control-settings.md) control options in a [ProcessMaker Screen](../design-forms/what-is-a-form.md).
* In Screen Builder, use a [Watcher](../design-forms/screens-builder/manage-watchers/what-is-a-watcher.md) to act on data from a ProcessMaker Data Connector when the value of a Screen control changes.
* While [modeling a Process](../process-design/what-is-process-modeling.md), place a [Data Connector connector](../process-design/model-processes-using-connectors/available-connectors-from-processmaker/data-connector-connector.md) into your [Process](../viewing-processes/what-is-a-process.md) model to automatically access records from a ProcessMaker Collection records or access external data from a third-party data source to incorporate new information into [Requests](../../using-processmaker/requests/what-is-a-request.md) started from your Process. After this external data has been incorporated into Requests, make business decisions based on that data.

ProcessMaker Data Connectors use [Endpoints](what-is-an-endpoint.md) with which to interact with a data source.

## Related Topics

{% page-ref page="what-is-an-endpoint.md" %}

{% page-ref page="manage-data-connectors/" %}

{% page-ref page="view-data-connectors.md" %}

{% page-ref page="create-a-new-data-connector.md" %}

{% page-ref page="search-for-a-data-connector.md" %}

{% page-ref page="edit-a-data-connector.md" %}

{% page-ref page="delete-a-data-connector.md" %}

{% page-ref page="data-connector-example.md" %}

