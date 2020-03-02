---
description: >-
  Understand what a Data Connector is and how ProcessMaker designers can
  reference a configured data source in their ProcessMaker assets.
---

# What is a Data Connector?

## Overview

In ProcessMaker, a Data Connector connects your ProcessMaker assets to [ProcessMaker Collections](../../collections/what-is-a-collection.md) and third-party data sources, such as Application Program Interfaces \(APIs\). After a Data Connector is created, ProcessMaker designers can reference the data source to which the Data Connector connects for their ProcessMaker assets. Below are a few ways to use Data Connectors:

* Use the records in a ProcessMaker Collection as [Select List](../design-forms/screens-builder/control-descriptions/select-list-control-settings.md) control options in a [ProcessMaker Screen](../design-forms/what-is-a-form.md).
* Use a [Watcher](../design-forms/screens-builder/manage-watchers/what-is-a-watcher.md) to act on data from a ProcessMaker Data Connector when the value of a Screen control changes.
* Place a ProcessMaker Data Connector into your [Process](../viewing-processes/what-is-a-process.md) model so that your Process automatically accesses ProcessMaker Collection records or data from a third-party data source for use during a [Request](../../using-processmaker/requests/what-is-a-request.md). After accessing the data source, that data becomes part of the Request data.

## What is an Endpoint?

A Data Connection contains settings how to call an Endpoint. In this context, an Endpoint refers to any data connection that can perform an action. This includes API endpoints as well as ProcessMaker Collection Endpoints.

## Endpoints for ProcessMaker Collections

Every [ProcessMaker Collection](../../collections/what-is-a-collection.md) has the following Endpoints to perform actions against it. These Endpoints are exposed in a Data Connector automatically when a ProcessMaker Collection is created; that Data Connector has the same name as the ProcessMaker Collection.

| Endpoint | Purpose | Method |
| :--- | :--- | :--- |
| `ListAll` | Get a list of all records in that ProcessMaker Collection. | GET |
| `GetRecord` | Get a record in that ProcessMaker Collection by its record id. | GET |
| `CreateRecord` | Create a new record in that ProcessMaker Collection. | POST |
| `DeleteRecord` | Delete a record from that ProcessMaker Collection by its record id. | DELETE |
| `UpdateRecord` | Update a record in that ProcessMaker Collection by its record id. | PUT |

## Related Topics



