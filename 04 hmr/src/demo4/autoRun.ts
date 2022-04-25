let timer: number;

if (import.meta.hot) {
  // 旧模块销毁时候的回调
  import.meta.hot.dispose(() => {
    if (timer) {
      clearInterval(timer);
    }
  });
}

export function autoRun() {
  let count = 0;

  timer = setInterval(() => {
    let countEle = document.querySelector('#count')!;
    count += 1;
    countEle.innerHTML = String(count) + '---';
  }, 1000);
}
