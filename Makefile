install: # установить зависимости
	npm ci

brain-games:# запустить игру
	node bin/brain-games.js

publish: # чистый запуск
	npm publish --dry-run

lint: #запуск eslint
	npx eslint .

brain-even:# запустить игру на четность
	node bin/brain-even.js

brain-calc:# запустить игру калькулятор
	node bin/brain-calc.js