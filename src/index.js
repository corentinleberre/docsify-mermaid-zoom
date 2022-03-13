import { mermaidZoom } from './zoom.js'

const docsify = window.$docsify;

docsify?.plugins?.push(!!docsify?.mermaidZoom ? mermaidZoom(...Object.values(docsify.mermaidZoom)) : mermaidZoom());