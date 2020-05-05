---
description: Access ProcessMaker RESTfulAPI documentation from your ProcessMaker instance.
---

# Access ProcessMaker RESTful API Documentation

## Overview

{% hint style="info" %}
View this [ProcessMaker API documentation](https://staging-pm4.processmaker.net/api/documentation) to quickly view how to use the ProcessMaker RESTful API without testing API endpoints.
{% endhint %}

Despite the ProcessMaker user interface, ProcessMaker operates entirely from a RESTful API. ProcessMaker Administrators and developers may want to access the ProcessMaker API documentation to understand how to use endpoints or to consider how to extend ProcessMaker functionality for their own use cases.

If you view the ProcessMaker API documentation while logged on to your ProcessMaker instance, you may also test API endpoints to see how they work. For example, view the [curl](https://github.com/curl/curl) command or URL to run a ProcessMaker API endpoint, the possible responses and returned schema structure, and other technical information how to use that API endpoint. To test API endpoints, you must be logged on as an authenticated ProcessMaker user.

You must have the following to test ProcessMaker API endpoints from the API documentation:

* You must know the base URL to your ProcessMaker instance. Example: `https://MyOrganization.processmaker.net/`.
* You must have a ProcessMaker user account so that the ProcessMaker API can authenticate you. See [Create a New User Account](../processmaker-administration/add-users/manage-user-accounts/create-a-user-account.md#create-a-processmaker-user-account).
* You must be [logged on](../using-processmaker/log-in.md#log-on) to your ProcessMaker user account.

## View the API Documentation

If you want to view how robust ProcessMaker functionality is and read how to use each API endpoint, you may view the [ProcessMaker RESTful API documentation](https://staging-pm4.processmaker.net/api/documentation). However, since you are not viewing this documentation as an authenticated ProcessMaker user, you cannot test API endpoints. See [Test API Endpoints from the API Documentation](access-processmaker-api-documentation.md#test-api-endpoints-from-the-api-documentation) for that information.

View this [ProcessMaker API documentation](https://staging-pm4.processmaker.net/api/documentation) without testing API endpoints.

## Test API Endpoints from the API Documentation

Follow these steps to test ProcessMaker RESTful API endpoints from the [API documentation](https://staging-pm4.processmaker.net/api/documentation):

1. [Log on](../using-processmaker/log-in.md#log-in) to ProcessMaker.
2. Open a new Web browser tab or window.
3. Append `api/documentation` to the end of your ProcessMaker instance's base URL. Example: `https://MyOrganization.processmaker.net/api/documentation`. The ProcessMaker API documentation displays.
4. Click the **Expand operation** icon![](../.gitbook/assets/swagger-expand-operation-icon.png)for the ProcessMaker API endpoint you want to test. Technical information about that API endpoint displays.
5. Click the **Try it out** button, and then enter parameters documented for that API endpoint into their appropriate fields.
6. Click **Execute**.

## Make API Calls with the ProcessMaker Data Connector package

If your ProcessMaker instance has the ProcessMaker [Data Connector package](../package-development-distribution/package-a-connector/data-connector-package.md) installed, you may use a ProcessMaker Data Connector to make requests \(calls\) with the ProcessMaker API associated with your ProcessMaker instance. See [Manage Data Connectors](../designing-processes/data-connector-management/manage-data-connectors/).

## Related Topics

{% page-ref page="../designing-processes/data-connector-management/manage-data-connectors/" %}

{% page-ref page="../package-development-distribution/package-a-connector/data-connector-package.md" %}

{% page-ref page="../using-processmaker/log-in.md" %}

{% page-ref page="../processmaker-administration/add-users/manage-user-accounts/create-a-user-account.md" %}

