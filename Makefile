#!/usr/bin/make

include .env

docker_bin= $(shell command -v docker 2> /dev/null)
docker_compose_bin= $(shell command -v docker-compose 2> /dev/null)


build:
	$(docker_compose_bin) -f docker-compose.yml build

up: ## Start all containers (in background)
	$(docker_compose_bin) -f docker-compose.yml up --no-recreate -d

down: ## Stop all started for development containers
	$(docker_compose_bin) -f docker-compose.yml down