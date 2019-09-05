---
description: Understand what a Collection is in ProcessMaker.
---

# What is a Collection?

## Overview

{% hint style="info" %}
The Collections [package](../package-development-distribution/first-topic.md) is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Collections package can be installed in your ProcessMaker instance.
{% endhint %}

The Collections package allows members of an organization to maintain sets of schema-less data records using [ProcessMaker Screens](../designing-processes/design-forms/what-is-a-form.md), each referred to as a ProcessMaker Collection. Functioning similarly to a database, ProcessMaker Collections provide ease and flexibility to design custom data views for information storage and reporting without any need to integrate into an organization's IT infrastructure.

The Collections package has the following features:

* An external database is not required to store ProcessMaker Collections. Collections are maintained in the ProcessMaker instance.
* ProcessMaker Collections are schema-less, meaning that any type or format of data may be stored in a Collection. Because ProcessMaker Collections are schema-less, one record within a Collection can be changed, which then apply to all records within that Collection. You are not constrained by how you define a ProcessMaker Collection when you create it.
* Determine which ProcessMaker users and/or groups have permission to view, create, edit or delete Collections by setting [Collection permissions](../processmaker-administration/permission-descriptions-for-users-and-groups.md#collections). These permissions are different than Collection-level permissions that specify which ProcessMaker users and/or groups can manage individual Collections.
* Define the record using ProcessMaker Screens, which makes it easy for any ProcessMaker [user](../processmaker-administration/add-users/what-is-a-user.md) to view, create, or edit record data if they have the appropriate permission\(s\) to do so. Within a ProcessMaker Collection, potentially use different Screens to create a record, edit a record, or view a record within that Collection. This provides greater control in how information within a ProcessMaker Collection is consumed by various stakeholders in the Collection. Consider the following use case:
  * **Create a record:** Allow an assistant to create a record using ProcessMaker Screen for this purpose, such as in a medical practice.
  * **Edit a record:** In the same medical practice, a dedicated ProcessMaker Screen allows a nurse to edit patient information after the new patient has granted legal permission for medical staff to edit sensitive medical information \(HIPAA\).
  * **View a record:** Use a third ProcessMaker Screen that references identical record information, but limits the content and editing so that the medical practice complies with patient legal protections.
* Reference data from records in a Collection to display values in ProcessMaker Screen controls. This allows [Request](../using-processmaker/requests/what-is-a-request.md) participants to easily view, verify, and select information from Collection records during Requests.
* The Collections package integrates with the [Saved Searches](../using-processmaker/save-and-share-request-and-task-related-searches/what-is-a-saved-search.md) package. Use the Saved Searches package to save and share searches associated with a ProcessMaker Collection. See [Saved Searches Package](../package-development-distribution/package-a-connector/saved-searches-package.md). Use ProcessMaker Query Language \(PMQL\) parameters to compose queries to [search for record information in a Collection](manage-records-in-a-collection/search-for-a-record-in-a-collection.md#search-records-in-a-processmaker-collection). Furthermore, changes to a ProcessMaker Collection may then be applied to Saved Searches associated with that Collection.

## Related Topics



