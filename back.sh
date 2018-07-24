#!/bin/sh

echo "boseok_log_server auto build start"
eval "cd /var/www/boseok_log_server && sudo git pull && sudo npm install && sudo pm2 restart all"
echo "boseok_log_server auto build end"