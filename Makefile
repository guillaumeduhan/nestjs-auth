gt:
	git add .
	git commit -m "commit"
	git push

dev:
	npm run start:dev

new:
	nest g module routes/${NAME} && nest g controller routes/${NAME} && nest g service routes/${NAME}