FROM php:7.2-fpm
COPY . /var/www
WORKDIR /var/www
CMD ["php-fpm"]