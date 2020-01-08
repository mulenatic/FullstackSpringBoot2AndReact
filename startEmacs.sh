#!/bin/bash

[ ! -d lsp-conf ] && mkdir lsp-conf

files=(lsp-conf/treemacs-persist lsp-conf/lsp-session-v1)
for file in "${files[@]}"; do
    if [ ! -f $file ];
    then
	echo $file is missing, touching it now
	touch $file
    else
	echo $file exists
    fi
done

docker run -it --rm \
       -v "$(pwd)":/emacsDocuments \
       -v ~/FullstackSpringBoot2AndReact/lsp-conf/lsp-session-v1:/home/docker/.emacs.d/.lsp-session-v1 \
       -v ~/FullstackSpringBoot2AndReact/lsp-conf/treemacs-persist:/home/docker/.emacs.d/.cache/treemacs-persist \
       mulenatic/emacs-docker-java

