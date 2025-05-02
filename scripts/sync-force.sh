#!/bin/bash

REMOTE_URL="https://github.com/zotero-chinese/wiki"
REMOTE_NAME="upstream"
BRANCH_NAME="main"

echo 
echo "欢迎您！尊敬的 Zotero 社区贡献者！"
echo 
echo "请注意："
echo "此脚本用于直接将内容提交到了 fork 仓库主分支，现需要 fork 仓库主分支与上有仓库同步的场景。"
echo "即将强制同步 main 分支，这将丢弃所有与主仓库有差异的内容，当前内容将备份至 backup 分支。"
read -p "是否继续 (y/n): " choice
echo 
case "$choice" in
  y|Y )
    echo "正在进行..."
    ;;
  n|N )
    echo "退出。"
    exit 0
    ;;
  * )
    echo "选项不可用，退出。"
    exit 1
    ;;
esac

echo "  正在检查是否存在 upstream 远程"
if ! git remote -v | grep -q "$REMOTE_URL"; then
    # 如果不存在，则添加远程
    git remote add "$REMOTE_NAME" "$REMOTE_URL"
    echo "已添加远程 '$REMOTE_NAME' ."
fi

# 获取本地和远程分支的 HEAD
LOCAL_HEAD=$(git rev-parse HEAD)
REMOTE_HEAD=$(git ls-remote "$REMOTE_NAME" "refs/heads/$BRANCH_NAME" | cut -f1)

if [ "$LOCAL_HEAD" = "$REMOTE_HEAD" ]; then
    echo "本地分支已是最新，退出。"
    exit 0
else
    read -p "当前分支与远程分支不同，是否需要备份当前分支？(y/n): " backup_choice
    case "$backup_choice" in
      n|N )
        echo "跳过备份当前分支。"
        ;;
      * )
        HEAD_SHORT=$(git rev-parse --short HEAD)
        BACKUP_BRANCH="backup/$HEAD_SHORT"
        git branch "$BACKUP_BRANCH"
        echo "已将当前主分支备份为 '$BACKUP_BRANCH'"
        ;;
    esac

    echo "正在 fetch 远程"
    git fetch "$REMOTE_NAME" "$BRANCH_NAME"

    echo "正在将本地分支重置为远程提交"
    git reset --hard "$REMOTE_NAME/$BRANCH_NAME"

    echo "正在强制推送"
    git push --force

    echo "已将 '$BRANCH_NAME' 分支强制同步为了 '$REMOTE_NAME'."
fi
