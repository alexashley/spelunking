FROM python:2.7.17-alpine3.11

RUN apk update \
    && apk add rsync tar curl sudo build-base libffi-dev libffi openssl openssl-dev \
    && addgroup -g 1000 splunk \
    && adduser -u 1000 -G splunk -s /bin/sh -D splunk \
    && addgroup -g 1001 ansible \
    && adduser -u 1001 -G ansible -s /bin/sh -D ansible \
    && echo "ansible ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers \
    && pip install requests ansible

USER ansible
