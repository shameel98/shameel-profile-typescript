
npm install --save-dev gh-pages

"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d out"
}
npm run deploy
