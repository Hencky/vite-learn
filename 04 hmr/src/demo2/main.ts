// 类型守卫，只在开发环境中有效，生产环境会被tree-shaking
if (import.meta.hot) {
  // 传入依赖路径，监听该依赖路径模块更新
  import.meta.hot.accept('./render.ts', (newModules) => {
    console.log(newModules);
    newModules.render();
  });
}

import { render } from './render';
import { autoRun } from './autoRun';

render();
autoRun();
