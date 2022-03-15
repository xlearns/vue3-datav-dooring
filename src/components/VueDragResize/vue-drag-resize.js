import VueDragResize from 'vue-drag-resize'
export default {
  install: (app, options) => {
    app.component("vue-drag-resize", VueDragResize);
  },
};