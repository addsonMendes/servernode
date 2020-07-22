export NVM_DIR="/home/ec2-user/.nvm" [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
pm2 start /usr/cddemo -n server -f