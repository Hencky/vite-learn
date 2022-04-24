import { type Plugin } from 'vite';

const pluginDemo: () => Plugin = () => {
  return {
    name: 'my-example',
    resolveId(source) {
      // 是否处理当前的请求
      if (source === 'PMS') {
        return source;
      }
      return null;
    },
    load(id) {
      if (id === 'PMS') {
        return `export default 'PMS!'`;
      }
      return null;
    },
  };
};

export default pluginDemo;
