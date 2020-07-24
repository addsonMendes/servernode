#install node
sudo apt-get install curl -y
curl --silent --location https://deb.nodesource.com/setup_4.x | sudo bash -
sudo apt-get install nodejs -y
sudo apt-get install npm -y

#install forever
sudo npm install forever -g

#install pm2
sudo npm install -g pm2
pm2 update

#create app folder
sudo mkdir -p /var/www/app