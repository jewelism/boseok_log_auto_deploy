#!/bin/sh

echo "jsquad_web auto build start"
eval "cd /var/www/after-work-web && sudo git pull && sudo npm run build && sudo service nginx restart"
echo "jsquad_web auto build end"