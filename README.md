# crsm-serverless

- Install via NPM
```
npm install -g serverless
```

- Development (http://localhost:3000/pokemon)
```
$ sls offline start --host 0.0.0.0
```

- Deploy DEV (https://apsls.carsome.my)
```
$ sls deploy --stage dev
```

- Deploy DEV
```
$ sls deploy -v
```

- Endpoint
```
get - /pokemon
post - /pokemon
get - /pokemon/{id}
put - /pokemon/{id}
delete - /pokemon/{id}
```

- Raw data
```
{
    "name": "Bulbasaur",
    "height": 3,
    "weight": 67,
    "avatar": "http://test.com/image.png"
}
```