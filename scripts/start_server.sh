#!/bin/bash
cd /var/www/app/
sudo pm2 start server.js
#sudo -H -u ubuntu bash -c 'npm start'