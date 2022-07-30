NAME=xlonelyplayer/node-app
TAG=1.0

build:
	docker build \
		--tag $(NAME):$(TAG) .

run:
	docker run \
		-it --rm \
		--network node-app-bridge \
		--name node-app \
		-p 3001:3001 \
		$(NAME):$(TAG)

up:
	docker-compose up \
		-d

down:
	docker-compose down