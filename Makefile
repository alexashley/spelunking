MAKEFLAGS += --silent

.PHONY: up down logs

default:
	echo "No default target"

up:
	docker-compose up --build -d

down:
	docker-compose down

logs:
	docker-compose logs -f
