#!/bin/sh

echo "boseok_log auto build start"
eval "cd /var/www/boseok_log && sudo git pull && sudo npm install && sudo npm run build && sudo service nginx restart"
echo "boseok_log auto build end"