# Cache · [![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/sswahn/cache/blob/main/LICENSE) ![npm version](https://img.shields.io/npm/v/@sswahn/cache)
A robust caching utility that provides easy-to-use methods for interacting with the browser's Cache API.  

## Features
- **Robust Caching:** A powerful caching utility that leverages the browser's Cache API to provide reliable and efficient caching capabilities.
- **Easy-to-Use Methods:** Simple and intuitive methods for interacting with the cache, making it easy to integrate caching into your web applications.
- **Flexible Cache Expiration:** Set custom expiration times for cached entries using the `max-age` parameter, with the ability to specify the time in seconds for fine-grained control.
- **Retrieve Cached Data:** Retrieve cached responses by providing a cache name and a matching request, ensuring consistent and reliable data retrieval.
- **Efficient Cache Management:** Easily delete specific cache entries or clear the entire cache for efficient cache management.
- **Retrieve Cache Keys:** Get a list of all keys stored in a specific cache, making it simple to track and manage cached resources.  

## Installation
```bash
npm install @sswahn/cache
```

## Usage  
Import library.  

```javascript
import cache from '@sswahn/cache'
```

### Set    
Set a response in cache by name, request, and response.  

```javascript
const request = new Request(url)
const response = await fetch(request)

await cache.set('cachName', request, response)
```

Set a cache with a custom `max-age`. The default is 180 seconds.
```javascript
await cache.set('cachName', request, response, 300)
```

### Get  
Retrieve a response from cache by name and request.  

```javascript
const response = await cache.get('cachName', new Request(url))
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
