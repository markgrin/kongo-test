#!/bin/bash
# ENVNAME 
#   prod - конфигурация "Продакшин", приложение смотрит на боевой сервер.
#   dev* - конфигурация для разработки, запускаются база и пгадмин 

TAG=1.010
APPNAME=kong-test
export NAMESPACE=kong-test

function prod()
{
    export ENVNAME=prod
    CI_URL="kong-test.local"
}

prod

