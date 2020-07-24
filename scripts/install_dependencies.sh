#install node
sudo apt-get install curl -y
# curl --silent --location https://deb.nodesource.com/setup_4.x | sudo bash -
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install nodejs -y
sudo apt-get install -y build-essential
sudo apt-get install npm -y

#install pm2
sudo npm install pm2 -g
# sudo pm2 update

#install forever
# sudo npm install forever -g


#create app folder
sudo mkdir -p /var/www/app