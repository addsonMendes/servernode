#!/bin/bash
cd /var/www/app/

sudo pm2 stop server.js
# actually start the server
# sudo pm2 start /var/www/app/server.js -i 0 --name "server"

# sudo pm2 start server.js
sudo -H -u ubuntu bash -c 'pm2 start /var/www/app/server.js'