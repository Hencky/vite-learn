import { type Plugin } from 'vite';

const priorityTest: () => Plugin = () => {
  return {
    name: 'priorityTest',
    config() {
      console.log('config');
    },
    configResolved() {
      console.log('configResolved');
    },
    options(opts) {
      console.log('options');
      return opts;
    },
    configureServer(server) {
      console.log('configureServer');
    },
    resolveId() {
      console.log('resolveId');
    },
    load() {
      console.log('load');
    },
    transformIndexHtml(html) {
      return html;
    },
    transform(code) {
      console.log('transform');
      return code;
    },
    buildStart() {
      console.log('buildStart');
    },
    buildEnd() {
      console.log('buildEnd');
    },
    closeBundle() {
      console.log('closeBundle');
    },
  };
};

export default priorityTest;
