---
description: Understand what a Vocabulary is in ProcessMaker.
---

# What is a Vocabulary?

## Overview

Use the [Vocabularies package](../../package-development-distribution/package-a-connector/vocabularies.md) to maintain a uniform nomenclature across all ProcessMaker assets in your organization. These assets include [Processes](../viewing-processes/what-is-a-process.md), [ProcessMaker Screens](../design-forms/what-is-a-form.md), and [ProcessMaker Scripts](../scripts/what-is-a-script.md).

{% hint style="info" %}
The Vocabularies package is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Vocabularies package can be installed in your ProcessMaker instance.
{% endhint %}

A ProcessMaker Vocabulary is a JSON file that represents the nomenclature that ProcessMaker asset designers use. This nomenclature may include but is not limited to:

* **Naming convention:** Use a ProcessMaker Vocabulary to establish and maintain a naming convention across all ProcessMaker assets that use that Vocabulary. This naming convention may include **Variable Name** setting and **Field Label** setting values. Using a consistent naming convention across all ProcessMaker assets ensures that all designers understand nomenclature for the Vocabulary, what each object in the Vocabulary represents, and how to use it when designing their asset\(s\) regardless of whether they are designing ProcessMaker Screens or Scripts.
* **Consistent JSON objects to use in ProcessMaker Scripts:** Developers designing ProcessMaker Scripts understand how Request data is intended when they mock Request data during Script testing.

The Vocabularies package has the following components after it is installed in your ProcessMaker instance:

* **Manage your ProcessMaker Vocabularies:** Manage your organization's ProcessMaker Vocabularies by uploading a JSON file that represents the nomenclature for a set of ProcessMaker assets. See [Manage Your Vocabularies](manage-your-vocabularies/).
* **Set Vocabulary permissions:** Determine which ProcessMaker users and/or groups have permission to view, create, edit or delete Vocabularies. See [Vocabulary permissions](../../processmaker-administration/permission-descriptions-for-users-and-groups.md#vocabularies).
* **Configure which ProcessMaker Vocabulary to use with a Process:** After creating one or more ProcessMaker Vocabularies, specify which ProcessMaker Vocabulary applies to a Process. See [Configure Which Vocabularies Are Available to a Process](../viewing-processes/view-the-list-of-processes/edit-the-name-description-category-or-status-of-a-process.md#configure-which-vocabularies-are-available-to-a-process).

## Related Topics

{% page-ref page="manage-your-vocabularies/view-all-vocabularies.md" %}

{% page-ref page="manage-your-vocabularies/create-a-new-vocabulary.md" %}

{% page-ref page="manage-your-vocabularies/search-for-a-vocabulary.md" %}

{% page-ref page="manage-your-vocabularies/edit-a-vocabulary.md" %}

{% page-ref page="manage-your-vocabularies/delete-a-vocabulary.md" %}

{% page-ref page="../../package-development-distribution/package-a-connector/vocabularies.md" %}

