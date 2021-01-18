#!/bin/sh
echo "START"

source ./def.sh
TAG=1.01

werf converge --dir ../ --log-debug=true --env=$ENVNAME -s=:local -i=werf-registry.kube-system.svc.cluster.local



