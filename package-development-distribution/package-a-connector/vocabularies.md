---
description: >-
  Maintain uniform JSON schemas for all ProcessMaker assets in your
  organization.
---

# Vocabularies Package

## Overview

{% hint style="info" %}
### ProcessMaker Package Required

The Vocabularies [package](../first-topic.md) is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Vocabularies package can be installed in your ProcessMaker instance.

### Need to Learn How to Develop JSON Schemas?

Start with [JSON Schema](https://json-schema.org/).
{% endhint %}

Use the Vocabularies package to maintain uniform JSON schemas across all assets in your organization. These assets include [Processes](../../designing-processes/viewing-processes/what-is-a-process.md), [ProcessMaker Screens](../../designing-processes/design-forms/what-is-a-form.md), and [ProcessMaker Scripts](../../designing-processes/scripts/what-is-a-script.md).

A ProcessMaker Vocabulary is a JSON schema designed to annotate and validate ProcessMaker assets to which that Vocabulary is applied. The JSON schema describes your existing data format\(s\) in both a machine and human readable structure. Any ProcessMaker asset to which that ProcessMaker Vocabulary applies must conform to that JSON schema.

Use ProcessMaker Vocabularies for the following reasons:

* Ensure that data associated with the ProcessMaker asset to which the Vocabulary applies complies with a required data format. For example, use a ProcessMaker Vocabulary on a Task element. By extension, the ProcessMaker Vocabulary applies to the ProcessMaker Screen referenced by that Task element. The ProcessMaker Vocabulary ensures that the Screen designer complies with the JSON schema as structured in the Vocabulary. This maintains consistency, validation, and compliance across any Task to which that ProcessMaker Vocabulary applies.
* Ensure the quality and compliance of submitted data. For example, ensure that information entered into a ProcessMaker Screen for a Task complies with a regulatory specification.

The Vocabularies package has the following components after it is installed in your ProcessMaker instance:

* **Manage your ProcessMaker Vocabularies:** Manage your organization's ProcessMaker Vocabularies. See [Vocabularies Management](../../designing-processes/vocabularies-management/).
* **Set Vocabulary permissions:** Determine which ProcessMaker users and/or groups have permission to view, create, edit or delete Vocabularies. See [Vocabulary permissions](../../processmaker-administration/permission-descriptions-for-users-and-groups.md#vocabularies).

## Related Topics

{% page-ref page="../first-topic.md" %}

{% page-ref page="../../designing-processes/viewing-processes/view-the-list-of-processes/edit-the-name-description-category-or-status-of-a-process.md" %}

