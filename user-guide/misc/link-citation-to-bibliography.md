---
date: 2022-07-29 20:23:17
authors:
  - Northword
updated: 2023-10-04 11:59:36
title: 在 Word 中把引注链接到参考文献表
---

# 在 Word 中把引注链接到参考文献表

## 描述

建立引注（citation）与参考文献表（bibliography）之间的单向超链接（引用 -> 参考书目），类似于 endnotes 的「Link in-text citations to references in the bibliography」：

![EndNote 中关于链接引注和参考文献表的选项](../../assets/images/endnote-link-citation-to-bib.png)

Zotero 官方不提供该功能，这是因为 Zotero 使用的 CSL 处理器将 citation 渲染为一个 filed，无法添加超链接 [^1]。

以下提供两种方法来实现为 citation 添加超链接的功能。

## Word 宏

从 Zotero 论坛发现了通过 Word 宏实现的功能 [^2]，虽有一些缺陷，但基本可以达成需求。

### 配置及使用

在 Word 里新建一个宏，添加宏代码如下：

```vb
Public Sub ZoteroLinkCitation()

' get selected area (if applicable)
    Dim nStart&, nEnd&
    nStart = Selection.Start
    nEnd = Selection.End

' toggle screen updating
    Application.ScreenUpdating = False

' define variables
    Dim title As String
    Dim titleAnchor As String
    Dim style As String
    Dim fieldCode As String
    Dim numOrYear As String
    Dim pos&, n1&, n2&, n3&

    ActiveWindow.View.ShowFieldCodes = True
    Selection.Find.ClearFormatting

' find the Zotero bibliography
    With Selection.Find
        .Text = "^d ADDIN ZOTERO_BIBL"
        .Replacement.Text = ""
        .Forward = True
        .Wrap = wdFindContinue
        .Format = False
        .MatchCase = False
        .MatchWholeWord = False
        .MatchWildcards = False
        .MatchSoundsLike = False
        .MatchAllWordForms = False
    End With
    Selection.Find.Execute

    ' add bookmark for the Zotero bibliography
    With ActiveDocument.Bookmarks
        .Add Range:=Selection.Range, Name:="Zotero_Bibliography"
        .DefaultSorting = wdSortByName
        .ShowHidden = True
    End With

    ' loop through each field in the document
    For Each aField In ActiveDocument.Fields
        ' check if the field is a Zotero in-text reference
        '##################################################
        If InStr(aField.Code, "ADDIN ZOTERO_ITEM") > 0 Then
            fieldCode = aField.Code
            '#############
            ' Prepare
            ' Plain citation== Format of Textfield shown
            ' must be in Brackets
            Dim plain_Cit As String
            plCitStrBeg = """plainCitation"":""["
            plCitStrEnd = "]"""
            n1 = InStr(fieldCode, plCitStrBeg)
            n1 = n1 + Len(plCitStrBeg)
            n2 = InStr(Mid(fieldCode, n1, Len(fieldCode) - n1), plCitStrEnd) - 1 + n1
            plain_Cit = Mid$(fieldCode, n1 - 1, n2 - n1 + 2)
            'Reference 'as shown' in word as a string

            'Title array in fieldCode (all referenced Titles within this field)
            Dim array_RefTitle(32) As String
            i = 0
            Do While InStr(fieldCode, """title"":""") > 0
                n1 = InStr(fieldCode, """title"":""") + Len("""title"":""")
                n2 = InStr(Mid(fieldCode, n1, Len(fieldCode) - n1), """,""") - 1 + n1
                If n2 < n1 Then 'Exception the type 'Article'
                    n2 = InStr(Mid(fieldCode, n1, Len(fieldCode) - n1), "}") - 1 + n1 - 1
                End If
                array_RefTitle(i) = Mid(fieldCode, n1, n2 - n1)
                fieldCode = Mid(fieldCode, n2 + 1, Len(fieldCode) - n2 - 1)
                i = i + 1
            Loop
            Titles_in_Cit = i

            'Number array with References shown in PlainCit
            'Numer is equal or less than Titels, depending on the type
            '[3], [8]-[10]; [2]-[4]; [2], [4], [5]
            ' All citations have to be in Brackets each! [3], [8] not [3, 8]
            ' This doesnt work otherwise!
            ' --> treatment of other delimiters could be implemented here
            Dim RefNumber(32) As String
            i = 0
            Do While (InStr(plain_Cit, "]") Or InStr(plain_Cit, "[")) > 0
                n1 = InStr(plain_Cit, "[")
                n2 = InStr(plain_Cit, "]")
                RefNumber(i) = Mid(plain_Cit, n1 + 1, n2 - (n1 + 1))
                plain_Cit = Mid(plain_Cit, n2 + 1, Len(plain_Cit) - (n2 + 1) + 1)
            i = i + 1
            Loop
            Refs_in_Cit = i
                 'treat only the shown references (skip the rest)
            '[3], [8]-[10] --> skip [9]
            'Order of titles given from fieldcode, not checked!
            If Titles_in_Cit > Refs_in_Cit Then
                array_RefTitle(Refs_in_Cit - 1) = array_RefTitle(Titles_in_Cit - 1)
                i = 1
                Do While Refs_in_Cit + i <= Titles_in_Cit
                    array_RefTitle(Refs_in_Cit + i - 1) = ""
                    i = i + 1
                Loop
            End If

            '#############
            'Make the links
            For Refs = 0 To Refs_in_Cit - 1 Step 1
                title = array_RefTitle(Refs)
                array_RefTitle(Refs) = ""
                ' make title a valid bookmark name
                titleAnchor = title
                titleAnchor = MakeValidBMName(titleAnchor)

                ActiveWindow.View.ShowFieldCodes = False
                Selection.GoTo What:=wdGoToBookmark, Name:="Zotero_Bibliography"

                '' locate the corresponding reference in the bibliography
                '' by searching for its title
                Selection.Find.ClearFormatting
                With Selection.Find
                    .Text = Left(title, 255)
                    .Replacement.Text = ""
                    .Forward = True
                    .Wrap = wdFindContinue
                    .Format = False
                    .MatchCase = False
                    .MatchWholeWord = False
                    .MatchWildcards = False
                    .MatchSoundsLike = False
                    .MatchAllWordForms = False
                End With
                Selection.Find.Execute

                ' select the whole caption (for mouseover tooltip)
                Selection.MoveStartUntil ("["), Count:=wdBackward
                Selection.MoveEndUntil (vbBack)
                lnkcap = "[" & Selection.Text
                lnkcap = Left(lnkcap, 70)

                ' add bookmark for the reference within the bibliography
                Selection.Shrink
                With ActiveDocument.Bookmarks
                    .Add Range:=Selection.Range, Name:=titleAnchor
                    .DefaultSorting = wdSortByName
                    .ShowHidden = True
                End With

                ' jump back to the field
                aField.Select
                ' find and select the numeric part of the field which will become the hyperlink
                Selection.Find.ClearFormatting
                With Selection.Find
                    .Text = RefNumber(Refs)
                    .Replacement.Text = ""
                    .Forward = True
                    .Wrap = wdFindContinue
                    .Format = False
                    .MatchCase = False
                    .MatchWholeWord = False
                    .MatchWildcards = False
                    .MatchSoundsLike = False
                    .MatchAllWordForms = False
                End With
                Selection.Find.Execute

                numOrYear = Selection.Range.Text & ""

                ' store current style
                style = Selection.style
                ' Generate the Hyperlink -->Forward!
                ActiveDocument.Hyperlinks.Add Anchor:=Selection.Range, Address:="", SubAddress:=titleAnchor, ScreenTip:=lnkcap, TextToDisplay:="" & numOrYear
                ' reset the style
                Selection.style = style

                ' comment if you want standard link style
                aField.Select
                With Selection.Font
                     .Underline = wdUnderlineNone
                     .ColorIndex = wdBlack
                End With

            Next Refs 'References in Cit

        End If  'If Zotero-Field
        '#########################

        Next aField ' next field

        ' go back to original range selected
        ActiveWindow.View.ShowFieldCodes = False
        ActiveDocument.Range(nStart, nEnd).Select

    End Sub
    Function MakeValidBMName(strIn As String)
        Dim pFirstChr As String
        Dim i As Long
        Dim tempStr As String
        strIn = Trim(strIn)
        pFirstChr = Left(strIn, 1)
        If Not pFirstChr Like "[A-Za-z]" Then
            strIn = "A_" & strIn
        End If
        For i = 1 To Len(strIn)
            Select Case Asc(Mid$(strIn, i, 1))
            Case 49 To 57, 65 To 90, 97 To 122
                tempStr = tempStr & Mid$(strIn, i, 1)
            Case Else
                tempStr = tempStr & "_"
            End Select
            Next i
            tempStr = Replace(tempStr, "  ", " ")
            MakeValidBMName = Left(tempStr, 40)
        End Function
```

