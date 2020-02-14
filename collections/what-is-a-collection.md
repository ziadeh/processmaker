---
description: Understand what a Collection is in ProcessMaker.
---

# What is a Collection?

## Overview

{% hint style="info" %}
The Collections [package](../package-development-distribution/first-topic.md) is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](https://www.processmaker.com/contact/) or ask your ProcessMaker sales representative how the Collections package can be installed in your ProcessMaker instance.
{% endhint %}

Use the Collections package to maintain sets of schema-less data, each referred to as a ProcessMaker Collection. Each ProcessMaker Collection uses up to three different [Screens](../designing-processes/design-forms/what-is-a-form.md) to create, edit and view information in that Collection. Functioning similarly to a database, ProcessMaker Collections provide ease and flexibility to design custom data views for information storage and reporting without integrating into an organization's IT infrastructure. Also similar to a database, each ProcessMaker Collection contains a set of records, each representing distinct sets of information similarly to how a conventional database contains a set of fields that comprise a record.

The Collections package has the following features:

* An external database is not required to store ProcessMaker Collections. Collections are maintained in the ProcessMaker instance.
* A ProcessMaker Collection is composed of a set of records. Similar to a relational database, a record is a grouping of fields that represent related data. Design the grouping of fields using ProcessMaker Screens to represent this data, thereby making it easy for any ProcessMaker [user](../processmaker-administration/add-users/what-is-a-user.md) to view, create, or edit record data if they have the appropriate permission\(s\) to do so. Within a ProcessMaker Collection, potentially use different Screens to create a record, edit a record, or view a record within that Collection. This provides greater control in how information within a ProcessMaker Collection is consumed by various stakeholders in the Collection. Consider the following use case:
  * **Create a record:** Allow an assistant to create a record using ProcessMaker Screen for this purpose, such as in a medical practice.
  * **Edit a record:** In the same medical practice, a dedicated ProcessMaker Screen allows a nurse to edit patient information after the new patient has granted legal permission for medical staff to edit sensitive medical information \(in compliance with HIPAA standards\).
  * **View a record:** Use a third ProcessMaker Screen that references identical record information, but limits the content and editing so that the medical practice complies with patient legal protections.
* Use the following ProcessMaker Screen controls that are part of the Collections package that allow [Request](../using-processmaker/requests/what-is-a-request.md) participants and Collection users to view, select, and verify information referenced from a Collection:
  * **Collection Select control:** 
  * **Collection Record control:** 
* ProcessMaker Collections are schema-less, meaning that any type or format of data may be stored in a Collection. Because ProcessMaker Collections are schema-less, changing the [ProcessMaker Screen\(s\) that are used to create, edit, and view records in each Collection](manage-collections/create-a-new-collection.md#overview) thereby changes the types of information or data to all records within that Collection. You are not constrained by how you define a ProcessMaker Collection when you create it. For example, if you want to allow Collection stakeholders to attach a file that becomes associated with a record, add a [File Upload control](../designing-processes/design-forms/screens-builder/control-descriptions/file-upload-control-settings.md) in the applicable ProcessMaker Screen\(s\) that represent information in that Collection; the new File Upload control becomes available in all records in that Collection.
* Determine which ProcessMaker users and/or groups have permission to view, create, edit, or delete Collections by setting [Collection permissions](../processmaker-administration/permission-descriptions-for-users-and-groups.md#collections). These permissions are different than [record permissions](manage-collections/configure-a-collection.md#configure-record-level-permissions-for-users) that specify which ProcessMaker [users](../processmaker-administration/add-users/what-is-a-user.md) and/or [groups](../processmaker-administration/assign-groups-to-users/what-is-a-group.md) can manage records within an individual Collection.
* The Collections package integrates with the [Saved Searches](../using-processmaker/save-and-share-request-and-task-related-searches/what-is-a-saved-search.md) package. Use the Saved Searches package to save and share searches associated with a ProcessMaker Collection. See [Saved Searches Package](../package-development-distribution/package-a-connector/saved-searches-package.md). Use ProcessMaker Query Language \(PMQL\) parameters to compose queries to [search for record information in a Collection](manage-records-in-a-collection/search-for-a-record-in-a-collection.md#search-records-in-a-processmaker-collection). Furthermore, changes to a ProcessMaker Collection may then be applied to Saved Searches associated with that Collection.

## Related Topics

{% page-ref page="../package-development-distribution/package-a-connector/collections.md" %}

{% page-ref page="manage-collections/" %}

{% page-ref page="manage-records-in-a-collection/" %}

{% page-ref page="edit-a-collection.md" %}

{% page-ref page="../package-development-distribution/package-a-connector/saved-searches-package.md" %}

{% page-ref page="../package-development-distribution/first-topic.md" %}

