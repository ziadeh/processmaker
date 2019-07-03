---
description: >-
  Create a set of ProcessMaker Screens where users in your organization can
  create, view, and edit schema-less data for records that do not require an
  external database.
---

# Collections

## Overview

The Collections package allows members of an organization to maintain schema-less data records using [ProcessMaker Screens](../../designing-processes/design-forms/what-is-a-form.md). The Collections package has the following features:

* An external database is not required to store data records. Records are maintained in the ProcessMaker instance.
* Define the record via ProcessMaker Screens, which makes it easy for any ProcessMaker user to view, create, or edit record data.
* Since records are schema-less, validation is optional but not required. To enforce a valid schema, use the [Vocabularies](vocabularies.md) package to specify the schema for the ProcessMaker Screens that compose the Collection.
* Events are triggered when a Collection is created, updated, or deleted with which ProcessMaker user performed an action on a Collection and when that action occurred. A third-party auditing package can listen for these events and then audit/log that data into another storage repository. Note that the storage for audit configuration is not part of this package.

## How Can I Get This Package?

Ask your ProcessMaker sales representative how this package can be installed in your ProcessMaker environment.

## Related Topics

