---
description: >-
  Configure the ProcessMaker SAML package to single sign-on (SSO) to your
  ProcessMaker instance.
---

# Configure Single Sign-On \(SSO\) Via SAML

## Configure Single Sign-On \(SSO\) Via SAML

{% hint style="info" %}
### ProcessMaker Package Required

To configure single sign-on via SAML, the [SAML package](../../package-development-distribution/package-a-connector/saml-package.md) must be installed in your ProcessMaker instance. The SAML package is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the SAML package can be installed in your ProcessMaker instance.
{% endhint %}

Follow these steps to configure SAML settings to single sign-on to your ProcessMaker instance:

1. [Log on](../../using-processmaker/log-in.md#log-in) to ProcessMaker.
2. Click the **Admin** option from the top menu. The **Users** page displays.
3. Click the **Auth SAML** icon![](../../.gitbook/assets/auth-saml-icon-package-admin.png). The **SAML Configuration** page displays the settings for the SAML package.  ![](../../.gitbook/assets/saml-configuration-package-admin.png) 
4. Document the following information to provide the identify provider in which you will single sign-on to your ProcessMaker instance:
   * **ACS Url:** The **ACS Url** field displays the Assertive Customer Service \(ACS\) URL. This URL is your ProcessMaker instance that accepts messages or SAML artifacts from the service provider to establish the SSO session.
   * **Entity ID \(Metadata\):** The **Entity ID \(Metadata\)** field displays the URL to the SAML XML file in your ProcessMaker instance that the service provider reads when establishing the SSO session.
5. 
## Related Topics

{% page-ref page="what-is-single-sign-on.md" %}

{% page-ref page="../../package-development-distribution/package-a-connector/saml-package.md" %}

{% page-ref page="../../package-development-distribution/first-topic.md" %}

