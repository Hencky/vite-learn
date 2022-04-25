let timer: number;

if (import.meta.hot) {
  // import.meta.hot.data 共享数据
  if (!import.meta.hot.data.count) {
    import.meta.hot.data.count = 0;
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
    countEle.innerHTML = String(getAutoIncCount()) + '--';
  }, 1000);
}
