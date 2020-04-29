---
description: >-
  Validate that your Process model is BPMN 2.0 compliant before you deploy it to
  production.
---

# Validate Your Process is BPMN 2.0 Compliant

## Overview

Before you deploy your Process model to production, ensure that it is BPMN 2.0 compliant for the following reasons:

* Minimize problems when testing your Process prior to deploying it. Regardless of whether your Process model is a self-contained business solution or one which calls another Process/is called by another Process, ensure that it functions correctly by validating its BPMN 2.0 compliance.
* Ensure that if you [export](../viewing-processes/view-the-list-of-processes/export-a-bpmn-compliant-process.md) the Process, you will be able to [import](../viewing-processes/view-the-list-of-processes/import-a-bpmn-compliant-process.md) it later. If the Process model is not BPMN 2.0 compliant, you will not successfully import the Process.
* If you share your Process model with either the open-source community or with other teams in your organization, ensure that the Process model is BPMN 2.0 compliant so that it is useful to others.

## Validate Your Process Is BPMN 2.0 Compliant

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to validate the Process model is BPMN 2.0 compliant unless your user account has the **Make this user a Super Admin** setting selected:

* Processes: Edit Processes
* Processes: View Processes

See the [Process](../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to validate your Process model is BPMN 2.0 compliant:

1. ​[View your Processes](https://processmaker.gitbook.io/processmaker-4-community/-LPblkrcFWowWJ6HZdhC/~/drafts/-LRhVZm0ddxDcGGdN5ZN/primary/designing-processes/viewing-processes/view-the-list-of-processes/view-your-processes#view-all-processes). The **Processes** page displays.
2. ​[Create a new Process](https://processmaker.gitbook.io/processmaker-4-community/-LPblkrcFWowWJ6HZdhC/~/edit/drafts/-LauIZVG_nBSIczT8ilV/designing-processes/viewing-processes/view-the-list-of-processes/create-a-process) or click the **Open Modeler** icon​![](https://firebasestorage.googleapis.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LJ0aNaVW1m7sNsxVJLV%2F-LVxYmCLNQNVkqtm90bQ%2F-LVxdCH6161DyA6JCRG-%2FOpen%20Modeler%20Edit%20icon%20Processes%20page%20-%20Processes.png?alt=media&token=75758d17-e403-418c-80e0-47ae2dca3c23)to edit the selected Process model. Process Modeler displays.
3. Enable the **Auto validate** toggle key so that Process Modeler automatically validates your Process model as you work.
4. Design your Process model. Process Modeler indicates any BPMN 2.0 compliance issues as you design. The following indicators may occur:
   * **No errors found:** If no errors are found, the following text displays to the left of the **Auto validate** toggle key: **BPMN VALID**. The green check mark displays. Your Process model is BPMN 2.0 compliant.
   * **Errors are found:** If errors are found, a drop-down menu displays to the left of the **Auto validate** toggle key with the following text: **BPMN ISSUES**. The amount of errors displays.  
     ![](../../.gitbook/assets/bpmn-with-problems-process-modeler-processes.png) 

     After clicking the **BPMN ISSUES** drop-down menu, the Process Modeler displays how any errors to the right of the **Auto validate** toggle key. Each error icon displays![](../../.gitbook/assets/validate-bpmn-problems-errors-process-modeler-processes.png)with a summary of the error. Below is an example.

     ![](../../.gitbook/assets/selection_011.png)

     Furthermore, Process model elements that are associated with errors display a red-colored highlight. However, the red-colored highlight does not display if your Process model is missing required elements, such as a [Start Event](model-your-process/process-modeling-element-descriptions.md#start-event) or [End Event](model-your-process/process-modeling-element-descriptions.md#end-event) element.

     ![](../../.gitbook/assets/validate-bpmn-problem-error-highlight-process-modeler-processes.png)
5. If errors are found, click the **BPMN ISSUES** drop-down again to hide the error summary. Make changes to your Process model and then repeat steps 4 and 5 again until Process Modeler finds no BPMN compliance errors.

## Related Topics

{% page-ref page="../viewing-processes/view-the-list-of-processes/view-your-processes.md" %}

{% page-ref page="../viewing-processes/view-the-list-of-processes/create-a-process.md" %}

{% page-ref page="toolboxes.md" %}

{% page-ref page="../viewing-processes/view-the-list-of-processes/export-a-bpmn-compliant-process.md" %}

{% page-ref page="../viewing-processes/view-the-list-of-processes/import-a-bpmn-compliant-process.md" %}

