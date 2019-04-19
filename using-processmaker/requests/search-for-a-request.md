---
description: Search for any Request in which you started or participated.
---

# Search for a Request

## Search for a Request

Search for any Request that displays within the Request page you are viewing. Follow these steps to search for a Request within the displayed page:

1. Do one of the following:
   * Click the **Requests** option from the top menu if it is not currently displayed. The **My Requests** page displays.
   * Click the Home breadcrumb icon![](../../.gitbook/assets/home-breadcrumb-icon.png)if the **Requests** page is not currently displayed. The **My Requests** page displays.
2. View any of the following Request pages to search its Requests:
   * [My Requests](make-a-request.md) tab \(if it is not currently displayed\)
   * [In Progress](view-in-progress-requests.md) tab
   * [Completed](view-completed-requests.md) tab
   * [All Requests](view-all-requests.md) tab \(Note that your ProcessMaker user account must have the [**Requests: All Requests** permission](../../processmaker-administration/permission-descriptions-for-users-and-groups.md#requests) to view the **All Requests** tab.\)
3. Enter in the **Search** field the Request data to filter Requests using any of the following criteria:

   * **Name:** Filter by the Process name associated with the Request that displays in the **Name** column.
   * **Status:** Filter by the Request status that displays in the **Status** column.
   * **Request participant:** Filter by a Request participant's username.
   * **Request data:** Filter using JSON objects associated with the Request data. To do this, you must know the JSON data objects associated with the Request's Process.

   For example, suppose that you wanted to search for a completed Request in which John Doe was a participant, and he requisitioned a laptop that cost less than $1,000. Enter the following Request data in the **Search** field:

   `status="completed" and participant="jdoe" and (purchase.item="laptop" AND purchase.cost < 1000)`

As you enter text into the **Search** field, Requests display that match your entered text.

{% hint style="info" %}
### Scope of Search Results <a id="search-for-a-request"></a>

Search results display only for Requests within the Request page you are viewing. For example, performing a search from within the **My Requests** page displays results only for Requests within that page.

To search using Request data objects

### View a Request Summary <a id="view-information-about-a-request"></a>

To [view a Request summary](request-details.md), do one of the following:

* From the **Name** column, click the Process name associated with the Request that you want to view.
* Click the **Open Request** icon![](https://firebasestorage.googleapis.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LJ0aNaVW1m7sNsxVJLV%2F-LVEg50XN0-PSaV6jG0a%2F-LVEzGdlTxxh1B2FNuS7%2FOpen%20Request%20Icon%20-%20Requests.png?alt=media&token=006d03ea-98dd-4227-b702-31f7e709df10)for the Request that you want to view its summary.

### No Search Results?

If there are no search results, the following message displays: **No data available**.
{% endhint %}

## Related Topics

{% page-ref page="what-is-a-request.md" %}

{% page-ref page="make-a-request.md" %}

{% page-ref page="delete-a-request.md" %}

{% page-ref page="view-started-requests.md" %}

{% page-ref page="view-in-progress-requests.md" %}

{% page-ref page="view-completed-requests.md" %}

{% page-ref page="view-all-requests.md" %}

{% page-ref page="request-details.md" %}

