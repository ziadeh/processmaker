---
description: Understand what a Vocabulary is in ProcessMaker.
---

# What is a Vocabulary?

## Overview

Use the [Vocabularies package](../../package-development-distribution/package-a-connector/vocabularies.md) to maintain a uniform JSON scheme that validates ProcessMaker assets referenced in your Processes. These assets include [Processes](../viewing-processes/what-is-a-process.md), [ProcessMaker Scripts](../scripts/what-is-a-script.md), and [ProcessMaker Screens](../design-forms/what-is-a-form.md).

{% hint style="info" %}
The Vocabularies package is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Vocabularies package can be installed in your ProcessMaker instance.
{% endhint %}

A ProcessMaker Vocabulary is a [JSON schema](https://json-schema.org) designed to validate ProcessMaker assets to which that Vocabulary is applied. Any ProcessMaker asset to which that ProcessMaker Vocabulary is applied must conform to that JSON schema. ProcessMaker Vocabularies are granular, in that one or more Vocabularies can be assigned to specific BPMN 2.0 element types within a Process or the Process model itself to validate the ProcessMaker asset that is referenced from that element. For example, apply a ProcessMaker Vocabulary for a selected Task element, thereby requiring validation on the ProcessMaker Screen that Task element references.

A ProcessMaker Vocabulary's validation can require that specific data passes through the JSON data model for that Process and/or BPMN element or that data be of a particular data type.

A ProcessMaker Vocabulary can be applied to the following BPMN 2.0 elements:

* The Process model
* [Start Event](../process-design/model-your-process/process-modeling-element-descriptions.md#start-event): Validate the JSON data model for [Web Entry](../../package-development-distribution/package-a-connector/web-entry.md).
* [End Event](../process-design/model-your-process/process-modeling-element-descriptions.md#end-event): Validate the JSON data model for a ProcessMaker Screen that displays a Request summary.
* [Intermediate Message Catch Event](../process-design/model-your-process/process-modeling-element-descriptions.md#intermediate-message-catch-event)
* [Task](../process-design/model-your-process/process-modeling-element-descriptions.md#task): Validate the JSON data model for a ProcessMaker Screen that displays a Task.
* [Script Task](../process-design/model-your-process/process-modeling-element-descriptions.md#script-task): Validate the JSON data model for a ProcessMaker Script.
* [Manual Task](../process-design/model-your-process/process-modeling-element-descriptions.md#manual-task): Validate the JSON data model for a ProcessMaker Screen that displays a Manual Task.
* [Call Activity](../process-design/model-your-process/process-modeling-element-descriptions.md#call-activity): Validate the JSON data model for a called Process.

For example, use a ProcessMaker Vocabulary on a Task element. By extension, the ProcessMaker Vocabulary applies to the ProcessMaker Screen referenced by that Task element which is used to show information to or receive information from the Task assignee. The ProcessMaker Vocabulary ensures that the Screen designer complies with the JSON data model as structured in the Vocabulary. This maintains consistency across any Task to which that ProcessMaker Vocabulary is applied.

Use ProcessMaker Vocabularies throughout your organization in the following ways:

* **Set Vocabulary permissions:** Determine which ProcessMaker users and/or groups have permission to view, create, edit or delete Vocabularies. See [Vocabulary permissions](../../processmaker-administration/permission-descriptions-for-users-and-groups.md#vocabularies).
* **Manage your ProcessMaker Vocabularies:** Manage your organization's ProcessMaker Vocabularies based on business vertical, organizational department, or any way you want to maintain consistent nomenclature and architecture for your ProcessMaker assets. See [Manage Your Vocabularies](manage-your-vocabularies/).
* **Configure which elements within a Process use a ProcessMaker Vocabulary:** After [creating](../environment-variable-management/manage-your-environment-variables/create-a-new-environment-variable.md#create-a-new-processmaker-environment-variable) one or more ProcessMaker Vocabularies, apply them to specific types of BPMN 2.0 elements within a Process. See the following topics to apply a ProcessMaker Vocabulary to these element types:
  * Start Event
  * End Event
  * Intermediate Message Catch Event
  * Task
  * Script Task
  * Manual Task
  * Call Activity

## Related Topics

{% page-ref page="manage-your-vocabularies/view-all-vocabularies.md" %}

{% page-ref page="manage-your-vocabularies/create-a-new-vocabulary.md" %}

{% page-ref page="manage-your-vocabularies/search-for-a-vocabulary.md" %}

{% page-ref page="manage-your-vocabularies/edit-a-vocabulary.md" %}

{% page-ref page="manage-your-vocabularies/delete-a-vocabulary.md" %}

{% page-ref page="../../package-development-distribution/package-a-connector/vocabularies.md" %}

