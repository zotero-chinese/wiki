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

Python 包 [noterools](https://github.com/Syize/noterools) 提供了可以 Zotero 的引用添加超链接的函数。更多关于该 Python 包的信息请查看 [GitHub 仓库](https://github.com/Syize/noterools)。

### 使用前的注意事项

- `noterools` 实际上也是通过操作 Word 来添加的超链接，由于依赖库的原因其只能在 Windows 环境下使用。
- 在为 `(作者, 年份)` 引用格式添加超链接时，`noterools` 还会修正参考文献表中没有被正确设置为斜体的刊物名称或出版商名称。**顺序引用格式目前还不支持此功能**。

### 使用方法

1. 使用 pip 安装 `noterools`

```bash
pip install -U noterools
```

2. 创建一个简单的 Python 脚本调用其中的函数。以下是一个简单的示例

```python
from noterools import Word, add_citation_cross_ref_hook, add_cross_ref_style_hook

if __name__ == '__main__':
    # 你想要添加超链接的 Word 文档路径
    word_file_path = r"E:\Documents\Word\test.docx"
    # 新文档的保存路径
    new_file_path = r"E:\Documents\Word\test_new.docx"

    with Word(word_file_path, save_path=new_file_path) as word:
        # 为顺序引用格式添加超链接
        add_citation_cross_ref_hook(word, is_numbered=True)

        # 为 (作者，年份) 引用格式添加超链接，默认会将参考文献表中没有被正确设置为斜体的刊物名称或出版商设置为斜体
        # 由于 Word 中的超链接默认为蓝色，而 noterools 仅会将超链接添加到 年份 上，所以 作者名称 和 年份 的颜色会不一致
        # add_citation_cross_ref_hook(word, is_numbered=False)

        # 通过设置 color 的值，可以设置整个引用的颜色 (不包含括号)
        # 0: 黑色
        # 16711680: 蓝色
        # 更多颜色请参考 Word 中的颜色枚举类型：https://learn.microsoft.com/en-us/office/vba/api/word.wdcolor
        # add_citation_cross_ref_hook(word, is_numbered=False, color=0)

        # set_container_title_italic 用于控制是否修正参考文献表中没有正确设置为斜体的名称
        # 你可以通过将其设置为 False 来关闭这项功能
        # add_citation_cross_ref_hook(word, is_numbered=False, set_container_title_italic=False)

        # 执行操作
        word.perform()
```

## 缺陷和注意事项

- 手动更新引注时会出现引注已被修改的弹窗。
- 无法实现从参考文献表跳转到引注。
- 使用 Word 宏方法时，同时引用多个引注时只能链接最后一个。
- 当你选择 Unlink Citations 时，添加的所有超链接会失效。

[^1]: 来源添加

[^2]: [Word: Possibility to link references and bibliography in a document? -  Zotero Forums](https://forums.zotero.org/discussion/comment/324312/#Comment_324312)
