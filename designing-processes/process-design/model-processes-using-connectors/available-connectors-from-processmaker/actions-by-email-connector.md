---
description: Request participants can make decisions via email with the click of a button.
---

# Actions By Email Connector

## Overview

The Actions By Email connector is part of the [Actions By Email package](../../../../package-development-distribution/package-a-connector/actions-by-email-package.md). Use the Actions By Email connector in your Process models to automate emails to [Request](../../../../using-processmaker/requests/what-is-a-request.md) participants that allow them make decisions via email.

{% hint style="info" %}
### ProcessMaker Package Required

The Actions By Email connector requires that the [Actions By Email Email package](../../../../package-development-distribution/package-a-connector/actions-by-email-package.md) be installed in your ProcessMaker instance. The Actions By Email connector and the Actions By Email [package](../../../../package-development-distribution/first-topic.md) are not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Actions By Email connector can be installed in your ProcessMaker instance.
{% endhint %}

When the Actions By Email connector triggers during an in-progress Request, ProcessMaker sends an email from the "no-reply@processmaker.net" email address to one email recipient so that this Request participant can make a decision as part of the Request. For example, this Request participant must make a decision to approve or deny a vacation request or for a purchase. The email recipient receives an email with buttons in the email to easily indicate the decision.

![Example email the Actions By Email connector sends to an email recipient](../../../../.gitbook/assets/actions-by-email-package.png)

After the email recipient clicks a button to indicate the decision, ProcessMaker receives the response and uses the indicated decision as part of the Request routing. For example, if you grant a leave request, the Request routes different than if you deny that leave request. 

The email recipient's name and email address can be specified in one of the following ways when configuring the Actions By Email connector:

* Plain text
* A **Variable Name** setting value using mustache syntax, for example `{{ email_recipient }}` and `{{ email_address }}`, respectively
* A [ProcessMaker Magic Variable](../../../reference-global-variables-in-your-processmaker-assets.md) value, specifically `{{ _user.fullname }}` and `{{ _user.email }}`, respectively

When an Actions By Email connector triggers during an in-progress Request, ProcessMaker automatically creates an asynchronous child Process: the Actions By Email connector sends the email \(the child Process\) while simultaneously the in-progress Request continues \(the parent Process\). In doing so, one of the following occurs:

* **An error occurs in the email delivery:** While attempting to send the email, the Actions By Email connector receives an error. For example, your organization's email server or the email recipient's email server may be down. The child Process receives and sends the error to the parent Process. The child Process ends. Reference the child Process's error from the in-progress Request.
* **The Actions by Email connector sends the email:** The email recipient receives the email while the in-progress Request continues \(the parent Process\). The child Process ends, but the email recipient may not have responded to the email. If the in-progress Request routes to an [Exclusive Gateway](../../model-your-process/process-modeling-element-descriptions.md#exclusive-gateway) element that requires the email recipient's response to evaluate routing, then the in-progress Request remains indefinitely active on the Exclusive Gateway element. To address this issue, design your Process model to use an [Intermediate Timer Event](../../model-your-process/process-modeling-element-descriptions.md#intermediate-timer-event) element preceding the Exclusive Gateway element to remind the email recipient to respond to the email if that person has not yet done so.



## Related Topics

{% page-ref page="../../../../package-development-distribution/package-a-connector/actions-by-email-package.md" %}

{% page-ref page="../what-is-a-connector.md" %}

{% page-ref page="../../../../package-development-distribution/first-topic.md" %}

