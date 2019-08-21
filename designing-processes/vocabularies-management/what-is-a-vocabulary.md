---
description: Understand what a Vocabulary is in ProcessMaker.
---

# What is a Vocabulary?

## Overview

Use the [Vocabularies package](../../package-development-distribution/package-a-connector/vocabularies.md) to maintain a uniform nomenclature across all ProcessMaker assets in your organization. These assets include [Processes](../viewing-processes/what-is-a-process.md), [ProcessMaker Screens](../design-forms/what-is-a-form.md), and [ProcessMaker Scripts](../scripts/what-is-a-script.md).

{% hint style="info" %}
The Vocabularies package is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Vocabularies package can be installed in your ProcessMaker instance.
{% endhint %}

A ProcessMaker Vocabulary is a JSON file that represents the nomenclature and architecture for ProcessMaker assets referenced in a Process. ProcessMaker Vocabularies are granular, in that a Vocabulary can be assigned to an element within a Process, thereby enforcing that Vocabulary to any ProcessMaker asset that is referenced from that element.

For example, use one ProcessMaker Vocabulary for a selected [Task](../process-design/model-your-process/process-modeling-element-descriptions.md#task) element, thereby enforcing that Vocabulary on the ProcessMaker Screen that Task element references. Likewise, you may use a different Vocabulary for a selected [Script Task](../process-design/model-your-process/process-modeling-element-descriptions.md#script-task) element, thereby enforcing that Vocabulary on the ProcessMaker Script that Script Task references. This provides a granular nomenclature and architecture for individual elements within a Process.

Using a ProcessMaker Vocabulary in Process design provides the following advantages:

* **Naming convention:** Use a ProcessMaker Vocabulary to establish and maintain a naming convention across all ProcessMaker assets that use that Vocabulary for individual elements within a Process. This naming convention may include **Variable Name** setting and **Field Label** setting values in ProcessMaker Screens. Using a consistent naming convention across all ProcessMaker assets ensures that all designers understand nomenclature for the Vocabulary, what each object in the Vocabulary represents, and how to use it when designing their asset\(s\) regardless of whether they are designing ProcessMaker Screens or Scripts.
* **Consistent JSON objects to use in ProcessMaker Scripts:** Developers designing ProcessMaker Scripts understand how Request data is intended when they mock Request data during Script testing.

Use ProcessMaker Vocabularies throughout your organization in the following ways:

* **Set Vocabulary permissions:** Determine which ProcessMaker users and/or groups have permission to view, create, edit or delete Vocabularies. See [Vocabulary permissions](../../processmaker-administration/permission-descriptions-for-users-and-groups.md#vocabularies).
* **Manage your ProcessMaker Vocabularies:** Manage your organization's ProcessMaker Vocabularies based on business vertical, organizational department, or any way you want to maintain consistent nomenclature and architecture for your ProcessMaker assets. See [Manage Your Vocabularies](manage-your-vocabularies/).
* **Configure which elements within a Process use a ProcessMaker Vocabulary:** After [creating](../environment-variable-management/manage-your-environment-variables/create-a-new-environment-variable.md#create-a-new-processmaker-environment-variable) one or more ProcessMaker Vocabularies, assign them on an element-level within a Process. For example, use one ProcessMaker Vocabulary on a selected [Task](../process-design/model-your-process/process-modeling-element-descriptions.md#task) element, thereby enforcing that Vocabulary on the ProcessMaker Screen that Task element references. Likewise, use a different Vocabulary on a selected [Script Task](../process-design/model-your-process/process-modeling-element-descriptions.md#script-task) element, thereby enforcing that Vocabulary on the ProcessMaker Script that Script Task references. This provides a granular nomenclature and architecture to individual elements within a Process.

## Related Topics

{% page-ref page="manage-your-vocabularies/view-all-vocabularies.md" %}

{% page-ref page="manage-your-vocabularies/create-a-new-vocabulary.md" %}

{% page-ref page="manage-your-vocabularies/search-for-a-vocabulary.md" %}

{% page-ref page="manage-your-vocabularies/edit-a-vocabulary.md" %}

{% page-ref page="manage-your-vocabularies/delete-a-vocabulary.md" %}

{% page-ref page="../../package-development-distribution/package-a-connector/vocabularies.md" %}

