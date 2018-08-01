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
cd /opt/pi-web-console
npm install
```

## Register service
```
cd /opt/pi-web-console
sudo cp pi-web-console.service /etc/systemd/system
sudo systemctl enable pi-web-console.service
```

## Allow shutdown
```
sudo visudo
```

In the section `User privilege specification`, add those two lines. They will allow the user pi-web-console to run the command shutdown.

```
pi-web-console ALL=/sbin/shutdown
pi-web-console ALL=NOPASSWD: /sbin/shutdown
```

# Development

To run locally pi-web-server:
* install NodeJS, v8.11.3 at least
* `npm start`
