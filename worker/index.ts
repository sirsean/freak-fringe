export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // Let the assets server handle the request
    return env.ASSETS.fetch(request);
  },
};

interface Env {
  ASSETS: Fetcher;
}
