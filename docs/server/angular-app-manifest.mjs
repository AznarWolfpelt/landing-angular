
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/landing-angular',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/landing-angular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 454, hash: 'a342bcdb0d8d96ebfc83e7d4f0d95c6bfda6517b33372907d7d868aea47b2755', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 967, hash: '3084459ceea850cbc533960be2a263b55bade345ab9714aea7fd401bd7d2cc44', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3013, hash: 'e9534e9a67183c2933a1e6f8f959e14ee7773ccdf30e491f41ee679ad7525a78', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
