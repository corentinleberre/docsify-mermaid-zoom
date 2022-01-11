const elementZoom = (elementId = ".mermaid svg", minimumScale = 1, maximumScale = 5) => (hook) => hook.doneEach(() => {
    const nodes = document.querySelectorAll(elementId);

    nodes?.forEach((node) => {
     const d3Node = d3.select(node);

     d3Node.html("<g>" + d3Node.html() + "</g>");
     const inner = d3Node.select("g");
     const zoom = d3.zoom()
       .on("zoom", (event) => inner.attr("transform", event.transform))
       .scaleExtent([minimumScale, maximumScale]);
         
     d3Node.call(zoom);
    });
  });

export default elementZoom;