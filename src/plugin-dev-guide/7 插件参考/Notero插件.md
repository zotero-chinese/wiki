---
title: Notero插件
date: 2023-08-26 10:06:59
updated: 2023-07-20 16:51:54
---
Notero插件

[插件官网](https://github.com/dvanoni/notero)

# 插件说明

Notero is a [Zotero plugin](https://www.zotero.org/support/plugins) for syncing items into [Notion](https://www.notion.so/Intro-to-databases-fd8cd2d212f74c50954c11086d85997e). To use it:

1.  📔 [Configure](https://github.com/dvanoni/notero#configure-notion) your Notion database.
2.  💾 [Install](https://github.com/dvanoni/notero#install-and-configure-notero-plugin) the Notero plugin into Zotero.
3.  📁 Choose your Zotero collections to monitor.
4.  📝 Add or update items in your collections.
5.  🔄 Watch your items sync into Notion!

# 如何使用

## Why Use Notero?

- Allows you to integrate your reference manager, task list, reading notes, analytical tables, and drafts in one location.
- The name of database entries is the in-text citation, which allows you to easily link to references when writing in Notion.
- Create custom views to filter and sort large reference lists by project, tag, author, etc.
- Backlinks make it easy to locate any of the notes and drafts that mention a reference.
- Link references to entries in other databases, such as projects, tasks, manuscripts in your publication pipeline, publishing outlets, etc.

## How Notero Works

The Notero plugin watches for Zotero items being added to or modified within any collections that you specify in the Notero preferences. Whenever an item is added or modified, Notero does a few things:

- Save a page with the Zotero item's properties (title, authors, etc.) into the Notion database specified in Notero preferences.
- Add a notion tag to the Zotero item.
- Add an attachment to the Zotero item that links to the page in Notion.

In addition to providing a convenient way to open a Notion page from Zotero, the link attachment also serves as a reference for Notero so that it can update existing pages instead of creating duplicate pages for a given Zotero item.

### Syncing Items

By default, Notero will sync items in your monitored collections whenever they are modified. You can disable this functionality by unchecking the Sync when items are modified option in Notero preferences.

If you disable Sync when items are modified and would like to trigger a re-sync of an item, you can remove the item from the monitored collection and add it back in.

⚠️ *Note: To prevent the "sync on modify" functionality from saving to Notion multiple times,* *Notero* *does not notify* *Zotero* *when the tag and link attachment are added to an item. This means they may not appear in Zotero immediately, and you may need to navigate to a different item and back to make them appear.*

## Installation and Setup

The [latest release](https://github.com/dvanoni/notero/releases/latest) of the plugin is available on GitHub. See the [changelog](https://github.com/dvanoni/notero/blob/main/CHANGELOG.md) for release notes.

Detailed setup instructions are below.

### Configure Notion

1.  Obtain a Notion internal integration token from https://www.notion.com/my-integrations.

1.  See [Notion developer docs](https://developers.notion.com/docs/getting-started#step-1-create-an-integration) for detailed instructions.

2.  Create the database that you would like to sync Zotero items into.

1.  See [examples](https://github.com/dvanoni/notero#example-notion-databases) below that you can duplicate into your Notion workspace.

3.  Share the database with the integration you created in step 1.

1.  See [Notion developer docs](https://developers.notion.com/docs/getting-started#step-2-share-a-database-with-your-integration) for detailed instructions.

4.  Take note of the database ID.

1.  From the [Notion developer docs](https://developers.notion.com/docs/working-with-databases#adding-pages-to-a-database), here's a quick procedure to find the database ID:

- Open the database as a full page in Notion. Use the Share menu to Copy link. Now paste the link in your text editor so you can take a closer look. The URL uses the following format:
- Find the part that corresponds to {database_id} in the URL you pasted. It is a 32 character long string. This value is your database ID.
- Note that, if you have not set a workspace name, the {workspace_name} part of the URL will not be present.
- Also note that the ID is a UUIDv4, and it may include four hyphens. If it does, it will be 36 characters of the form xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.

1.  Configure the database properties as desired. See the [database properties](https://github.com/dvanoni/notero#notion-database-properties) section below for more details.

#### Notion Database Properties

Notero can sync data for the properties listed below. The only property required by Notero is one with the Title property type. The other properties are optional, so you can use only the ones that suit your needs.

The Title property can be named something other than Name as long as it does not conflict with any of the other property names. The name and type of the other properties must be configured exactly as specified here. Note that property names are case-sensitive, so the capitalization must match exactly.

|     |     |     |
| --- | --- | --- |
| **Property Name** | **Property Type** | **Notes** |
| Name | Title | Currently formatted as a citation, but see issue [#14](https://github.com/dvanoni/notero/issues/14) |
| Abstract | Text |     |
| Authors | Text |     |
| Date | Text |     |
| DOI | URL |     |
| Editors | Text |     |
| File Path | Text |     |
| Full Citation | Text | Format is based on the Zotero setting for Export → Quick Copy → Item Format |
| In-Text Citation | Text | Currently APA style, but see issue [#5](https://github.com/dvanoni/notero/issues/5) |
| Item Type | Select |     |
| Tags | Multi-select |     |
| Title | Text |     |
| URL | URL |     |
| Year | Number |     |
| Zotero URI | URL |     |

Support for additional properties is planned for the future. See issues: [#30](https://github.com/dvanoni/notero/issues/30)[#49](https://github.com/dvanoni/notero/issues/49)[#52](https://github.com/dvanoni/notero/issues/52)[#65](https://github.com/dvanoni/notero/issues/65)

### Install and Configure Notero Plugin

1.  Download the [latest version](https://github.com/dvanoni/notero/releases/latest) of the .xpi file.

1.  Note for Firefox users: You'll need to right-click the .xpi file link and choose Save Link As... in order to properly download the file.

2.  Open the Zotero Add-ons Manager via the Tools → Add-ons menu item.
3.  Install the .xpi file by either:

1.  dragging and dropping it into the Add-ons Manager window *or*
2.  selecting it using the Install Add-on From File... option in the gear menu in the top-right corner of the window

4.  Restart Zotero to activate the plugin.
5.  Open the Notero preferences from the Tools → Notero Preferences... menu item, and enter the required preferences.

## Usage Guides

For more visual guides of setting up and using Notero, see the following resources made by wonderful members of the community:

- [Using Notion and Zotero to build a literature tracker](https://one-carat-blog.netlify.app/posts/notion_literature/) (blog post) by [Jewel Johnson](https://jeweljohnsonj.github.io/jewel_resume/)
- [Smart notetaking by starting with integrating Zotero and Notion: A first step](https://youtu.be/4Z_5tskdNsY?t=1173) (video) by [Dr. Jingjing Lin](https://jingjing-lin.com/)
- [Sync Zotero to Notion to Level-Up Your Academic Research | AWESOME Notion Plug-In | Notion Tutorial](https://youtu.be/8IC8-mPbjCo) (video) by [Holly Jane Woods](https://hollyjanewoods.com/)

*If you'd like to share how you use* *Notero* *and want to be listed here, please feel free to submit a* *PR* *or* [contact me](https://twitter.com/dvanoni)*!*

## Frequently Asked Questions

### How to sync from Notion back into Zotero

While this would be nice, it's unfortunately beyond the scope of this plugin. Getting updates from Notion into Zotero would require setting up a hosted service that subscribes to webhooks from Notion and then uses the Zotero API to update items in Zotero. Notion has yet to release official webhook support, but there are some third-party tools that can be used for this. In theory, this is technically possible, but it would be a separate project.

### How to sync attached files into Notion

There currently isn't a good way to sync files or link to local files due to the following limitations with Notion:

- The Notion API [does not currently support uploading files](https://developers.notion.com/reference/file-object#externally-hosted-files-vs-files-hosted-by-notion).
- Notion only supports http: and https: URLs, so it's not possible to link directly to the file using a file: URL.

For now, the best workarounds are:

- Use the File Path property to point you to the location of the local file.
- If you sync your files into your Zotero account, you can open the Zotero web interface from the Zotero URI property and then open the file from there.

### How to bulk sync existing items

To sync multiple items that are already in a monitored collection, you can trigger a sync by adding a temporary tag to them. Create a new tag, add it to all the items by selecting them and dragging them onto the tag, then delete the tag.

Video example of syncing multiple items

### How to fix Notion API errors

#### Could not find database

If you receive the following error:

APIResponseError: Could not find database with ID: *xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx*

This most likely means you have not given Notero access to your Notion database. Ensure you follow all the steps from the [Configure Notion](https://github.com/dvanoni/notero#configure-notion) section. Clicking the Share button in the top-right corner of your database should show the Notero integration as follows:

Example of share settings

#### Can't update a page that is archived

If you receive the following error:

APIResponseError: Can't update a page that is archived. You must unarchive the page before updating.

This can happen when Notero tries to sync an item that already had a Notion page created for it from a previous sync, but that page has since been deleted. (Note that deleting a Notion page moves it into the trash, and the Notion API refers to this as "archived.")

As described in the [How Notero Works](https://github.com/dvanoni/notero#how-notero-works) section, Notero associates Zotero items with Notion pages through a link named Notion attached to the item. To resolve the issue, delete this link attachment on the offending item(s) and then perform the sync again.

#### Not a property that exists

If you receive the following error:

APIResponseError: *property* is not a property that exists

This can happen if you previously synced items into one Notion database and then change your Notero preferences to specify a different database. Notero may be trying to update pages in the old database instead of creating pages in the new database, and this error can occur if different properties were configured in the different databases.

To solve this, you should delete the old database in Notion and then permanently delete it from the Trash in Notion.

## Example Notion Databases

We provide some example Notion databases that have been configured with all the properties synced by Notero.

Once you've opened one of the examples, click the Duplicate button in the top-right corner of the page to duplicate it into your Notion workspace.

### [Basic Example](https://dvanoni.notion.site/5ba9956716ac4218be77d2b4655911f5)

An empty database that contains only the properties synced by Notero. Useful if you want to start from scratch and customize it yourself.

### [Advanced Example](https://dvanoni.notion.site/79b17005bc374209b0f373b1a3cde0ae)

A database with multiple views and some sample entries. See below for descriptions of how you can use the different views.

#### Bibliographic Info Table View

- Table view enables easy editing of entries.
- Easily navigate to the original source by clicking on the DOI or URL property.

- DOIs for books may need to be copy & pasted manually from the Extra field in Zotero.

- Click on the Zotero URI property to view/edit the entry in Zotero or to export the bibliography entry in a different citation style.

#### Reading Status Board View

- Keep track of promising references you need to locate, books and articles you requested via interlibrary loan, and works that are relevant enough to warrant taking in-depth notes or writing a memo.

#### Literature Review Table View

- Quickly analyze and compare attributes of literature you are reviewing (e.g., theoretical framework, sample, methods used, key findings, etc.)
- Easily link to other works using the Related References property (e.g., articles in the same special issue, book chapters in the same edited book, studies and commentary that respond to or extend other works).

#### Books Gallery View

- Add a cover image (e.g., right click → copy image address from Amazon).
- Keep track of which books you own, borrow, and lend to others.

- Add due dates and reminders for library books and interlibrary loans.