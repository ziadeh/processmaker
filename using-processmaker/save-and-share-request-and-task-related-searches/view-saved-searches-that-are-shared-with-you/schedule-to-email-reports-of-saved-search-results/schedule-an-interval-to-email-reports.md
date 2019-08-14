---
description: Schedule an interval to regularly email reports of a Saved Search's results.
---

# Schedule an Interval to Email Reports

## Schedule an Interval to Email Reports

{% hint style="info" %}
### Don't Know What a Saved Search Is?

See [What is a Saved Search?](../../what-is-a-saved-search.md) to learn how you can share the same Request and Task search parameters with other ProcessMaker users in your organization.

### ProcessMaker Package Required

To schedule reports for a [Saved Search](../../what-is-a-saved-search.md)'s results, the [Saved Searches package](../../../../package-development-distribution/package-a-connector/saved-searches-package.md) must be installed in your ProcessMaker instance. The Saved Searches package is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Saved Searches package can be installed in your ProcessMaker instance.
{% endhint %}

Follow these steps to schedule an interval to email reports of a Saved Search's search results:

1. [View the schedules to email reports of a Saved Search's results](../view-search-results-for-a-saved-search.md). The **Scheduled Reports** page displays for that Saved Search.
2. Click the **Add Scheduled Report** button. The **Schedule Report** screen displays. ![](../../../../.gitbook/assets/schedule-report-screen-saved-search-package.png) 
3. From the **Day of the week** field, select the day of the week in which to email the report of the Saved Search's results. Only one day may be selected. If multiple days are required, then create another schedule that sends the report on a different day.
4. In the **Time** field, enter the time in 24-hour format in which to email the report.
5. In the **Send To** field, enter the email address\(es\) for the email recipients to receive the report. Separate multiple email recipients using commas.
6. In the **Email Subject** field, enter the email subject of your report to which the report will be attached.
7. From the **Email Body** option, do one of the following:
   * In the **Email Body** field, enter the email body content for your report.
   * Select the **Would you like to use a custom Email Screen?** option. A drop-down menu displays from which you can select an [Email](../../../../designing-processes/design-forms/screens-builder/types-for-screens.md#email)-type [ProcessMaker Screen](../../../../designing-processes/design-forms/what-is-a-form.md) that will display its contents as the email body. ![](../../../../.gitbook/assets/email-screen-drop-down-schedule-saved-search-package.png) 
8. From the **File Format** option, select one of the following options to specify the format of the emailed report that is attached to the email:
   * **CSV:** Select the **CSV** option to email the report in `.CSV` format.
   * **XLSX:** Select the **XLSX** option to email the report in `.XLSX` format.
9. Click **Save**.

## Related Topics



