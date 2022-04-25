import { suffix } from './child';

let timer: number;

if (import.meta.hot) {
  if (!import.meta.hot.data.count) {
    import.meta.hot.data.count = 0;
  }

  if (import.meta.hot.data.count > 10) {
    // 重新载入页面
    import.meta.hot.invalidate();
  }

  import.meta.hot.dispose(() => {
    if (timer) {
      clearInterval(timer);
    }
  });
}

export function autoRun() {
  function getAutoIncCount() {
    const { data = { count: 0 } } = import.meta.hot;
    data.count += 1;
    return data.count;
  }

  timer = setInterval(() => {
    let countEle = document.querySelector('#count')!;
    countEle.innerHTML = String(getAutoIncCount()) + suffix + 2;
  }, 1000);
}
