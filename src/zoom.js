export const mermaidZoom = (elementId = ".mermaid", minimumScale = 1, maximumScale = 5, zoomPannel = true) => (hook) => hook.doneEach(() => {
  const nodes = document.querySelectorAll(elementId);

  nodes?.forEach((node) => {
    const svg = node.querySelector("svg");

    const d3SvgNode = d3.select(svg);
    d3SvgNode.html("<g>" + d3SvgNode.html() + "</g>");
    const inner = d3SvgNode.select("g");

    const zoom = d3.zoom();

    svg.addEventListener('click', () => enableZoom());

    const enableZoom = () => {
      zoom.on("zoom", (event) => inner.attr("transform", event.transform))
        .scaleExtent([minimumScale, maximumScale]);
      d3SvgNode.call(zoom);
    }

    const disableZoom = () => {
      d3SvgNode.on(".zoom", null);
    }

    const resetZoom = () => {
      inner.transition().call(zoom.scaleTo, 1);
      inner.transition().call(zoom.translateTo, 0.5 * svg.offsetWidth, 0.5 * svg.offsetHeight);
    }

    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    document.addEventListener('scroll', () => {
      if(!isInViewport(node)){
        disableZoom();
        resetZoom();
      }
    }, {
      passive: true
    });

    const createPannel = (node) => {
      const div = document.createElement("div");
    
      div.style.visibility = "hidden";
      
      node.addEventListener('mouseover', () => {
        div.style.visibility = "visible";
        div.style.display = "flex";
        div.style.justifyContent = "flex-start";
      });
    
      node.addEventListener('mouseleave', () => {
        div.style.visibility = "hidden";
      });
    
      const enableZoomBtn = document.createElement("button");
      enableZoomBtn.innerHTML = "Enable zoom";
      enableZoomBtn.addEventListener("click", () => enableZoom());
    
      const resetButton = document.createElement("button");
      resetButton.innerHTML = "Reset zoom";
      resetButton.addEventListener("click", () => resetZoom());
    
      div.appendChild(enableZoomBtn);
      div.appendChild(resetButton);
      node.appendChild(div);
    };

    if (zoomPannel) {
      createPannel(node);
    }
  });
});