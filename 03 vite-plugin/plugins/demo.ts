import { type Plugin } from 'vite';

const pluginDemo: () => Plugin = () => {
  return {
    name: 'my-example',
    resolveId(source) {
      // 是否处理当前的请求
      if (source === 'helloPMS') {
        return source;
      }
      return null;
    },
    load(id) {
      if (id === 'helloPMS') {
        return `export default 'Hello PMS!'`;
      }
      return null;
    },
  };
};

export default pluginDemo;
