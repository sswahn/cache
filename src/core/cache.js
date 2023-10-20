const cacheUtility = {
  async get(name, request) {
    const cache = await caches.open(name)
    const response = await cache.match(request)
    return response ? response.json() : null
  },
  async set(name, request, response) {
    const cache = await caches.open(name)
    cache.put(request, response.clone())
  },
  async delete(name, request) {
    const cache = await caches.open(name)
    cache.delete(request)
  }
}

export default cacheUtility
