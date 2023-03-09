import { enableZoomSvg, resetZoomSvg } from "./svg.js";

const plugin =
  (minimumScale = 1, maximumScale = 5, zoomMenu = true) =>
  (elementId) => {
    const svg = document.querySelector(`#${elementId}`);

    const node = svg.parentNode;

    const d3SvgNode = d3.select(svg);
    d3SvgNode.html("<g>" + d3SvgNode.html() + "</g>");
    const inner = d3SvgNode.select("g");

    const zoom = d3.zoom();

    svg.addEventListener("click", () => enableZoom());

    const enableZoom = () => {
      zoom
        .on("zoom", (event) => inner.attr("transform", event.transform))
        .scaleExtent([minimumScale, maximumScale]);
      d3SvgNode.call(zoom);
    };

    const disableZoom = () => {
      d3SvgNode.on(".zoom", null);
    };

    const resetZoom = () => {
      inner.transition().call(zoom.scaleTo, 1);
      inner
        .transition()
        .call(zoom.translateTo, 0.5 * svg.offsetWidth, 0.5 * svg.offsetHeight);
      disableZoom();
    };

    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    document.addEventListener(
      "scroll",
      () => {
        if (!isInViewport(node)) {
          disableZoom();
          resetZoom();
        }
      },
      {
        passive: true,
      }
    );

    const createZoomMenu = (node) => {
      const div = document.createElement("div");

      div.style.visibility = "hidden";

      node.addEventListener("mouseover", () => {
        div.style.visibility = "visible";
        div.style.display = "flex";
        div.style.justifyContent = "flex-start";
      });

      node.addEventListener("mouseleave", () => {
        div.style.visibility = "hidden";
      });

      const buildButton = (bindedFunction, icon) => {
        const button = document.createElement("button");
        button.innerHTML = icon;
        button.style.backgroundColor = "transparent";
        button.style.border = "none";
        button.style.cursor = "pointer";
        button.addEventListener("click", () => bindedFunction());
        return button;
      };

      const enableZoomBtn = buildButton(enableZoom, enableZoomSvg);
      const resetButton = buildButton(resetZoom, resetZoomSvg);

      div.appendChild(enableZoomBtn);
      div.appendChild(resetButton);
      node.appendChild(div);
    };

    if (zoomMenu) {
      createZoomMenu(node);
    }
  };

export { plugin };
