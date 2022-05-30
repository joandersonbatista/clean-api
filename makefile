up:
	npm i
	docker-compose up -d

down:
	docker-compose down

logs:
	docker-compose logs --follow