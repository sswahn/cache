const cacheUtility = {
  async get(name, request) {
    try {
      const cache = await caches.open(name)
      const response = await cache.match(request)
      return response.json()
    } catch (error) {
      throw new Error(`Failed to parse response: ${name}`)
    }
  },
  async set(name, request, response) {
    try {
      const cache = await caches.open(name)
      cache.put(request, response.clone())
    } catch (error) {
      throw new Error(`Failed to set cache entry: ${name}`)
    }
  },
  async delete(name, request) {
    try {
      const cache = await caches.open(name)
      cache.delete(request)
    } catch (error) {
      throw new Error(`Failed to delete cache: ${name}`)
    }
  },
  async clear(name) {
    const cache = await caches.open(name)
    const keys = await cache.keys()
    for (let key of keys) {
      await cache.delete(key)
    }
  },
  async keys(name) {
    const cache = await caches.open(name)
    return cache.keys()
  }
}

export default cacheUtility
