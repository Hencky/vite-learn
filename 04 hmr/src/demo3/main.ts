if (import.meta.hot) {
  // 监听多个依赖路径的更新
  import.meta.hot.accept(['./render.ts', './autoRun.ts'], (moduleList) => {
    console.log(moduleList);
    // const [renderModule, autoRunModule] = moduleList;
    // renderModule?.render();
    // autoRunModule?.autoRun();
  });
}

import { render } from './render';
import { autoRun } from './autoRun';

render();
autoRun();
