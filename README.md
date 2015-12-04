# My Little Pony Friendship Map Mapping

Transform the output of the SDK's `app.user.getMap()`

from the first part of UK postcodes (https://www.townscountiespostcodes.co.uk/postcodes-in-uk/)
```javascript
{
    w1t: 1,
    gu25: 3,
    wc1v: 1,
    // ...
}
```

to [this list of counties](http://www.townscountiespostcodes.co.uk/counties-in-uk/)

```javascript
{
    'London': 2,
    'Surrey': 3,
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

saAppSdk.app.user.getMap()
    .then(mlpFriendshipMapMapping)
    .then(function(map) {
        // ...
    });

```
