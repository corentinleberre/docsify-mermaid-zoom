import mermaidZoom from "./docsify-mermaid-zoom";

const docsify = window.$docsify || {};

const props = docsify.mermaidZoom || {};

docsify.plugins = [].concat(docsify.plugins || [], mermaidZoom(...Object.values(props)));
