
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
    'index.csr.html': {size: 413, hash: '9a6d28ccc05c126c269dfe76107c5b522aea5c9522b8a37050b5ca4f811597c9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 926, hash: '52fd43a57644287351a18f6833ab67b0cb00b3c205d02e1efeed7cee45236bf3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2970, hash: '10f09bd4fd74c798de3a9fe7c66e6bec3a32146885f3619d6fb2ccc908eae2ad', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
