---
description: Welcome to ProcessMaker documentation. This is a good place to start.
---

# How to Use This Document

## Overview

ProcessMaker is a next-generation intelligent business process management software \(iBPMs\) platform for the enterprise to easily design and implement BPMN 2.0 compliant business processes within a modern and extensible system.

ProcessMaker is a low-code, intelligent BPM platform for enterprises that want to get to, and stay ahead of, digital transformation. ProcessMaker orchestrates both people, processes, and systems to build strong, future-proof companies to outlast the competition and become engines for innovation.

Our latest release empowers business users and developers alike to use the most cutting-edge workflow automation tools to digitally transform any business for success. ProcessMaker builds on popular BPM and workflow features and contains elegant functionality in our most powerful platform yet.

Our goal for ProcessMaker is to deliver simplicity, but to allow complexity. ProcessMaker is easy to use, and allows you to design customized processes and end-user experiences.

## Use This Document Based on How You Use ProcessMaker

This document is organized based on how different roles use ProcessMaker. Refer to the following roles:

* [ProcessMaker Administrator](how-to-use-this-document.md#processmaker-administrator)
* [Process Owner](how-to-use-this-document.md#process-owner)
* [ProcessMaker Developer](how-to-use-this-document.md#processmaker-developer)
* [ProcessMaker User](how-to-use-this-document.md#processmaker-user)

### ProcessMaker Administrator

A ProcessMaker Administrator installs ProcessMaker on-premises. \(On-premises installations are not necessary for ProcessMaker Enterprise cloud deployments.\) A ProcessMaker Administrator also performs administrative tasks in ProcessMaker.

Refer to the **Install ProcessMaker** section that includes the following topics:

* [On-Premises Server Requirements](../install-processmaker/prerequisites.md)
* [Download ProcessMaker for On-Premises Open-Source Installation](../install-processmaker/installation-guide.md)

Refer to the **ProcessMaker Administration** section that includes the following topics:

* [User Management](../processmaker-administration/add-users/)
* [Group Management](../processmaker-administration/assign-groups-to-users/)
* [Permission Descriptions for Users and Groups](../processmaker-administration/permission-descriptions-for-users-and-groups.md)
* [Client Authentication Management](../processmaker-administration/auth-client-management/)
* [Customize the ProcessMaker User Interface](../processmaker-administration/customize-the-processmaker-user-interface.md)
* [Queue Management](../processmaker-administration/queue-management/)
* [Single Sign-On \(SSO\) to ProcessMaker Via SAML](../processmaker-administration/single-sign-on-to-processmaker-via-saml/)

Learn about how to extend ProcessMaker functioning by adding [packages](../package-development-distribution/first-topic.md).

### Process Owner

A Process Owner designs and maintains ProcessMaker [Processes](../designing-processes/viewing-processes/what-is-a-process.md) that both people use to make [Requests](../using-processmaker/requests/what-is-a-request.md).

Refer to the **Manage and Model Processes** section that includes the following topics:

* [Process Management](../designing-processes/viewing-processes/)
* [Script Management](../designing-processes/scripts/)
* [Screen Management](../designing-processes/design-forms/)
* [Reference Magic Variables in ProcessMaker Assets](../designing-processes/reference-global-variables-in-your-processmaker-assets.md)
* [Environment Variable Management](../designing-processes/environment-variable-management/)
* [Process Modeling](../designing-processes/process-design/)
* [Vocabularies Management](../designing-processes/vocabularies-management/)

Learn about [ProcessMaker Collections](../collections/what-is-a-collection.md) and extending ProcessMaker functionality by adding [packages](../package-development-distribution/first-topic.md).

### ProcessMaker Developer

A ProcessMaker Developer extends out-of-the-box ProcessMaker functionality in the following ways:

* Develop [ProcessMaker Scripts](../designing-processes/scripts/what-is-a-script.md) that Process Owners use in Processes.
* Learn how to [manage scripts](../designing-processes/scripts/) and develop ProcessMaker Scripts in [Scripts Editor](../designing-processes/scripts/scripts-editor.md).
* Learn how to [access the ProcessMaker API](../processmaker-api-documentation/access-processmaker-api-documentation.md).

Refer to the [Script Management](../designing-processes/scripts/) section, especially the [Scripts Editor](../designing-processes/scripts/scripts-editor.md) topic.

### ProcessMaker User

A ProcessMaker user is a person whose only interaction with ProcessMaker is to start, cancel, and/or participate in Requests. 

Refer to the **Using ProcessMaker** section that includes the following topics:

* [Log On to ProcessMaker](../using-processmaker/log-in.md)
* [Profile Settings](../using-processmaker/profile-settings.md)
* [View ProcessMaker Version Information](../using-processmaker/application-version-details.md)
* [Session Timeout Warning](../using-processmaker/session-timeout-warning.md)
* [Log Out of ProcessMaker](../using-processmaker/log-out.md)
* [Requests](../using-processmaker/requests/)
* [Task Management](../using-processmaker/task-management/)
* [Search ProcessMaker Data Using ProcessMaker Query Language \(PMQL\)](../using-processmaker/search-processmaker-data-using-pmql.md)
* [Saved Searches](../using-processmaker/save-and-share-request-and-task-related-searches/)
* [Notifications](../using-processmaker/notifications.md)
* [Control How Tabular Information Displays](../using-processmaker/control-how-requests-display-in-a-tab.md)

## Document Conventions

This document uses different font styles, types, and weights to represent types of information. The conventions described below are used in paragraphs and do not represent style variations in document titles or headers, nor standard document conventions such as for hyperlinks.

The table below describes these document conventions.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Convention</th>
      <th style="text-align:left">Description</th>
      <th style="text-align:left">Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>Bold</b>
      </td>
      <td style="text-align:left">
        <p>Represents the following:</p>
        <ul>
          <li>Application labels such as for menus, fields, and panels</li>
          <li>Application messages displayed to the user</li>
        </ul>
      </td>
      <td style="text-align:left">
        <ul>
          <li>Click the <b>Submit</b> button.</li>
          <li>The following message displays: <b>The file was saved successfully.</b>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>Code</code>
      </td>
      <td style="text-align:left">
        <p>Represents the following:</p>
        <ul>
          <li>File extension types</li>
          <li>Code samples and code blocks</li>
        </ul>
      </td>
      <td style="text-align:left">
        <ul>
          <li>A <code>.deb</code> file extension is downloaded.</li>
          <li><code>npm install</code>
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>