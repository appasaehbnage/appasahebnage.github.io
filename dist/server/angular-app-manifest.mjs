
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
    'index.csr.html': {size: 2332, hash: 'b5bf7a59d187d1e8d6633a9bcd24bc4089b490f842ddae9cfe979b4d0b8b4131', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1074, hash: 'ec4d37814f523b67cdedc4db575a21c7a176d73eea9a7c00745d22fbbaea79f6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    '#about/index.html': {size: 34036, hash: '8e64f943436d6935972773aa2e66e4a26c759529def30cf82810dd50974572e8', text: () => import('./assets-chunks/#about_index_html.mjs').then(m => m.default)},
    '#experience/index.html': {size: 34036, hash: '8e64f943436d6935972773aa2e66e4a26c759529def30cf82810dd50974572e8', text: () => import('./assets-chunks/#experience_index_html.mjs').then(m => m.default)},
    'index.html': {size: 34036, hash: '8e64f943436d6935972773aa2e66e4a26c759529def30cf82810dd50974572e8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-U3557VHC.css': {size: 36668, hash: 'CjMfYSXyF3k', text: () => import('./assets-chunks/styles-U3557VHC_css.mjs').then(m => m.default)}
  },
};
