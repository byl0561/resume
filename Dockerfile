FROM alpine:3.14

ENV GRAV_VERSION="1.3.4" PASSWORD=""

RUN apk update && \
    # Install build dependencies
    apk add --no-cache -u --virtual build curl zip && \
    # Install PHP Env
    apk add --no-cache nginx ca-certificates \
    php7.3-fpm \
    php7.3-mbstring \
    php7.3-json \
    php7.3-session \
    php7.3-zlib \
    php7.3-xml \
    php7.3-xmlreader \
    php7.3-pdo \
    php7.3-phar \
    php7.3-openssl \
    php7.3-gd \
    php7.3-iconv \
    php7.3-mcrypt \
    php7.3-ctype \
    php7.3-zip \
    php7.3-curl \
    php7.3-opcache \
    php7.3-apcu \
    php7.3-intl \
    php7.3-bcmath \
    php7.3-dom && \
    # Download Grav
    mkdir -p /usr/html && \
    curl -fLk -o /tmp/grav.zip "https://github.com/getgrav/grav/releases/download/$GRAV_VERSION/grav-v$GRAV_VERSION.zip" && \
    unzip /tmp/grav.zip -d /tmp && \
    mv /tmp/grav/* /usr/html/ && \
    # Clean cache
    apk del build && \
    rm -rf /var/cache/apk/* /tmp/* /usr/html/user/themes/antimatter

COPY . /usr/html/user/themes/zresume/
WORKDIR /usr/html/user/themes/zresume/

    # Install Zresume
RUN mv files/nginx.conf /etc/nginx/ && \
    mv files/php-fpm.conf /etc/php7/ && \
    chmod a+x files/*.sh && \
    mv files/run.sh /usr/bin/run && \
    mv files/generate.sh /usr/bin/generate && \
    # Clean files
    chmod 755 -R /usr/html/cache/ && \
    rm -rf files && \
    # Init example data
    rm -rf /usr/html/user/config /usr/html/user/pages && \
    mv example/config /usr/html/user/config && \
    mv example/pages /usr/html/user/pages && \
    rm -rf example && \
    # Nginx & FPM
    sed -i 's/;cgi.fix_pathinfo=1/cgi.fix_pathinfo=0/g' /etc/php7/php.ini && \
    sed -i 's/expose_php = On/expose_php = Off/g' /etc/php7/php.ini && \
    sed -i "s/nginx:x:100:101:nginx:\/var\/lib\/nginx:\/sbin\/nologin/nginx:x:100:101:nginx:\/usr:\/bin\/bash/g" /etc/passwd && \
    sed -i "s/nginx:x:100:101:nginx:\/var\/lib\/nginx:\/sbin\/nologin/nginx:x:100:101:nginx:\/usr:\/bin\/bash/g" /etc/passwd- && \
    ln -s /sbin/php-fpm7 /sbin/php-fpm

VOLUME ["/usr/html/user/pages", "/usr/html/user/config", "/usr/html/static"]
EXPOSE 80
CMD ["run"]
