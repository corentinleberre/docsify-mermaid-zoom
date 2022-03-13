# Docsify-mermaid-zoom

Docsify-mermaid-zoom is a docsify plugin which allows to zoom in mermaid diagramms.

## How to use

Dependencies :
* [mermaid-docsify](https://github.com/Leward/mermaid-docsify/])
* [D3.js](https://d3js.org)

Add the dependencies and plugin to `index.html`

```html
<!-- Dependencies --->
<script src="//cdn.jsdelivr.net/npm/mermaid/dist/mermaid.js"></script>
<script src="//unpkg.com/docsify-mermaid@latest/dist/docsify-mermaid.js"></script>
<script>mermaid.initialize({ startOnLoad: true });</script>
<script src="//cdn.jsdelivr.net/npm/d3@7"></script>

<!-- Docsify-Mermaid-Zoom -->
<script src="//unpkg.com/docsify-mermaid-zoom/dist/index.js"></script>
```

By default, zoom is only enabled on mermaid diagramms but can be use with others types of svg. 
You can configure min/max scale and disable the zoom pannel.

Configurations : 

```html
<script>
    window.$docsify = {
        ...,
        mermaidZoom: {
            elementId: ".mermaid",
            minimumScale: 1,
            maximumScale: 5,
            zoomPannel: true
        }
    }
  </script>
```

## Demo

A demo is available [here](https://corentinleberre.github.io/docsify-mermaid-zoom/src/#/)