---
description: Understand what a Vocabulary is in ProcessMaker.
---

# What is a Vocabulary?

## Overview

Use the [Vocabularies package](../../package-development-distribution/package-a-connector/vocabularies.md) to maintain a uniform nomenclature across all ProcessMaker assets in your organization. These assets include [Processes](../viewing-processes/what-is-a-process.md), [ProcessMaker Scripts](../scripts/what-is-a-script.md), and [ProcessMaker Screens](../design-forms/what-is-a-form.md).

{% hint style="info" %}
The Vocabularies package is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Vocabularies package can be installed in your ProcessMaker instance.
{% endhint %}

A ProcessMaker Vocabulary is a JSON file that represents the nomenclature and architecture for ProcessMaker assets to which the Vocabulary is applied. The ProcessMaker Vocabulary defines the JSON data model to which that ProcessMaker asset must conform. ProcessMaker Vocabularies are granular, in that one or more Vocabularies can be assigned to specific BPMN 2.0 element types within a Process, thereby enforcing that each Vocabulary applies to the ProcessMaker asset that is referenced from that element. For example, apply a ProcessMaker Vocabulary for a selected Task element, thereby enforcing that Vocabulary on the ProcessMaker Screen that Task element references.

This provides a granular nomenclature and architecture for individual elements within a Process. A ProcessMaker Vocabulary can be applied to the following BPMN 2.0 elements:

* [Start Event](../process-design/model-your-process/process-modeling-element-descriptions.md#start-event)
* [End Event](../process-design/model-your-process/process-modeling-element-descriptions.md#end-event)
* [Intermediate Message Catch Event](../process-design/model-your-process/process-modeling-element-descriptions.md#intermediate-message-catch-event)
* [Task](../process-design/model-your-process/process-modeling-element-descriptions.md#task)
* [Script Task](../process-design/model-your-process/process-modeling-element-descriptions.md#script-task)
* [Manual Task](../process-design/model-your-process/process-modeling-element-descriptions.md#manual-task)
* [Call Activity](../process-design/model-your-process/process-modeling-element-descriptions.md#call-activity)

For example, use a ProcessMaker Vocabulary on a Task element. By extension, the ProcessMaker Vocabulary applies to the ProcessMaker Screen referenced by that Task element which is used to show information to or receive information from the Task assignee. The ProcessMaker Vocabulary ensures that the Screen designer complies with the JSON data model outlined in the Vocabulary, thereby ensuring that the Task assignee reads or provides information as indicated in the Vocabulary. This maintains consistency across any Task to which that ProcessMaker Vocabulary is applied.

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

