import { type Plugin } from 'vite';

export const hookTransformIndexHtml: () => Plugin = () => {
  return {
    name: 'vite-plugin-hook-transformIndexHtml',
    // transformIndexHtml(html, ctx) {
    //   return html.replace(
    //     `<title>Vite App</title>`,
    //     `<title>替换后的标题</title>`
    //   );
    // },
    transformIndexHtml(html, ctx) {
      return {
        html: html.replace(
          `<title>Vite App</title>`,
          `<title>替换后的标题</title>`
        ),
        tags: [
          {
            injectTo: 'head',
            tag: 'meta',
            attrs: {
              name: 'description',
              content: 'vite 插件'
            }
          }
        ]
      }
    }
  };
};
