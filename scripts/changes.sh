#!/bin/sh
# cli tools to detect changes between latest branch commit and master
# Usage :
#   sh scripts/changes.sh code-du-travail-data packages/sources

# git fetch origin --quiet
# git checkout master
# git checkout -
files=$(git diff --name-only master ${CI_COMMIT_SHA})
echo "detect changes between master and ${CI_COMMIT_SHA}"
for pattern in "$@"
do
  for file in $files
  do
   ## Poor man str contain
    case $file in *$pattern*)
      echo "$file trigger data update !";
      touch $(basename ${pattern}_SKIP | tr '[:lower:]' '[:upper:]' | tr '-' '_' )
      exit 0
    esac
  done
  echo "no update detected for $pattern"
done

NEEDLE="ert"
HAYSTACK="quwertyuiop"
T="${HAYSTACK/${NEEDLE}/}"
echo $T

# pattern=packages/code-du-travail-data
# file=packages/code-du-travail-data/dataset/courrier-type/CHANGELOG.md
# if [[ $file == *$pattern* ]]; then
#   echo "$file trigger data update !";
# fi
