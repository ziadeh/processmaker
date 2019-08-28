---
description: >-
  Understand how ProcessMaker schedules emailed reports of a Saved Search's
  results.
---

# Overview of Saved Search Report Schedules

## Overview

{% hint style="info" %}
### ProcessMaker Package Required

To schedule reports for a [Saved Search's](../../what-is-a-saved-search.md) results, the [Saved Searches package](../../../../package-development-distribution/package-a-connector/saved-searches-package.md) must be installed in your ProcessMaker instance. The Saved Searches package is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Saved Searches package can be installed in your ProcessMaker instance.
{% endhint %}

Schedule an interval in which to email reports of a Saved Search's search results. Multiple reports can be scheduled for the same Saved Search, thereby sending reports to different stakeholders in the search results at different intervals. For example, schedule to send your subordinates a daily report of a Saved Search's search results, but send executives a weekly report.

Additionally to emailing a report once for the currently displayed search results, in a scheduled interval you may do the following:

* Use an [Email-type](../../../../designing-processes/design-forms/screens-builder/types-for-screens.md#email) ProcessMaker [Screen](../../../../designing-processes/design-forms/what-is-a-form.md) instead of a manually entered email body.
* Send a Microsoft Excel spreadsheet \(`.XLSX` file type\) instead of a comma-separated values `.CSV`\) file.

The email recipients for each scheduled report do not vary each time the report is sent. Separate multiple email recipients using commas. If you need to vary the email recipients for scheduled reports, create different schedules for each set of emailed recipients.

## Related Topics

{% page-ref page="../../../../package-development-distribution/package-a-connector/saved-searches-package.md" %}

{% page-ref page="../../../../package-development-distribution/first-topic.md" %}

{% page-ref page="../../what-is-a-saved-search.md" %}

{% page-ref page="../" %}

{% page-ref page="./" %}

{% page-ref page="view-schedules-to-email-reports.md" %}

{% page-ref page="schedule-an-interval-to-email-reports.md" %}

{% page-ref page="edit-a-scheduled-interval-to-email-reports.md" %}

{% page-ref page="delete-a-scheduled-interval-to-email-reports.md" %}

{% page-ref page="../../create-and-share-a-saved-search.md" %}

{% page-ref page="../../manage-your-saved-searches/" %}

