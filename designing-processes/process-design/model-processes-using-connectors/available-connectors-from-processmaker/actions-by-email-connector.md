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

When the Actions By Email connector triggers during an in-progress Request, ProcessMaker sends an email to one email recipient so that this Request participant can make a decision as part of the Request. For example, this Request participant must make a decision to approve or deny a vacation request or for a purchase. The email recipient receive an email with buttons in the email to easily indicate the decision.



The email recipient's name and email address can be specified in one of the following ways when configuring the Actions By Email connector:

* Plain text
* A **Variable Name** setting value using mustache syntax, such as `{{ email_recipient }}` and `{{ email_address }}`, respectively
* A [ProcessMaker Magic Variable](../../../reference-global-variables-in-your-processmaker-assets.md) value, such as `{{ _user.fullname }}` and `{{ _user.email }}`, respectively



 to allow Actions by Email is a feature available in the ProcessMaker Enterprise Edition. This feature allows users to receive an email where they can send information to ProcessMaker cases and also route those cases onto the next task in the process. The email can contain a link to a form stored on the ProcessMaker server to be filled out and submitted, a group of links that can be clicked to accept or reject information in the email, or multiple different options customized by the designer. Actions by Email was originally created to allow people who are not registered users in ProcessMaker to work on cases, but it can also be used by registered users who wish to work on cases without having to log into the ProcessMaker interface.



Actions by Email used to be an enterprise plugin, but currently it is an integrated feature available in ProcessMaker Enterprise Edition.



It comprises three options:



Link to fill a form: A link to a form is sent to the user's email. When the user submits the form, it saves any data entered into the form and routes the case to the next task in the process.

Use a field to generate actions links: The user will be able to approve or reject the information sent via email. It routes the case onto the next task depending on the link that the user clicked in the email.

Custom actions: This option gives designers the ability to add and customize the response options sent to users in the email by adding css code to each of these options.

Note: The email sent by Actions by Email is resent when the case is unpaused, reassigned or uncancelled.



Restrictions

Please consider the following restrictions before using the Actions by Email feature:



Actions by Email does NOT work with tasks that have self service and self service value based assignment routing rules, because these tasks need to be routed to a specific user in ProcessMaker.

The configuration of the Actions By Email feature must be done only from the second task of the process.

As a best practice, do not configure the current task to use Actions by Email, and then route cases of this task from the email to tasks that require manual assignment. This will cause errors in case run time because there is no way in the email to manually select a user in which to assign the task.

As a best practice, do not configure a task to use manual timing control if that task requires Action by Email. If you do so, process users cannot change the task duration time during run time.

## Related Topics

{% page-ref page="../../../../package-development-distribution/package-a-connector/actions-by-email-package.md" %}

{% page-ref page="../what-is-a-connector.md" %}

{% page-ref page="../../../../package-development-distribution/first-topic.md" %}

