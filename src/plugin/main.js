import { plugin } from "./docsify-mermaid-zoom";

const { mermaidZoom = {}, mermaidConfig = {} } = window.$docsify;

mermaidConfig.postRenderCallback = plugin(...Object.values(mermaidZoom));

window.$docsify.mermaidConfig = mermaidConfig;
