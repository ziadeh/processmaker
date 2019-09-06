---
description: >-
  Use ProcessMaker Query Language (PMQL) to search through Requests, Tasks, and
  Collection records in your ProcessMaker organization.
---

# Search ProcessMaker Data using PMQL

## Overview

ProcessMaker Query Language \(PMQL\) is a custom ProcessMaker language to search through ProcessMaker data in your organization. Similar in ways to SQL, which is standard language for storing, manipulating and retrieving data in databases, use PMQL to find [Request](requests/what-is-a-request.md), [Task](task-management/what-is-a-task.md), and ProcessMaker [Collection](../collections/what-is-a-collection.md) record information. PMQL uses both common SQL syntax as well as custom syntax parameters customized to find ProcessMaker data.

Use PMQL in the following ways:

* **Requests:** Perform [advanced searches through Requests](requests/search-for-a-request.md#advanced-search-for-a-request).
* **Tasks:** Perform [advanced searches through your Tasks](task-management/search-for-a-task.md#advanced-search-for-a-task).
* **ProcessMaker Collection records:** [Search through the records](../collections/manage-records-in-a-collection/search-for-a-record-in-a-collection.md#search-records-in-a-processmaker-collection) in a ProcessMaker Collection.

PMQL is customized with particular syntax parameters to find ProcessMaker data unique to each of these ProcessMaker data. See the following sections regarding how to use PMQL:

* [PMQL in Request searches](search-processmaker-data-using-pmql.md#pmql-syntax-for-requests)
* [PMQL in Task searches](search-processmaker-data-using-pmql.md#pmql-syntax-for-tasks)
* [PMQL in ProcessMaker Collection searches](search-processmaker-data-using-pmql.md#pmql-syntax-for-processmaker-collections)
* [Standard SQL Syntax that PMQL supports](search-processmaker-data-using-pmql.md#standard-sql-syntax-pmql-supports)

## PMQL Syntax for Requests

Use [standard SQL syntax](search-processmaker-data-using-pmql.md#standard-sql-syntax-pmql-supports) that ProcessMaker Query Language \(PMQL\) supports in conjunction with the following PMQL parameters to perform [advanced Request searches](requests/search-for-a-request.md#advanced-search-for-a-request).

### Processes Associated with the Request



### Request Information



### ProcessMaker Magic Variables



### Request Status



### Requesters



### Request Participants



### Request Age



## PMQL Syntax for Tasks

Use [standard SQL syntax](search-processmaker-data-using-pmql.md#standard-sql-syntax-pmql-supports) that ProcessMaker Query Language \(PMQL\) supports in conjunction with the following PMQL parameters to perform [advanced Task searches](task-management/search-for-a-task.md#advanced-search-for-a-task).

### Processes Associated with the Task's Request

See [Processes Associated with the Request](search-processmaker-data-using-pmql.md#processes-associated-with-the-request).

### Request Information

See [Request Information](search-processmaker-data-using-pmql.md#request-information).

### ProcessMaker Magic Variables

See [ProcessMaker Magic Variables](search-processmaker-data-using-pmql.md#processmaker-magic-variables).

### Task Name



### Task Status



### Task Age

See [Request Age](search-processmaker-data-using-pmql.md#request-age).

## PMQL Syntax for ProcessMaker Collections

{% hint style="info" %}
### ProcessMaker Package Required

To search records in a ProcessMaker Collection, the [Collections package](../package-development-distribution/package-a-connector/collections.md) must be installed in your ProcessMaker instance. The [Collections](../collections/what-is-a-collection.md) package is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Collections package can be installed in your ProcessMaker instance.
{% endhint %}

Use [standard SQL syntax](search-processmaker-data-using-pmql.md#standard-sql-syntax-pmql-supports) that ProcessMaker Query Language \(PMQL\) supports in conjunction with the following PMQL parameters to [search records](../collections/manage-records-in-a-collection/search-for-a-record-in-a-collection.md#search-records-in-a-processmaker-collection) in a ProcessMaker Collection.

### Record ID



### Record Information



### Record Age



## Standard SQL Syntax PMQL Supports

ProcessMaker Query Language \(PMQL\) supports the following standard SQL syntax:

### Operators

PMQL supports the following operators in and between search criterion:

* Equal to: `=`
* Not equal to: `!=`
* Less than: `<`
* Greater than: `>`
* Less than or equal to: `<=`
* Greater than or equal to: `>=`
* Not equal to: `<>`
* Use `AND` operators between each set of search criterion to search using multiple criteria.
* Use the `AND` operator between criterion to search for multiple specified criterion.
* Use the `OR` operator between criterion to search for either specified criterion.

Spaces are allowed between operators. Example: `data.last_name = "Canera"`.

### Wildcard Syntax

Use `%` as a wildcard character to substitute one or more characters in any PMQL-supported parameter that uses a string. Include the `%` character within the quotation marks \(`"`\) of the parameter. Examples:

* `request = "P%"` finds Requests associated with all Processes that begin with `P`
* `status = "c%"` finds Requests with both Completed and Canceled statuses
* `data.last_name = "C%"` finds all values that begin with `C` in the `last_name` key name
* `task = "T%"` finds all Tasks that begin with `T`

## Related Topics





