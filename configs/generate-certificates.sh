#!/bin/bash

CERT_KEY="./configs/self-key.key"
CERT_CRT="./configs/self-cert.crt"
CA_KEY="./configs/self-ca.key"
CA_CRT="./configs/self-ca.crt"
SUBJECT="/C=US/ST=Riga/L=Riga/O=Pesonal/OU=None/CN=firger.local.net"


if [ -f "$CERT_KEY" ] && [ -f "$CERT_CRT" ]; then
    echo "Certificate and key already exist at $CERT_KEY and $CERT_CRT"
    echo "Delete these files if you want to regenerate them."
    exit 0
fi

echo "Generating Certificate Authority (CA)..."

openssl genpkey -algorithm RSA -out $CA_KEY -aes256

openssl req -x509 -new -nodes -key $CA_KEY -sha256 -days 3650 -out $CA_CRT -subj "/C=US/ST=Riga/L=Riga/O=Pesonal/OU=CA/CN=DaniilsFirgers"

echo "Certificate Authority (CA) generated successfully:"
echo " - CA Certificate: $CA_CRT"
echo " - CA Key: $CA_KEY"

echo "Generating self-signed SSL certificate..."

# Generate the private key for your SSL certificate
openssl genpkey -algorithm RSA -out $CERT_KEY

# Generate the certificate signing request (CSR) with SANs
openssl req -new -key $CERT_KEY -out ${CERT_CRT}.csr -config ./configs/openssl.cnf

# Sign the certificate using the CA, referencing the SANs from the config file
openssl x509 -req -in ${CERT_CRT}.csr -CA $CA_CRT -CAkey $CA_KEY -CAcreateserial \
-out $CERT_CRT -days 365 -sha256 -extfile ./configs/openssl.cnf -extensions v3_req


echo "SSL certificate signed by CA successfully:"
echo " - Signed Certificate: $CERT_CRT"
echo " - Key: $CERT_KEY"
echo " - CA Certificate: $CA_CRT"
echo " - CA Key: $CA_KEY"

if [ -f "$CA_CRT" ]; then
    echo "Adding CA certificate to the system's certificate store..."
    sudo cp "$CA_CRT" "/usr/local/share/ca-certificates/$(basename $CA_CRT)"
    sudo update-ca-certificates
    echo "CA certificate added successfully."
else
    echo "CA certificate file not found."
    exit 1
fi

rm ${CERT_CRT}.csr || echo "Warning: Failed to remove CSR file"

echo ""
echo "To make the certificate trusted by browsers, you need to install the CA certificate:"
echo " - CA Certificate: $CA_CRT"
echo ""



echo "Certificate and CA setup complete."
