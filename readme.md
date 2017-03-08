setup tab completion by running npm completion >> ~/.bashrc or ~/.zshrc then source ~/.zshrc then npm run tab
or use ntl globally - npm i -g ntl then run ntl for list of tasks - stands for node-task-list
cross-var can be used to enable $variable in windows - does work when piping unless you wrap full command as string
\" is because windows doesn't use single quotes ''
rm doesnt work on some versions of windows so could use rimraf package
add -s for silent - less output in console
npm i husky -D - for prepush git hooks

npm i -D node-sass cssmin stylefmt stylelint eslint npm-run-all onchange mocha http-server autoprefixer css-mqpacker

npm i -g postcss-cli -S


"build:css": "node-sass src/styles.scss | postcss -c -m .postcssrc.json | mqpacker -s - | cssmin > public/styles.min.css"

--include-path scss src/main.scss   public/css/main.css”

"//////////": "you can use local variables like $npm_package_version which will equal 1.0.0",


    "watch:lint": "onchange \"src/*.js\" \"**/*.scss\" -- npm run lint",