#!/bin/bash

docker run --rm --name some-mariadb -e MYSQL_ROOT_PASSWORD=pw -e MYSQL_DATABASE=cardb -p 3306:3306 -d mariadb
