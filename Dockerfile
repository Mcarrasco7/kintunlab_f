FROM php:7.2-apache
RUN apt -yqq update
RUN apt -yqq install libxml2-dev
RUN docker-php-ext-install pdo_mysql
RUN docker-php-ext-install xml
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli
RUN apachectl restart