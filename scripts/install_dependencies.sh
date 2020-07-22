sudo apt-get update
sudo apt-get install awscli -y
sudo apt-get install ruby2.0 -y
sudo aws s3 cp s3://aws-codedeploy-us-east-1/latest/install . --region us-east-1
sudo chmod +x ./install
sudo ./install auto

#install node
sudo apt-get install curl -y
curl --silent --location https://deb.nodesource.com/setup_4.x | sudo bash -
sudo apt-get install nodejs -y
sudo apt-get install npm -y

#install forever
sudo npm install forever -g

#create app folder
sudo mkdir -p /var/www/app

#route ports to node application (only root can run using port 80)
sudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000
sudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 443 -j REDIRECT --to-port 8000
sudo apt-get install iptables-persistent -y

#run start script when the machine reboots (needs testing)
export EDITOR=nano
crontab -l | { cat; echo "@reboot sh /var/www/app/scripts/start.sh"; } | crontab -

#legacy node fix
sudo ln -s /usr/bin/nodejs /usr/bin/node