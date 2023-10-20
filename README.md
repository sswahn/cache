# Cache
A robust caching utility that provides easy-to-use methods for interacting with the browser's Cache API.

## Usage  
Import library:  
```javascript
import cache from '@sswahn/cache'
```  
Now, access to the get, post, put, and delete methods.  
### Get  
Retrieve a response from cache by name and request.  
```javascript
const response = await cache.get('myCache', request)
```

### Post    
Set a response in cache by name, request, and response.  
```javascript
await cache.set('myCache', request, response)
```

### Delete  
Delete a specific cache entry by name and request.  
```javascript
await cache.delete('myCache', request)
```

### Clear    
Clear all entries from a specific cache by name.  
```javascript
await cacheUtility.clear('myCache')
```

### Keys    
Retrieve all keys from a specific cache by name.   
```javascript
const keys = await cacheUtility.keys('myCache')
```

## Licence
Server is [MIT Licensed](https://github.com/sswahn/server/blob/main/LICENSE)
