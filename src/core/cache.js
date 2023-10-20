const cacheUtility = {
  async get(name, request) {
    try {
      const cache = await caches.open(name)
      const response = await cache.match(request)
      return response.json()
    } catch (error) {
      throw new Error(`Failed to retrieve from cache ${name}.`)
    }
  },
  async set(name, request, response) {
    try {
      const cache = await caches.open(name)
      await cache.put(request, response.clone())
    } catch (error) {
      throw new Error(`Failed to set cache entry for ${name}.`)
    }
  },
  async delete(name, request) {
    try {
      const cache = await caches.open(name)
      await cache.delete(request)
    } catch (error) {
      throw new Error(`Failed to delete cache entry from ${name}.`)
    }
  },
  async clear(name) {
    try {
      const cache = await caches.open(name)
      const keys = await cache.keys()
      for (let key of keys) {
        await cache.delete(key)
      }
    } catch (error) {
      throw new Error(`Failed to clear cache ${name}.`)
    }
  },
  async keys(name) {
    try {
      const cache = await caches.open(name)
      return cache.keys()
    } catch (error) {
      throw new Error(`Failed to retrieve keys from cache ${name}.`)
    }
  }
}

export default cacheUtility
