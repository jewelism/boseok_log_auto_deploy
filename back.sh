#!/bin/sh

echo "boseok_log_server build"
eval "cd /var/www/boseok_log_server && sudo git pull && sudo pm2 restart all"