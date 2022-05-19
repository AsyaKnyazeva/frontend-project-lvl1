install: # установить зависимости
	npm ci

brain-games:# запустить игру
	node bin/brain-games.js

publish: # чистый запуск
	npm publish --dry-run