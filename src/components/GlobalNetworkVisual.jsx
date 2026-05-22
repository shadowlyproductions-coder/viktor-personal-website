import { motion } from "framer-motion";
import { useRef, useState } from "react";

const IMAGE_WIDTH = 1619;
const IMAGE_HEIGHT = 971;

const nodes = [
  { x: 557.3, y: 144.2, delay: "0s" },
  { x: 793.1, y: 271.2, delay: "0.45s" },
  { x: 1068.9, y: 137, delay: "0.9s" },
  { x: 1362.8, y: 180.5, delay: "1.35s" },
  { x: 1587.8, y: 354.7, delay: "2.25s" },
  { x: 1428.1, y: 459.9, delay: "2.7s" },
  { x: 1243.1, y: 452.7, delay: "3.6s" },
  { x: 727.8, y: 816.1, delay: "5.4s" },
  { x: 187.1, y: 551.2, delay: "6.3s" },
  { x: 488.3, y: 409.6, delay: "8.1s" },
];

const imageMask =
  "radial-gradient(ellipse at center, black 58%, rgba(0,0,0,0.75) 74%, rgba(0,0,0,0.35) 88%, transparent 100%)";

function formatDelay(index) {
  return `${(index * 0.45).toFixed(2).replace(/\.?0+$/, "")}s`;
}

function formatNodes(nodeList) {
  if (!nodeList.length) {
    return "const nodes = [];";
  }

  const rows = nodeList.map(
    (node) => `  { x: ${node.x}, y: ${node.y}, delay: "${node.delay}" },`,
  );

  return ["const nodes = [", ...rows, "];"].join("\n");
}

export default function GlobalNetworkVisual() {
  const svgRef = useRef(null);
  const [editorNodes, setEditorNodes] = useState([]);
  const nodeEditorMode =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("nodeEditor") === "true";

  function handleNodeEditorClick(event) {
    if (!nodeEditorMode || !svgRef.current) return;

    const svg = svgRef.current;
    const point = svg.createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;

    const screenMatrix = svg.getScreenCTM();
    if (!screenMatrix) return;

    const svgPoint = point.matrixTransform(screenMatrix.inverse());

    setEditorNodes((currentNodes) => {
      const nextNodes = [
        ...currentNodes,
        {
          x: Number(svgPoint.x.toFixed(1)),
          y: Number(svgPoint.y.toFixed(1)),
          delay: formatDelay(currentNodes.length),
        },
      ];

      console.log(formatNodes(nextNodes));
      return nextNodes;
    });
  }

  const visibleNodes = nodeEditorMode ? [...nodes, ...editorNodes] : nodes;

  return (
    <motion.div
      className="relative mt-8 w-full overflow-hidden bg-transparent sm:mt-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`relative mx-auto aspect-[1619/971] w-full max-w-5xl overflow-hidden ${
          nodeEditorMode ? "cursor-crosshair" : ""
        }`}
        style={{
          aspectRatio: `${IMAGE_WIDTH} / ${IMAGE_HEIGHT}`,
          WebkitMaskImage: imageMask,
          maskImage: imageMask,
        }}
      >
        <svg
          ref={svgRef}
          className="h-full w-full"
          viewBox={`0 0 ${IMAGE_WIDTH} ${IMAGE_HEIGHT}`}
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
          onClick={handleNodeEditorClick}
        >
          <defs>
            <linearGradient id="globalNetworkFadeX" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="#030A1C" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#030A1C" stopOpacity="0" />
              <stop offset="100%" stopColor="#030A1C" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="globalNetworkFadeY" x1="0%" x2="0%" y1="100%" y2="0%">
              <stop offset="0%" stopColor="#030A1C" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#030A1C" stopOpacity="0" />
              <stop offset="100%" stopColor="#030A1C" stopOpacity="0.25" />
            </linearGradient>
          </defs>

          <image
            href="/images/global_network.jpg"
            x="0"
            y="0"
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
            preserveAspectRatio="xMidYMid meet"
            opacity="0.9"
          />
          <rect width={IMAGE_WIDTH} height={IMAGE_HEIGHT} fill="url(#globalNetworkFadeX)" />
          <rect width={IMAGE_WIDTH} height={IMAGE_HEIGHT} fill="url(#globalNetworkFadeY)" />

          {visibleNodes.map((node, index) => (
            <circle
              key={`${node.x}-${node.y}-${index}`}
              cx={node.x}
              cy={node.y}
              r={node.r || 7}
              className="premium-node-glow"
              style={{ animationDelay: node.delay }}
            />
          ))}
        </svg>
      </div>

      {nodeEditorMode ? (
        <div className="fixed bottom-4 right-4 z-50 max-h-[45vh] w-[min(30rem,calc(100vw-2rem))] overflow-auto rounded-lg border border-white/10 bg-midnight/95 p-4 text-left shadow-2xl backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
            Node editor
          </p>
          <pre className="mt-3 whitespace-pre-wrap text-xs leading-5 text-white/85">
            {formatNodes(editorNodes)}
          </pre>
        </div>
      ) : null}
    </motion.div>
  );
}
