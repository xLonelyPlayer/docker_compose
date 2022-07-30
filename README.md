
# node_app
Node application to run as a container

## Requirements
This project was built using re following version:
* Docker 20.10.17
* Docker composer 1.29.2
* GNU Make 3.81

### To check if requirements are installed
```
docker -v
docker-compose -v
make -v
```

## Starting and stopping the application
### To start
```
make up
```

### To stop
```
make down
```