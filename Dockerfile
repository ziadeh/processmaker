FROM php:7.2-fpm
COPY composer.lock composer.json /var/www/
COPY . /var/www
WORKDIR /var/www
EXPOSE 9000
CMD ["php-fpm"]
