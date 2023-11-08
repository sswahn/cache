# Cache · [![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/sswahn/cache/blob/main/LICENSE) ![npm version](https://img.shields.io/npm/v/@sswahn/cache)
A robust caching utility that provides easy-to-use methods for interacting with the browser's Cache API.

## Installation
```bash
npm install @sswahn/cache
```

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
const request = new Request(url)
const response = await fetch(request)

await cache.set('cachName', request, response)
```

Set a response in cache with a custom maxAge. The default to 180 seconds or 3 minutes.
```javascript
await cache.set('cachName', request, response, 300)
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
