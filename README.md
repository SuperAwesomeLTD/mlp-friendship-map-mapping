# My Little Pony Friendship Map Mapping

Transform the output of `saAppApi.users.getUsersMap()`

from [ISO 3166-2:GB](https://en.wikipedia.org/wiki/ISO_3166-2:GB)
```javascript
{
    'GB-CON': {name: "Cornwall", count: 91},
    'GB-COV': {name: "Coventry", count: 16},
    'GB-CRF': {name: "Cardiff", count: 42},
    'GB-CRY': {name: "Croydon", count: 62},
    // ...
}
```

to [this list of counties](http://www.townscountiespostcodes.co.uk/counties-in-uk/)

```javascript
{
    'Cornwall': 91,
    'Gloucestershire': 123,
    // ...
}
```

## Usage

```bash
npm install git+https://git@github.com/SuperAwesomeLTD/mlp-friendship-map-mapping.git --save
```


```javascript
var mlpFriendshipMapMapping = require('mlp-friendship-map-mapping');

// ...

saAppApi.users.getUsersMap()
    .then(mlpFriendshipMapMapping)
    .then(function(map) {
        // ...
    });

```
