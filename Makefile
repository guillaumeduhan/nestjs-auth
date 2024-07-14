gt:
	git add .
	git commit -m "commit"
	git push

dev:
	npm run start:dev

new:
	nest g module ${NAME} && nest g controller ${NAME} && nest g service ${NAME}