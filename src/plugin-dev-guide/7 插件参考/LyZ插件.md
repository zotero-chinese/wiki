---
title: LyZ插件
date: 2023-08-26 10:06:59
updated: 2023-07-20 16:51:54
---
LyZ插件

[插件官网](https://github.com/wshanks/lyz)

# 插件说明

LyZ is a plugin for [Zotero](http://www.zotero.org/), which is intended to make working with LyX/Zotero more pleasant. The latest source code is available at [GitHub](https://github.com/wshanks/lyz). The latest stable release is available from [the GitHub releases page](https://github.com/wshanks/lyz/releases).

# 如何使用

## Features

- Inserting citations to LyX from Zotero.
- BibTeX database automatically updated when citation is inserted.
- BibTeX database can be updated when the references in Zotero are modified.
- Custom BibTeX key format.
- Unique BibTeX key check.
- Custom BibTeX translators.
- Synchronization of BibTex keys between LyX document, BibTeX database and LyZ.
- Editing of master/child documents (the same BibTeX database) and multiple documents (different BibTeX database for each document).
- Persistent association of LyX documents and BibTeX databases.
- Support for group cooperation.

NOTE: As of version 4.0, LyZ is distributed from the [GitHub releases page](https://github.com/wshanks/lyz/releases). New updates will not be published to the location checked by previous versions of LyZ (the Mozilla Add-ons page). To receive new LyZ updates, please update to the latest version of LyZ.

## Installation and Settings

1.  Download the lyz .xpi file from the [GitHub releases page](https://github.com/wshanks/lyz/releases).
2.  Install LyZ in Zotero by selecting Add-ons from the Tools menu and then clicking the gear icon in the Add-ons window, selecting "Install add-on from file" and selecting the lyz .xpi file.
3.  Open LyX and set LyXServer path (in LyX go to menu, Tools > Preferences... > Paths and set LyXServer pipe to): Windows users can use the default path setting in LyZ, i.e. \\\.\\pipe\\lyxpipe. Linux and Mac users can use e.g. ~/.lyxpipe and change the LyZ settings accordingly.
4.  By default all characters are escaped, e.g. š becomes \\v{s}. Set extensions.lyz.use_utf8 to true in about:config to avoid escaping (in case you need to use non-latin scripts such as Chinese).
5.  Open document in LyX.

NOTE for Firefox users: Firefox treats .xpi files as Firefox add-ons and tries to install them. To download:

1.  Right click on link
2.  Select 'Save Link As'
3.  Select a folder to save in
4.  Click 'Save'
5.  The file will now download

You can also download it either with a different browser or with a command-line tool like curl or wget.

## Adding and inserting citations

1.  Open the LyX document you want to add a citation to and put the cursor at the point in the text at which you want the citation added.
2.  From Zotero, select a citation and either from the LyZ menu or from the context menu (right click on the citation) do “Cite in LyX”.
3.  When you try to insert a citation into a new document (i.e. document unknown to LyZ) you have to select a BibTeX database. You will be asked to either create a new database or choose a database you have created before (by LyZ). Type the database name (*.bib extension is automatically added if you don’t provide it) and press OK. The citation is added into the BibTeX database you have just created and inserted into the LyX document. Your citation should appear in LyX document now. Further citations are automatically added to this database.
4.  Insert the BibTeX database into the LyX document by adding a bibliography (Insert->List/TOC->BibTeX Bibliography...) and then selecting the newly created *.bib file as the database.

1.  From the bibliography window (which appears when the bibliography is created and may be accessed by clicking on the bibliography), you may also select a BibTeX style file (*.bst). This file determines how your references will be formatted in the bibliography. Most TeX packages come with a large number of style files. Some journals (or other publishing entities) also provide their own style files. One good option is [apalike2](http://www.ctan.org/pkg/apalike2).
2.  From Document->Settings->Bibliography, you may choose a citation style which determines how your citations will appear in the text. Natbib and Jurabib give more flexible citation styles than the default numerical option.
3.  A helpful introduction to working with BibTeX and LyX is available from the [LyX website](http://wiki.lyx.org/BibTeX/Introduction).

5.  Insert additional citations

1.  New citations can be added from Zotero as above.
2.  Previously added citations can be either inserted through Zotero or through the LyX interface.

6.  If you modify the reference information of previously cited items in Zotero, use “Update BibTeX” from the LyZ menu to update the BibTeX database.

## Custom BibTeX keys

- Custom BibTeX keys can be set in LyZ > Settings dialog.
- The default format is “author year title”. Good alternative for the use with natbib package is format “zotero”, which will produce “human unreadable” BibTeX keys. It consists of library ID and zotero item key, e.g. 0_XXXXX. Format keyword “zoteroShort” will produce only XXXXX, which can be used when exporting from OOo.
- Key formats can be composed from keywords “author”, “year”, “title”, “zotero” and separators such as “_” (the following characters should be safe to use: a-z, 0-9!$&*+-.:;<>?\[\]^\\`|), e.g. “author year title”, which will produce authoryeartitle BibTeX key, e.g. tichy1988thefoundations. If you prefer the default format used in Zotero BibTeX export (tichy\_thefoundations\_1988), change the pattern to “author _ title _ year”. The keywords and any separating characters have to be separated by space. Characters in citekeys are escaped and unsafe characters are removed conforming to the regular expression /\[^a-z0-9\\!\\$\\&\\*\\+\\-\\.\\/\\:\\;\\&lt;\\&gt;\\?\\\[\\\]\\^\\_\\`\\|\]+/g.
- If you use custom BibTeX translator and want to use the cite keys generated in the translator, go to LyZ > Setting and switch creation of cite keys off.

## Update BibTeX

Menu command “Update BibTex” will update BibTeX database of the active LyX document. Whatever changes made in Zotero will be reflected in the update, including BibTeX keys if the BibTeX key format or the relevant information (first author, title, year) have been changed.

When a single BibTeX database is shared among several authors, e.g. using version control system such as SVN and CVS, LyZ database is updated from local working copy of BibTeX database.

Only current LyX document will be updated. Multiple document update is implemented, but seems unreliable. Needs more testing…

## Synchronization between LyX/BibTeX/LyZ

When Zotero reference is changed, BibTeX database as well as the LyX document can be updated. This is useful when nice BibTeX keys are used, such as ‘author year title’ and e.g. the title or the first author’s surname has been modified, which will result in modification of the BibTeX key. When the “Update BibTeX” is run, you should select to update the LyX document in case your modifications to Zotero references might affect your BibTeX keys. Before the update, a backup of the active LyX document is made (extension *.lyz). LyZ will save, close and then reopen your document.

## Notes on usage

- Always modify your references in Zotero. If you modify the BibTeX database manually or using other software, LyZ will overwrite all the changes when you run “Update BibTeX“.
- Lyz stores identifiers for all of the references in the BibTeX database as a space separated string in the first line of the BibTeX file. Do not modify this line. When Lyz updates the BibTeX file, it first reads this line to check the current contents of the BibTeX (this behavior is useful if you are passing the BibTeX around between computers and want Lyz to keep up with the changes). If this line is not properly formed, an error will occur and Lyz will not work properly.
- Keep your Zotero items unique. LyZ does not make an attempt to identify duplicates, they will be treated as different items and unique BibTeX keys will be created.
- When working with master/child documents in LyX, you will have to specify the BibTeX database for each child document. This will be the same file as specified for the master document. Unfortunately LyZ has no way of knowing the relationship between documents, so it has to be done manually.
- Old writing projects can be deleted from LyZ menu. When the record of BibTeX database is deleted, all associated LyX document records are also deleted. When LyX document is deleted, associated BibTeX database will remain untouched as it may be used by another document. The actual file won’t be deleted.
- BibTeX database is uniformly exported to UTF8 and all characters are escaped. Exporting to doesn’t seem to have any advantages. When your references contain extra characters such as the degree symbol, add \\usepackage{textcomp} to your preamble.
- URLs in bibliography. Use bibliography style that can handle URLs, such as apalike, or add \\usepackage{url} to your preamble.
- LyZ stores the information about documents and BibTeX databases in lyz.sqlite in the Zotero folder. If you backup Zotero with some synchronization application, you will notice the new file.
- When working with non-latin scripts such as Chinese, set extensions.lyz.use_utf8 to true in about:config to avoid escaping.

## Problems, Ideas, Requests

Please follow these tips to find out the source of your problem:

- Run Lyx in debugging mode from commandline by (Linux and Mac users change accordingly)

lyx.exe -dbg lyxserver

- Useful messages should appear whenever you send some command from Lyz. A useful message will contain words like ERROR, undefined etc.
- To send a command from Lyz, you simply use one of the functions, e.g. “Cite in Lyx” or use command line, viz. http://wiki.lyx.org/LyX/LyXServer.
- Also you can use a variant of the last version of Lyz, which has additional menu item “Test…”. This will allow you to send single commands to Lyx. Currently Lyz uses the following commands (code in the parentheses indicates usage):

server-get-filename (server-get-filename) citation-insert (citation-insert:LYZ:author2010title) buffer-next (buffer-next) server-get-xy (server-get-xy) buffer-write (buffer-write) buffer-close (buffer-close) file-open (file-open:path, where path is the response from server-get-filename)

- All functions Lyz has are patched together using these commands. The most trouble some seems to be the server-get-filename.
- Extract useful information from Zotero’s Error Console (by starting Zotero on the command line with the --jsconsole option) and from commandline where you ran lyx.exe -dbg lyxserver.
- Peruse the Issues opened by other users at https://github.com/wshanks/lyz. Be sure to check the closed issues as well to see if a solution has already been found for your problem. If not, open a new issue.

## Common Issues

### Update BibTeX does not work

Some users have found that the Update BibTeX command stops working unexpectedly. One possible solution is to edit the lyz.sqlite file in the Zotero data directory directly and to remove any bibliography entries in it that look malformed (e.g. some of their fields are empty). To edit lyz.sqlite, a SQLite editor is needed. The [sqlite-manager Firefox addon](https://code.google.com/p/sqlite-manager/) is a light-weight option. If you experience this issue and have any insight on what causes it, please contact the developer via GitHub (open a new issue or comment on one of the closed issues related to Update BibTeX).

### Using a non-standard lyxpipe

On Windows the lyxpipe path (\\\.\\pipe\\lyxpipe) is a special path and not a real file. You should not try to change this path to something else.

### Compatibility note

Zotero 5.0 introduced numerous API changes. Versions 3.0.0 and higher of Lyz are compatible with Zotero 5.0 and greater. Versions 2.x and lower only support Zotero version 4 and earlier.