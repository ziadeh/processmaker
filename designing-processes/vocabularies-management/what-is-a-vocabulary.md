---
description: Understand what a Vocabulary is in ProcessMaker.
---

# What is a Vocabulary?

## Overview

Use the [Vocabularies package](../../package-development-distribution/package-a-connector/vocabularies.md) to ensure your Processes comply with specific data structures or regulatory specifications. ProcessMaker Vocabularies apply to ProcessMaker assets, including [Processes](../viewing-processes/what-is-a-process.md), [ProcessMaker Scripts](../scripts/what-is-a-script.md), and [ProcessMaker Screens](../design-forms/what-is-a-form.md).

{% hint style="info" %}
### ProcessMaker Package Required

The Vocabularies package is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Vocabularies package can be installed in your ProcessMaker instance.
{% endhint %}

### Why Use ProcessMaker Vocabularies?

ProcessMaker uses a schema-less JSON data model from which to read, write, and store Request data. Since the JSON data model is schema-less \(meaning that it does not require a specific schema or structure from which ProcessMaker assets must conform\), the JSON data model is structured from the JSON objects in ProcessMaker assets used in a Request: the **Variable Name** setting values in a ProcessMaker Screen or variables a ProcessMaker Script creates. When an in-progress Request routes through the Process, Request data aggregates into the JSON data model, thereby becoming Request data.

Use ProcessMaker Vocabularies to ensure Request data complies with a specific data structure. This is often mandatory for many types of business sectors including banking and healthcare. Ensure the quality and compliance of Request data. For example, during a Loan Application process, ensure that personal information has been included in the Request to that moment in that in-progress Request.

### What is a ProcessMaker Vocabulary?

A ProcessMaker Vocabulary is a JSON schema. The JSON schema describes the data objects, types, and structure that you want in both a machine and human readable format. Apply one or more ProcessMaker Vocabularies to your Processes and/or specific BPMN 2.0 elements in your Process models to ensure the JSON data model in Request data complies with the data structure outlined in the JSON schema that you need to meet regulatory specifications or ensure Request data contains required information.

{% hint style="info" %}
Need to learn how to develop JSON schemas? Start with [JSON Schema](https://json-schema.org/). Need to learn how to convert valid JSON to a JSON schema? Use the [JSON Schema Tool](https://jsonschema.net), though do not use JSON intended for production on this free GitHub application. 
{% endhint %}

### How Do ProcessMaker Vocabularies Work?

Each moment ProcessMaker evaluates workflow routing for an in-progress Request, ProcessMaker also evaluates the Request data's conformity to the ProcessMaker Vocabularies applied to the Process and/or a specific BPMN 2.0 element in the Process model. The Request's JSON data model must conform to the ProcessMaker Vocabulary's JSON schema.

During an in-progress Request, if ProcessMaker evaluates that the Request data no longer complies with all ProcessMaker Vocabularies to that moment, the Request status changes from In Progress to Error. The error displays in the [Request summary](../../using-processmaker/requests/request-details/summary-for-requests-with-errors.md). ProcessMaker Vocabularies are cumulative in an in-progress Request: as the Request progresses, if Request data does not conform with any Vocabulary's JSON schema to that moment in the Request, the Request errors.

### How Would I Use ProcessMaker Vocabularies?

ProcessMaker Vocabularies can be granular, in that they evaluate compliance only for specific objects in an in-progress Request's JSON data model. As a best practice, develop granular ProcessMaker Vocabularies so that they can be re-used in multiple Processes and business sectors in your organization. Since you can add more than one ProcessMaker Vocabulary to a Process or supporting BPMN 2.0 element, add as many smaller ProcessMaker Vocabularies as necessary to target compliance. If you use ProcessMaker Vocabularies that contain large JSON schemas, they will not be as re-usable to as many Processes.

Use ProcessMaker Vocabularies throughout your organization in the following ways:

* **Set Vocabulary permissions:** Determine which ProcessMaker users and/or groups have permission to view, create, edit or delete Vocabularies. See [Vocabulary permissions](../../processmaker-administration/permission-descriptions-for-users-and-groups.md#vocabularies).
* **Manage your ProcessMaker Vocabularies:** Manage your organization's ProcessMaker Vocabularies based on business sector, organizational department, or any way you want to maintain regulatory compliance in your ProcessMaker assets. See [Manage Your Vocabularies](manage-your-vocabularies/).
* **Configure which elements within a Process use a ProcessMaker Vocabulary:** After [creating](../environment-variable-management/manage-your-environment-variables/create-a-new-environment-variable.md#create-a-new-processmaker-environment-variable) one or more ProcessMaker Vocabularies, apply them to specific types of BPMN 2.0 elements and/or configuration within a Process. See the following topics:
  * [Process configuration](../viewing-processes/view-the-list-of-processes/edit-the-name-description-category-or-status-of-a-process.md#configure-which-vocabularies-are-available-to-a-process)
  * Event elements
    * [Start Event element](../process-design/model-your-process/add-and-configure-an-event-element.md#assign-processmaker-vocabularies-that-apply-to-this-element)
    * [Intermediate Message Catch Event element](../process-design/model-your-process/add-and-configure-intermediate-message-catch-event-elements.md#assign-processmaker-vocabularies-that-validate-request-data-from-this-element)
  * Task elements
    * [Task element](../process-design/model-your-process/add-and-configure-task-elements.md#assign-processmaker-vocabularies-that-validate-request-data-from-this-element)
    * [Script Task element](../process-design/model-your-process/add-and-configure-script-task-elements.md#assign-processmaker-vocabularies-that-validate-request-data-from-this-element)
    * [Manual Task element](../process-design/model-your-process/add-and-configure-manual-task-elements.md#assign-processmaker-vocabularies-that-validate-request-data-from-this-element)
  * [Call Activity element](../process-design/model-your-process/add-and-configure-sub-process-elements.md#assign-processmaker-vocabularies-that-validate-request-data-from-this-element)

## Related Topics

{% page-ref page="manage-your-vocabularies/view-all-vocabularies.md" %}

{% page-ref page="manage-your-vocabularies/create-a-new-vocabulary.md" %}

{% page-ref page="manage-your-vocabularies/search-for-a-vocabulary.md" %}

{% page-ref page="manage-your-vocabularies/edit-a-vocabulary.md" %}

{% page-ref page="manage-your-vocabularies/delete-a-vocabulary.md" %}

{% page-ref page="../../package-development-distribution/package-a-connector/vocabularies.md" %}

