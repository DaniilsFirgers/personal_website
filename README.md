# Daniils Website :)

- `chmod +x ./configs/generate-certificates.sh`
- `./configs/generate-certificates.sh`
- `docker build -f configs/development.Dockerfile -t daniils-website .`
- `docker run --sysctl net.ipv4.ip_unprivileged_port_start=0 -p 443:443 -p 80:80 daniils-website`
