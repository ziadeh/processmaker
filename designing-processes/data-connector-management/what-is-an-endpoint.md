---
description: >-
  Understand what an Endpoint is and how Endpoints are used in ProcessMaker Data
  Connectors to interact with their data sources.
---

# What is an Endpoint?

## What is an Endpoint?

A ProcessMaker Data Connector uses Endpoints to interact with the data source to which it is configured. In this context, an Endpoint is an action the ProcessMaker Data Connector uses to interact with the data source. Similar to Application Program Interface \(API\) endpoints or resources, Endpoints in a ProcessMaker Data Connector call the data source to interact with it, such as to get, create, update, or delete data from the data source. [ProcessMaker Collections](../../collections/what-is-a-collection.md) also have Endpoints with which a ProcessMaker Data Connector interacts with records in that Collection.

## Endpoints for ProcessMaker Collections

A [ProcessMaker Collection](../../collections/what-is-a-collection.md) automatically creates a Data Connector when it is created. [ProcessMaker Data Connectors](what-is-a-data-connector.md) created from a Collection by default have the same name as the Collection that it references.

ProcessMaker Data Connectors created from ProcessMaker Collections have the following [Endpoints](what-is-an-endpoint.md) to interact with that Collection.

| Endpoint | Purpose | Method |
| :--- | :--- | :--- |
| `ListAll` | Get a list of all records in that ProcessMaker Collection. | GET |
| `GetRecord` | Get a record in that ProcessMaker Collection by its record id. | GET |
| `CreateRecord` | Create a new record in that ProcessMaker Collection. | POST |
| `DeleteRecord` | Delete a record from that ProcessMaker Collection by its record id. | DELETE |
| `UpdateRecord` | Update a record in that ProcessMaker Collection by its record id. | PUT |

## Related Topics

{% page-ref page="what-is-a-data-connector.md" %}

{% page-ref page="manage-data-connectors/" %}

{% page-ref page="view-data-connectors.md" %}

{% page-ref page="create-a-new-data-connector.md" %}

{% page-ref page="search-for-a-data-connector.md" %}

{% page-ref page="edit-a-data-connector.md" %}

{% page-ref page="delete-a-data-connector.md" %}

{% page-ref page="data-connector-example.md" %}

