NAME=xlonelyplayer/node-app
TAG=1.0

build:
	docker build -t $(NAME):$(TAG) .

run:
	docker rm node-app --force && docker run -it --network node-app-bridge --name node-app -p 3001:3001 $(NAME):$(TAG)

up:
	docker rm node-app --force && docker-compose up