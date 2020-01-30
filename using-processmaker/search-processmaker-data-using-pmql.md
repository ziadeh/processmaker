---
description: >-
  Use PMQL to search through Requests, Tasks, and Collection records in your
  ProcessMaker organization.
---

# Search ProcessMaker Data Using ProcessMaker Query Language \(PMQL\)

## Overview

ProcessMaker Query Language \(PMQL\) is a custom ProcessMaker language to search through ProcessMaker data in your organization. Similar in ways to SQL, which is a standard language for storing, manipulating and retrieving data in databases, use PMQL to find [Requests](requests/what-is-a-request.md), [Tasks](task-management/what-is-a-task.md), and ProcessMaker [Collection](../collections/what-is-a-collection.md) record information. PMQL uses both common SQL syntax as well as custom syntax parameters to find ProcessMaker data.

Use PMQL in the following ways:

* **Requests:** Perform [advanced searches to find Request summaries](requests/search-for-a-request.md#advanced-search-for-a-request).
* **Tasks:** Perform [advanced searches through your Tasks](task-management/search-for-a-task.md#advanced-search-for-a-task).
* **ProcessMaker Collection records:** [Search through the records](../collections/manage-records-in-a-collection/search-for-a-record-in-a-collection.md#search-records-in-a-processmaker-collection) in a ProcessMaker Collection.
* **ProcessMaker Scripts:** Include PMQL searches in a ProcessMaker Script such that the search occurs when the Script runs.

PMQL is customized with particular syntax parameters to find ProcessMaker data unique to each of these ProcessMaker data. See the following sections regarding how to use PMQL:

* [PMQL in Request searches](search-processmaker-data-using-pmql.md#pmql-syntax-for-requests)
* [PMQL in Task searches](search-processmaker-data-using-pmql.md#pmql-syntax-for-tasks)
* [PMQL in ProcessMaker Collection searches](search-processmaker-data-using-pmql.md#pmql-syntax-for-processmaker-collections)
* [Standard SQL Syntax that PMQL supports](search-processmaker-data-using-pmql.md#standard-sql-syntax-pmql-supports)

## PMQL Syntax for Requests

Use [standard SQL syntax](search-processmaker-data-using-pmql.md#standard-sql-syntax-pmql-supports) that ProcessMaker Query Language \(PMQL\) supports in conjunction with the following PMQL parameters to perform [advanced Request searches](requests/search-for-a-request.md#advanced-search-for-a-request).

### Processes Associated with the Request

Use the following syntax as a guide to include one Process in your search criteria:

`(request = "exact Process name including spaces")`

Use the following syntax as a guide to include two or more Processes in your search criteria:

`(request = "Process name 1" OR request = "Process name 2")`

### Request Information

Use the following syntax as a guide to reference Request-related information in your search criteria.

`data.RequestData`

`data.` represents that what follows derives from Request information, as is used in JSON dot notation. To derive that Request information, view the [**Data** tab in the summary for a completed Request](requests/request-details/summary-for-completed-requests.md#editable-request-data) to view the data from a completed Request, and then use the specific key name \(represented in red-colored text\) in place of `RequestData` in this syntax. Spaces are allowed between operators. Example: `data.last_name = "Canera"`. Note that your ProcessMaker user account or group membership must have the [Requests: Edit Request Data](../processmaker-administration/permission-descriptions-for-users-and-groups.md#requests) permission. Ask your ProcessMaker Administrator if you do not see the **Data** tab in completed Requests.

### ProcessMaker Magic Variables

Following the same syntax as referencing Request-related information, reference ProcessMaker [Magic Variables](../designing-processes/reference-global-variables-in-your-processmaker-assets.md) in your search criteria. See [Magic Variable Descriptions](../designing-processes/reference-global-variables-in-your-processmaker-assets.md#global-variable-descriptions).

### Request Status

Use the following syntax as a guide to include one Request status in your search criteria:

`(status = "In Progress")`

Use the following syntax as a guide to include two or more Request statuses in your search criteria:

`(status = "Completed" OR status = "Canceled")`

### Requesters

Use the following syntax as a guide to include one requester in your search criteria:

`(requester = "Username1")`

Use the following syntax as a guide to include two or more requesters in your search criteria:

`(requester = "Username1" OR requester = "Username2")`

### Request Participants

Use the following syntax as a guide to include one Request participant in your search criteria:

`(participant = "Username3")`

Use the following syntax as a guide to include two or more Request participants in your search criteria:

`(participant = "Username3" OR participant = "Username4")`

### Request Age

Use the following syntax as a guide to include the age of a Request or Task in your search criteria:

`updated_at < NOW -2 day`

Use `updated_at < NOW` to represent how old the sought after Request or Task is, then use `-` followed by an integer to specify that time. The units of time `second`, `minute`, `hour` and `day` are supported.

## PMQL Syntax for Tasks

Use [standard SQL syntax](search-processmaker-data-using-pmql.md#standard-sql-syntax-pmql-supports) that ProcessMaker Query Language \(PMQL\) supports in conjunction with the following PMQL parameters to perform [advanced Task searches](task-management/search-for-a-task.md#advanced-search-for-a-task).

### Processes Associated with the Task's Request

See [Processes Associated with the Request](search-processmaker-data-using-pmql.md#processes-associated-with-the-request).

### Request Information

See [Request Information](search-processmaker-data-using-pmql.md#request-information).

### ProcessMaker Magic Variables

See [ProcessMaker Magic Variables](search-processmaker-data-using-pmql.md#processmaker-magic-variables).

### Task Name

Use the following syntax as a guide to include one Task name in your search criteria:

`(task = "exact Task name including spaces")`

Use the following syntax as a guide to include two or more Task names in your search criteria:

`(task = "Task name 1" OR task = "Task name 2")`

### Task Status

Use the following syntax as a guide to include one Task status in your search criteria:

`(status = "In Progress")`

Use the following syntax as a guide to include two or more Task statuses in your search criteria:

`(status = "In Progress" OR status = "Completed")`

### Task Age

See [Request Age](search-processmaker-data-using-pmql.md#request-age).

### Task Due

Use the following syntax as a guide to include when a Task is due in your search criteria:

`due < NOW -2 day`

Use `due < NOW` to represent when a Task is due, then use `-` followed by an integer to specify that time. The units of time `second`, `minute`, `hour` and `day` are supported.

## PMQL Syntax for ProcessMaker Collections

{% hint style="info" %}
### ProcessMaker Package Required

To search records in a ProcessMaker Collection, the [Collections package](../package-development-distribution/package-a-connector/collections.md) must be installed in your ProcessMaker instance. The [Collections](../collections/what-is-a-collection.md) package is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Collections package can be installed in your ProcessMaker instance.
{% endhint %}

Use [standard SQL syntax](search-processmaker-data-using-pmql.md#standard-sql-syntax-pmql-supports) that ProcessMaker Query Language \(PMQL\) supports in conjunction with the following PMQL parameters to [search records](../collections/manage-records-in-a-collection/search-for-a-record-in-a-collection.md#search-records-in-a-processmaker-collection) in a ProcessMaker Collection.

### Record ID

Use the following syntax as a guide to include one record in your search criteria based on its ID \(as noted in the **\#** column when [viewing the Collection's records](../collections/manage-records-in-a-collection/view-all-records-in-a-collection.md#view-all-records-in-a-collection)\):

`id = 4`

Use the following syntax to include all records in your search criteria since record IDs begin with `1`:

`id > 0`

### Record Information

Use the following syntax as a guide to reference record-related information in your search criteria.

`data.RecordData`

`data.` represents that what follows derives from record information, as is used in JSON dot notation. Record data is derived from the **Variable Name** setting values in the ProcessMaker [Screens](../designing-processes/design-forms/what-is-a-form.md) that are used to [create, edit and view records in this Collection](../collections/manage-collections/create-a-new-collection.md#overview). Use these **Variable Name** setting values in place of `RecordData` in this syntax. Spaces are allowed between operators. Example: `data.last_name = "Canera"`. Note that your ProcessMaker user account or group membership must have the [appropriate permissions to view and edit ProcessMaker Screens](../collections/edit-a-collection.md#edit-a-processmaker-screen-for-a-collection) to view **Variable Name** setting values. Ask your ProcessMaker Administrator if you do not have the appropriate permissions.

### Record Age

Use the following syntax as a guide to include a period of time in your search criteria:

`updated_at < NOW -2 day`

Use `updated_at < NOW` to represent how much time from the present the sought after record is, then use `-` followed by an integer to specify that time. The units of time `second`, `minute`, `hour` and `day` are supported.

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
* Use `AND` operators between each set of search criterion to search using multiple criteria.
* Use the `AND` operator between criterion to search for multiple specified criterion.
* Use the `OR` operator between criterion to search for either specified criterion.

Spaces are allowed between operators. Example: `data.last_name = "Canera"`.

### Wildcard Syntax

Use `%` as a wildcard character to substitute one or more characters in any PMQL-supported parameter that uses a string. When doing so, use the `like` syntax and include the `%` character within the quotation marks \(`"`\) of the parameter. Examples:

* `request like "P%"` finds Requests associated with all Processes that begin with `P`.
* `status like "c%"` finds Requests with both Completed and Canceled statuses.
* `data.last_name like "C%"` finds all values from Requests that begin with `C` in the `last_name` key name.
* `task like "T%"` finds all Tasks that begin with `T`.

## Related Topics

{% page-ref page="requests/search-for-a-request.md" %}

{% page-ref page="task-management/search-for-a-task.md" %}

{% page-ref page="../collections/manage-records-in-a-collection/search-for-a-record-in-a-collection.md" %}

