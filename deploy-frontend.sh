#!/bin/bash
# Script to deploy the app
# This file is needed only when you want to deploy the app to a Linux VM

deployPath=/var/www/
echo "Using agent working directory: $1"
sudo rm -r -v "$deployPath/codenebula"
sudo cp -r -v "$1/distWebpack/codenebula" "$deployPath"
sudo systemctl restart nginx
exit 0