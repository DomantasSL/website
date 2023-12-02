### How to use?

1. git clone <https://github.com/arnoldasr/lab>
2. cd lab/lab2
3. docker compose build
4. docker compose up -d
5. docker exec -it caddy bash
6. caddy hash-password
7. Enter new passwords for your users and replace them in the Caddyfile
8. Rebuild Caddy image and relaunch docker composer


Dont forget to add vhosts to your hosts file

Hint:
https://www.digitalocean.com/community/tutorials/how-to-remotely-access-gui-applications-using-docker-and-caddy-on-ubuntu-18-04