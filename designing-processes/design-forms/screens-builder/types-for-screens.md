---
description: Understand the types of ProcessMaker Screens you can use in Screens Builder.
---

# Screen Types

## Overview

ProcessMaker provides the following ProcessMaker Screen types. Note that not all of these ProcessMaker Screen types are available in the open-source release.

### Form

Use the Form type to design interactive and complex forms. Below are a few ways that Request participants might interact with a digital form:

* Enter information, such as name and email address, to apply for a loan.
* Approve the department budget.
* Upload or download documents.

All ProcessMaker Spark Screen [controls](control-descriptions/) in Screens Builder are available for the Form type.

### Display

Use the Display type to display information or allow [Request](../../../using-processmaker/requests/what-is-a-request.md) participants to download files. The Display type has limited functionality compared the Form type. The Display type only provides the following controls in Screens Builder:

* [Text](control-descriptions/textarea-control-settings.md)
* [File Download](control-descriptions/file-download-control-settings.md)
* [Table](control-descriptions/multi-column-button-control-settings.md)
* [Record List](control-descriptions/record-list-control-settings.md)

### Email

{% hint style="info" %}
Note that the Email package must be installed in your ProcessMaker environment to use the Email type of ProcessMaker Screen. See the [Email](../../../package-development-distribution/package-a-connector/email.md) package.
{% endhint %}

Use the Email type to compose the email body for email messages to be used with the Email package.

## Related Topics

{% page-ref page="what-is-screens-builder.md" %}

{% page-ref page="control-descriptions/" %}

{% page-ref page="../../../package-development-distribution/package-a-connector/email.md" %}

