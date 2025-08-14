// Static asset extensions that should be served normally
const ASSET_EXTENSIONS = new Set([
  'js', 'css', 'png', 'jpg', 'jpeg', 'svg', 'webp', 'gif', 'ico', 'json', 'map', 'txt',
  'woff', 'woff2', 'ttf', 'eot', 'wasm', 'mp3', 'mp4', 'webm', 'ogg', 'pdf'
]);

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const pathname = url.pathname;
    
    // Check if the request is for a static asset
    const extension = pathname.split('.').pop()?.toLowerCase();
    const isAsset = extension && ASSET_EXTENSIONS.has(extension);
    
    // Try to fetch the requested resource
    let response = await env.ASSETS.fetch(request);
    
    // If the response is successful or it's a static asset request, return it
    if (response.ok || isAsset) {
      return response;
    }
    
    // For non-asset requests that result in 404/403, serve index.html for SPA routing
    if (response.status === 404 || response.status === 403) {
      const indexRequest = new Request(`${url.origin}/index.html`, {
        method: request.method,
        headers: request.headers,
      });
      
      response = await env.ASSETS.fetch(indexRequest);
      
      // Return index.html with proper HTML content-type and 200 status
      return new Response(response.body, {
        status: 200,
        statusText: 'OK',
        headers: {
          ...Object.fromEntries(response.headers.entries()),
          'content-type': 'text/html; charset=utf-8',
        },
      });
    }
    
    // Return the original response for other cases
    return response;
  },
};

interface Env {
  ASSETS: Fetcher;
}
