---
description: Use the ProcessMaker SAML package to single sign-on to ProcessMaker.
---

# What is Single Sign-On \(SSO\)?

## Overview

{% hint style="info" %}
### ProcessMaker Package Required

To single sign-on \(SSO\) to ProcessMaker via SAML, the [SAML package](../../package-development-distribution/package-a-connector/saml-package.md) must be installed in your ProcessMaker instance. The SAML package is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the SAML package can be installed in your ProcessMaker instance.
{% endhint %}

Single sign-on \(SSO\) is a centralized session and user authentication service in which one set of log on credentials can be used to access multiple applications. For example, if your organization uses Google Suite to authenticate people in your organization, ProcessMaker users authenticate into your ProcessMaker instance using their Google credentials. In this example, Google Suite is the identity provider, while ProcessMaker is the service provider.

The ProcessMaker SAML package uses the open-standard Security Assertion Markup Language \(SAML\) format to exchange authentication and authorization data between parties when establishing a SSO session. The ProcessMaker SAML package uses the [SAML 2.0 open standard](https://en.wikipedia.org/wiki/SAML_2.0).

The ProcessMaker SAML package requires an HTTPS connection and access to a SAML identity provider service.

## Related Topics

{% page-ref page="view-the-saml-settings.md" %}

{% page-ref page="../../package-development-distribution/package-a-connector/saml-package.md" %}

{% page-ref page="../../package-development-distribution/first-topic.md" %}

