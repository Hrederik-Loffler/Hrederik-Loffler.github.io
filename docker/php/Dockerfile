FROM php:7.4-fpm-alpine

WORKDIR /var/www/html

ENV PHPIZE_DEPS \
    autoconf \
    cmake \
    file \
    g++ \
    gcc \
    libc-dev \
    pcre-dev \
    make \
    git \
    pkgconf \
    re2c \
    freetype-dev \
    libpng-dev  \
    libjpeg-turbo-dev \
    libxslt-dev \
    findutils \
    libressl-dev

RUN apk add --no-cache --virtual .persistent-deps \
    # for intl extension
    icu-dev \
    # for soap
    libxml2-dev \
    # for GD
    freetype \
    libpng \
    libjpeg-turbo \
    # for bz2 extension
    bzip2-dev \
    # for intl extension
    libintl gettext-dev libxslt \
    # etc
    bash nano curl libzip-dev oniguruma-dev libmcrypt-dev supervisor findutils

RUN set -xe \
    # workaround for rabbitmq linking issue
    && ln -s /usr/lib /usr/local/lib64 \
    && apk add --no-cache --virtual .build-deps \
    $PHPIZE_DEPS \
    && docker-php-ext-configure bcmath --enable-bcmath \
    && docker-php-ext-configure intl --enable-intl \
    && docker-php-ext-configure pcntl --enable-pcntl \
    && docker-php-ext-configure mysqli --with-mysqli \
    && docker-php-ext-configure pdo_mysql --with-pdo-mysql \
    && docker-php-ext-configure mbstring --enable-mbstring \
    && docker-php-ext-configure zip \
    && docker-php-ext-configure soap --enable-soap \
    && docker-php-ext-install -j$(nproc) \
    gd \
    bcmath \
    intl \
    pcntl \
    mysqli \
    pdo_mysql \
    mbstring \
    soap \
    iconv \
    bz2 \
    calendar \
    exif \
    gettext \
    shmop \
    sockets \
    sysvmsg \
    sysvsem \
    sysvshm \
    xsl \
    zip

ENTRYPOINT []
CMD []