
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
    'index.csr.html': {size: 2332, hash: '67289d7a3fe7258e168659b3a6c459056ec4a08bef1f672ddeb93b7f80240f91', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1074, hash: '339e96677ea7361e98caf580cfc2d33a41383892ce0d874595bbbbddef8af71d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 33871, hash: 'e781507aeec8b6afed6378c8316b56afab1dbced68eb015ec896e24dedb59e38', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-U3557VHC.css': {size: 36668, hash: 'CjMfYSXyF3k', text: () => import('./assets-chunks/styles-U3557VHC_css.mjs').then(m => m.default)}
  },
};
