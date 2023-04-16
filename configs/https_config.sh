#!/bin/bash
[ "$UID" -eq 0 ] || exec sudo bash "$0" "$@"
echo 'Enter full path to project directory: '
read project_dir

USER_HOME_DIR=$(eval echo ~$SUDO_USER)
echo "Installing to $USER_HOME_DIR"

echo "Starting https config installation..."

NGINX_SSL_PATH=/etc/nginx/ssl/certs
PROJECT_DIR=$project_dir

echo $PROJECT_DIR

FIRGER_DEV_CA_PATH="/usr/local/share/ca-certificates/serverCA.crt"

if [[ ! -f "$NGINX_SSL_PATH/serverCA.key" ]]; then
    echo "Generating SSL certificates"
    openssl req -x509 -nodes -new -sha256 -days 1024 -newkey rsa:2048 -keyout "$NGINX_SSL_PATH/serverCA.key" -out "$NGINX_SSL_PATH/serverCA.pem" -subj "/C=US/CN=firger.local.net"
    openssl x509 -outform pem -in serverCA.pem -out serverCA.crt

    openssl req -new -nodes -newkey rsa:2048 -keyout firger-dev.key -out firger-dev.csr -subj "/C=LV/ST=Vidzeme/L=Riga/O=Private-Certificates/CN=firger.local.net"

    openssl x509 -req -sha256 -days 1024 -in firger-dev.csr -CA serverCA.pem -CAkey serverCA.key -CAcreateserial -extfile firger.net.ext -out firger-dev.crt

    cp "$NGINX_SSL_PATH/serverCA.crt" $FIRGER_DEV_CA_PATH    
    update-ca-certificates
fi