kubectl create secret generic regcred --from-file=.dockerconfigjson=/home/pfernandez/.docker/config.json --type=kubernetes.io/dockerconfigjson