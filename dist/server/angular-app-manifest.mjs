
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  assets: {
    'index.csr.html': {size: 3505, hash: 'ce693bac34d3a0b71e4474dfe662cb1cff9fdbeef23cd7394c2df97d5cfba44b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2247, hash: 'a57fe491ff0ce2ef8262cbaf7b2208520af8cdb5d7ccf780593f3fefcd31720b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 36435, hash: '0a6032f590b38bdcd15c458ba55c62b738fbabce6937dd2700503a8a02feefaa', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-U3557VHC.css': {size: 36668, hash: 'CjMfYSXyF3k', text: () => import('./assets-chunks/styles-U3557VHC_css.mjs').then(m => m.default)}
  },
};
