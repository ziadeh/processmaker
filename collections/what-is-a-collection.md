---
description: Understand what a Collection is in ProcessMaker.
---

# What is a Collection?

## Overview

{% hint style="info" %}
The Collections [package](../package-development-distribution/first-topic.md) is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Collections package can be installed in your ProcessMaker instance.
{% endhint %}

The Collections package allows members of an organization to maintain sets of schema-less data records using [ProcessMaker Screens](../designing-processes/design-forms/what-is-a-form.md), each referred to as a ProcessMaker Collection. The Collections package has the following features:

* An external database is not required to store ProcessMaker Collections. Collections are maintained in the ProcessMaker instance.
* ProcessMaker Collections are schema-less, meaning that any type or format of data may be stored in a Collection. Because ProcessMaker Collections are schema-less, one record within a Collection can be changed, which then apply to all records within that Collection.
* Define the record using ProcessMaker Screens, which makes it easy for any ProcessMaker user to view, create, or edit record data if they have the appropriate permission\(s\) to do so.
* The Collections package integrates with the [Saved Searches](../using-processmaker/save-and-share-request-and-task-related-searches/what-is-a-saved-search.md) package. Use the Saved Searches package to save and share searches associated with a ProcessMaker Collection. See [Saved Searches Package](../package-development-distribution/package-a-connector/saved-searches-package.md). Use ProcessMaker Query Language \(PMQL\) parameters to compose queries similar to [advanced Request searches](../using-processmaker/requests/search-for-a-request.md#advanced-search-for-a-request), though against data in a Collection. Furthermore, changes to a ProcessMaker Collection may then be applied to Saved Searches associated with that Collection.

Determine which ProcessMaker users and/or groups have permission to view, create, edit or delete Collections by setting [Collection permissions](../processmaker-administration/permission-descriptions-for-users-and-groups.md#collections). These permissions are different than Collection-level permissions that specify which ProcessMaker users and/or groups can manage individual Collections.

## Related Topics



