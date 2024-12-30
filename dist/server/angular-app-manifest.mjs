
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
    'index.csr.html': {size: 2332, hash: '18812f51a3d0cd4c766a37d4aba738edec60d6d0256cb152a6c4ce8a27f38254', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1074, hash: '3e6a26b44720b65e3728104d25362b51a50751c359a3d7807b3bdb21cfcc81ab', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 33890, hash: '6c4217da58ab9e70d54786a58620002733b5d824c6e1ed3a0fec715fa9101047', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-U3557VHC.css': {size: 36668, hash: 'CjMfYSXyF3k', text: () => import('./assets-chunks/styles-U3557VHC_css.mjs').then(m => m.default)}
  },
};
