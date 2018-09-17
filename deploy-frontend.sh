# Script to deploy the app
# This file is needed only when you want to deploy the app to a Linux VM

echo "value of arg1: $1"
sudo cp $1 /var/www/codebebula
sudo service nginx reload
