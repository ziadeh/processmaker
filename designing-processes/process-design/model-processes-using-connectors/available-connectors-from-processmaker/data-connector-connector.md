---
description: >-
  Access both ProcessMaker Collection records and third-party data sources from
  Process models, then make workflow routing decisons based on that data.
---

# Data Connector Connector

## Overview

The [Data Connector](../../../data-connector-management/what-is-a-data-connector.md) connector is part of the [Data Connector package](../../../../package-development-distribution/package-a-connector/data-connector-package.md). Use the Data Connector connector in your Process models in the following ways:

* **Access ProcessMaker Collections:** From your Process model, access any [ProcessMaker Collection](../../../../collections/what-is-a-collection.md) in your ProcessMaker instance, including viewing, creating, updating, and/or delete records in a selected Collection. Every ProcessMaker Collection provides [Endpoints](../../../data-connector-management/what-is-a-data-connector.md#what-is-an-endpoint) to access that Collection. See [Endpoints for ProcessMaker Collections](../../../data-connector-management/what-is-a-data-connector.md#endpoints-for-processmaker-collections). Use the Data Connector connector to access a ProcessMaker Collection, then incorporate record information from that Collection into your Process for every [Request](../../../../using-processmaker/requests/what-is-a-request.md). By incorporating information into the Request data, you can make business decisions using it.
* **Access third-party data sources:** Similarly to ProcessMaker Collections, call data from a third-party data source such as an Application Program Interfaces \(API\). Reference data from that API, then incorporate it into your Process's Request data.

{% hint style="info" %}
### ProcessMaker Package Required

The Data Connector connector requires that the [Data Connector package](../../../../package-development-distribution/package-a-connector/data-connector-package.md) be installed in your ProcessMaker instance. The Data Connector connector and the Data Connector [package](../../../../package-development-distribution/first-topic.md) are not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](https://www.processmaker.com/contact/) or ask your ProcessMaker sales representative how the Data Connector connector can be installed in your ProcessMaker instance.
{% endhint %}

## Related Topics



