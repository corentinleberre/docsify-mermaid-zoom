import elementZoom from "./mermaid-zoom";

const docsify = window.$docsify;

docsify?.plugins?.push(!!docsify?.elementZoom ? elementZoom(...Object.values(docsify.elementZoom)) : elementZoom());