FROM ubuntu:18.04
RUN apt update && apt install -y curl
RUN curl -L "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
RUN chmod +x /usr/local/bin/docker-compose

COPY . /home/processmaker
WORKDIR /home/processmaker
RUN docker-compose build
CMD docker-compose run