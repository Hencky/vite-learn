// 类型守卫，只在开发环境中有效，生产环境会被tree-shaking
// if (import.meta.hot) {
//   import.meta.hot.accept((newModules) => {
//     console.log(newModules);
//     newModules.render();
//   });
// }

export const render = () => {
  const title = document.querySelector('#title')!;
  title.innerHTML = `Title`;
};
