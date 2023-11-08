# Cache
A robust caching utility that provides easy-to-use methods for interacting with the browser's Cache API.

## Usage  
Import library.  

```javascript
import cache from '@sswahn/cache'
```  

### Get  
Retrieve a response from cache by name and request.  

```javascript
const response = await cache.get('cachName', new Request(url))
```

### Set    
Set a response in cache by name, request, and response.  

```javascript
await cache.set('cachName', new Request(url), response)
```

### Delete  
Delete a specific cache entry by name and request.  

```javascript
await cache.delete('cachName', new Request(url))
```

### Clear    
Clear all entries from a specific cache by name.  

```javascript
await cache.clear('cachName')
```

### Keys    
Retrieve all keys from a specific cache by name.  

```javascript
const keys = await cache.keys('cachName')
```

## License
Cache is [MIT Licensed](https://github.com/sswahn/cache/blob/main/LICENSE)
