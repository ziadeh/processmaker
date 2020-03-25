---
description: Send automatic notifications to Slack channels during Requests.
---

# Slack Notification Connector

## Overview

The [Slack](https://slack.com/) Notification [connector](../what-is-a-connector.md) is part of the [Slack Notification package](../../../../package-development-distribution/package-a-connector/slack-notification-package.md). When you add the Slack Notification connector to your Process model and then select to which Slack channel to send a notification, ProcessMaker can automatically send the notification during [Requests](../../../../using-processmaker/requests/what-is-a-request.md).

{% hint style="info" %}
### ProcessMaker Package Required

The Slack Notification connector requires that the [Slack Notification package](../../../../package-development-distribution/package-a-connector/slack-notification-package.md) be installed in your ProcessMaker instance. The Slack Notification connector and the Slack Notification [package](../../../../package-development-distribution/first-topic.md) are not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Slack Notification connector can be installed in your ProcessMaker instance.

### Grant ProcessMaker Access to Your Slack Workspace

Before using the Slack Notification connector in your Process models, your ProcessMaker instance must be granted access to your Slack workspace by building a [Slack App](https://api.slack.com/start/overview). Ask your Slack administrator to help you with the following:

* [Build a Slack app](https://api.slack.com/apps).
* [Install the Slack app to your Slack workspace](https://api.slack.com/authentication).
* [Verify requests from Slack](https://api.slack.com/authentication/verifying-requests-from-slack).
{% endhint %}

