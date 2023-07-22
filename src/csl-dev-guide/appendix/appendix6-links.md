---
title: 附录 VI 链接
date: 2022-08-01 16:49:45
updated: 2022-08-03 10:28:33
---

# 附录 VI 链接

> [!warning] WORK IN PROGRESS
> 此页面正在施工中。

The CSL syntax does not have support for configuration of links. However, processors should include links on bibliographic references, using the following rules:

If the bibliography entry for an item renders any of the following identifiers, the identifier should be anchored as a link, with the target of the link as follows:

1. `url`: output as is
2. `doi`: prepend with “[https://doi.org/](https://doi.org/)”
3. `pmid`: prepend with “[https://www.ncbi.nlm.nih.gov/pubmed/](https://www.ncbi.nlm.nih.gov/pubmed/)”
4. `pmcid`: prepend with “[https://www.ncbi.nlm.nih.gov/pmc/articles/](https://www.ncbi.nlm.nih.gov/pmc/articles/)”

If the identifier is rendered as a URI, include rendered URI components (e.g. “[https://doi.org/](https://doi.org/)”) in the link anchor. Do not include any other affix text in the link anchor (e.g. “Available from: “, “doi: “, “PMID: “).

Citation processors should include an option flag for calling applications to disable bibliography linking behavior.
