export function autoRun() {
  let count = 0;

  setInterval(() => {
    let countEle = document.querySelector('#count')!;
    count += 1;
    countEle.innerHTML = String(count);
  }, 1000);
}
