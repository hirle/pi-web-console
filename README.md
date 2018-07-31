# Pi-web-console

Shutdown and reboot your raspberry pi with a single Click

# Installation

## Prepare a pi-web-console user

```
sudo adduser pi-web-console
chsh /usr/sbin/nologin pi-web-console
```

## Clone source

```
sudo mkdir /opt/pi-web-console
cd /opt
git clone https://github.com/hirle/pi-web-console.git
```

## Register service
```
cd /opt/pi-web-console
sudo cp pi-web-console.service /etc/systemd/system
sudo systemctl enable pi-web-console.service
```


# Development

To run locally pi-web-server:
* install NodeJS, v8.11.3 at least
* `npm start`
