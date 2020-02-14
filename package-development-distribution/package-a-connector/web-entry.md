---
description: >-
  Allow anonymous or authenticated ProcessMaker users to start or participate in
  Requests via a published URL.
---

# Web Entry Package

## Overview

{% hint style="info" %}
The Web Entry [package](../first-topic.md) is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](https://www.processmaker.com/contact/) or ask your ProcessMaker sales representative how the Web Entry package can be installed in your ProcessMaker instance.
{% endhint %}

Allow anonymous or authenticated ProcessMaker users to start or participate in [Requests](../../using-processmaker/requests/what-is-a-request.md) via a published URL.

The Web Entry package has the following components after it is installed to your ProcessMaker instance:

* **Persons can start a Request:** Web Entry integrates with the [Start Event element configuration settings](../../designing-processes/process-design/model-your-process/add-and-configure-an-event-element.md#select-who-can-start-a-request-via-a-web-entry) to allow either an anonymous or authenticated ProcessMaker user to start a Request via a Web Entry. In doing so, specify which [ProcessMaker Screen](../../designing-processes/design-forms/what-is-a-form.md) the requester views when accessing the Web Entry's URL, and whether to display a different ProcessMaker Screen or be redirected to another URL when the requester starts the Request. Each Start Event element in a [Process model](../../designing-processes/process-design/what-is-process-modeling.md) can be configured with different settings.
* **Persons can participate in an in-progress Request:** Web Entry integrates with the [Task element configuration settings](../../designing-processes/process-design/model-your-process/add-and-configure-task-elements.md#select-to-whom-to-assign-the-task-via-a-web-entry) to allow either an anonymous or authenticated ProcessMaker user to participate in an in-progress Request via Web Entry. In doing so, specify which ProcessMaker Screen the Task assignee views when accessing the Web Entry's URL, and whether to display a different ProcessMaker Screen or be redirected to another URL when the Task assignee submits the Task. Each Task element in a Process model can be configured with different settings.

## Related Topics

{% page-ref page="../first-topic.md" %}

{% page-ref page="../../designing-processes/process-design/model-your-process/process-modeling-element-descriptions.md" %}

{% page-ref page="../../designing-processes/process-design/model-your-process/add-and-configure-an-event-element.md" %}

{% page-ref page="../../designing-processes/process-design/model-your-process/add-and-configure-task-elements.md" %}

