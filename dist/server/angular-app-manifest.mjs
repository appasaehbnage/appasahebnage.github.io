
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/#about"
  },
  {
    "renderMode": 2,
    "route": "/#experience"
  }
],
  assets: {
    'index.csr.html': {size: 2332, hash: '65b65d466486da3dcaac8f50da7482bfde932fac8a37ff0e9ef22f973ec93f3a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1074, hash: '8e262211f4e2b7fbabdea3468d613add3e576f0196f1adbe6a01d9a8333885ce', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    '#about/index.html': {size: 33912, hash: 'f75bd8a2e07fdc398b43788a93240aa9f81478c4f2b89271b8197871aca2de96', text: () => import('./assets-chunks/#about_index_html.mjs').then(m => m.default)},
    '#experience/index.html': {size: 33912, hash: 'f75bd8a2e07fdc398b43788a93240aa9f81478c4f2b89271b8197871aca2de96', text: () => import('./assets-chunks/#experience_index_html.mjs').then(m => m.default)},
    'index.html': {size: 33912, hash: 'f75bd8a2e07fdc398b43788a93240aa9f81478c4f2b89271b8197871aca2de96', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-U3557VHC.css': {size: 36668, hash: 'CjMfYSXyF3k', text: () => import('./assets-chunks/styles-U3557VHC_css.mjs').then(m => m.default)}
  },
};
