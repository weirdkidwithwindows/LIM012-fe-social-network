import { changeTmp } from './controller/router.js';

const init = () => {
  changeTmp(`${window.location.hash}#/login`);
  window.addEventListener('hashchange', () => changeTmp(window.location.hash));
};

window.addEventListener('load', init);
