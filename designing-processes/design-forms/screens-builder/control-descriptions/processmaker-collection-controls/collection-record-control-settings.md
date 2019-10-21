---
description: >-
  Add a control in Display-type Screens that displays the content of a record
  from a ProcessMaker Collection.
---

# Collection Record Control Settings

## Control Description

The Collection Record control displays record data from a ProcessMaker Collection. The Collection Select control functions on [Display](../../types-for-screens.md#display)-type ProcessMaker Screens.

If the ProcessMaker [Collections package](../../../../../package-development-distribution/package-a-connector/collections.md) is not installed to the ProcessMaker instance, then the Collection Select control is not available.

{% hint style="info" %}
See [What is a Collection?](../../../../../collections/what-is-a-collection.md) for more information about what Collections and records are.
{% endhint %}

Specify the following when configuring a Collection Record control:

* Select from which ProcessMaker Collection to reference its records.
* Use plain text preceding and following the referenced record data to provide context to the record data. For example, if referencing names from a ProcessMaker Collection, optionally include honorifics \(such as "Mr." or "Mrs."\) or professional titles \(such as "Dr." or "MD"\).
* Specify the record ID for the record in the ProcessMaker Collection to display. The record ID is a unique value to each record in a ProcessMaker Collection that is referenced in the **\#** column of a Collection. See [View Collections](../../../../../collections/manage-collections/view-collections.md).

