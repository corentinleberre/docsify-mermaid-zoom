# Docsify-mermaid-zoom

A simple Docsify plugin enabling zoom in mermaid diagrams (and svg).

![Demo](assets/demo.png)

## How to use

### Dependencies

* [mermaid-docsify](https://github.com/Leward/mermaid-docsify/])
* [D3.js](https://d3js.org)

Add the dependencies and plugin to `index.html`

```html
<!-- Import D3.js -->
<script src="//cdn.jsdelivr.net/npm/d3@7"></script>
<!-- Import Mermaid -->
<script src="//unpkg.com/mermaid/dist/mermaid.js"></script>
<script src="//unpkg.com/docsify-mermaid@latest/dist/docsify-mermaid.js"></script>
<script>mermaid.initialize({ startOnLoad: true });</script>
<script src="//cdn.jsdelivr.net/npm/d3@7"></script>
<!-- Import Docsify-mermaid-zoom -->
<script src="//unpkg.com/docsify-mermaid-zoom/dist/docsify-mermaid-zoom.js"></script>
```

By default, zoom is only enabled on mermaid diagramms but can be use with others types of svg.
You can configure min/max scale and disable the zoom pannel.

The pannel provide **two button**. The first button activates the zoom feature on the mermaid diagram. The second one allows to reset the zoom.
This pannel can be disable.

You can also activate the zoom on the diagram by **double clicking on it**.
The diagram will return to its original scale once it leaves the viewport on your screen.

### Optional configuration

```html
<script>
    window.$docsify = {
        ...,
        mermaidZoom: {
            elementId: ".mermaid",
            minimumScale: 1,
            maximumScale: 5,
            zoomPannel: true
        },
        ...,
    }
  </script>
```
