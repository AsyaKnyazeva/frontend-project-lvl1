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

brain-gcd:# запустить игру НОД
	node bin/brain-gcd.js

brain-progression:# запустить игру прогрессия
	node bin/brain-progression.js