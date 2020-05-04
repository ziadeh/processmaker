---
description: >-
  Understand what an Endpoint is and how Endpoints are used in ProcessMaker Data
  Connectors to interact with their data sources.
---

# What is an Endpoint?

## What is an Endpoint?

A ProcessMaker Data Connector uses Endpoints to interact with the data source to which it is configured. In this context, an Endpoint is an action the ProcessMaker Data Connector uses to interact with the data source. Similar to Application Program Interface \(API\) endpoints or resources, Endpoints in a ProcessMaker Data Connector call the data source to interact with it.

## What is a Resource?

The data source, such as an API, expects an interaction from a ProcessMaker Data Connector to one of its components which the data source may reference as an endpoint or a resource. An endpoint/resource expects a specific manner in which a ProcessMaker Data Connector's Endpoint interacts with it, which is called a method.

## What is a Method?

How an ProcessMaker Data Connector's Endpoint interacts with a data source resource is called a method. When a ProcessMaker Data Connector interacts with a third-party API's resource, that resource expects a method from which the ProcessMaker Data Connect's Endpoint interacts with that resource. A ProcessMaker Data Connector may use any of the following methods to interact with a data source:

* **GET:** The GET method retrieves a resource from the data source.
* **POST:** The POST method creates a resource in the data source.
* **PUT:** The PUT method does one of the following:
  * **Update:** The PUT method may update data an existing resource in the data source.
  * **Create:** The PUT method may create a resource in the data source.
* **PATCH:** The PATCH method partially modifies an existing resource.
* **DELETE:** The DELETE method removes an existing resource from the data source.

A third-party API's resource may also expect specific parameters from the ProcessMaker Data Connector's Endpoint to properly interact with that resource. Those parameters and their settings ideally are documented in that third-party API's documentation so you understand what a resource expects in the interaction. Parameters are added at the end of the base URL used to connect with that data source's resource and ideally would also be documented in that third-party API's documentation. How to configure parameter settings to interact with an endpoint/method is outside the scope of this documentation.

{% hint style="info" %}
View this [ProcessMaker API documentation](https://staging-pm4.processmaker.net/api/documentation) to quickly view how to use the ProcessMaker RESTful API without testing API endpoints.
{% endhint %}

[ProcessMaker Collections](../../collections/what-is-a-collection.md) also have Endpoints with which a ProcessMaker Data Connector interacts with records in that Collection.

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

