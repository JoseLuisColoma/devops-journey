#!/bin/bash

if [ "$(whoami)" != "root" ]; then
    echo "ERROR, necesitas ser root"
    exit 1
fi

echo "Script ejecutado como root"
