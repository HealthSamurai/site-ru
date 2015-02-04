## update


```
git clone repo

npm install
`npm bin`/bower install

`npm bin`/grunt build
`npm bin`/grunt srv # start local site on 8080

`npm bin`/grunt watch # for development
```

To publish the site

```
cd dist # generated folder
git init

git init
git remote add origin git@github.com:HealthSamurai/site-en.git
git checkout gh-pages
git push --set-upstream origin gh-pages

# after changes just push

git push
```
