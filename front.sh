#!/bin/sh

echo "boseok_log build"
eval "cd /var/www/boseok_log && sudo git pull && sudo npm run build && sudo service nginx restart"