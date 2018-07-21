#!/bin/sh

echo "boseok build"
eval "cd /var/www/boseok_log && sudo git pull && sudo npm run build && sudo service nginx restart"
eval "cd /var/www/boseok_log_server && sudo git pull && sudo pm2 restart all"