## Python 脚本

通过使用 Python 的 pywin32 库，可以在 Python 中实现与 Word 宏类似的功能。

### 使用前的注意事项

- 本 Python 代码仅对引用格式为 `(作者, 年份)` 的文档做过测试

### 配置及使用

1. 直接下载 [link-zotero-citation-bibliography](https://github.com/Syize/link-zotero-citation-bibliography) 仓库中的 [link-zotero-citation-bibliography.py](https://github.com/Syize/link-zotero-citation-bibliography/blob/master/link-zotero-citation-bibliography.py) 文件。
2. 安装以下依赖库：
   - pywin32
   - rich

```bash
pip install pywin32 rich
```

3. 修改代码中的以下设置：
   - `word_file_path`：您的 Word 文档的绝对路径。
   - `new_file_path`：新保存的 Word 文档的绝对路径。
4. (可选) 修改函数 `create_hyperlinks_to_literature_bookmarks` 参数值：
   - `setColor`：为 citation 设置的字体颜色，默认为蓝色。你可以通过查阅 VBA 的手册获取相应颜色的值[^3]。
   - `etal_number`：使用 `et al.` 或 `等` 代替作者名字时的作者数。
5. 运行代码。

## 缺陷和注意事项

- 手动更新引注时会出现引注已被修改的弹窗。
- 无法实现从参考文献表跳转到引注。
- 使用 Word 宏方法时，同时引用多个引注时只能链接最后一个。
- Python 脚本未对顺序引注测试过。
- 当你选择 Unlink Citations 时，添加的所有超链接会失效。

[^1]: 来源添加
[^2]: [Word: Possibility to link references and bibliography in a document? -  Zotero Forums](https://forums.zotero.org/discussion/comment/324312/#Comment_324312)
[^3]: [VBA 文档](https://learn.microsoft.com/zh-cn/office/vba/api/word.wdcolor)
