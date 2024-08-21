export const priAC = {
  labels: [
    "Nitrogen",
    "Carbon Dioxide",
    "Oxygen",
    "Hydrogen",
    "Water Vapor",
    "Sulfur Oxide",
  ],
  data: [5, 12, 0, 0.4, 74, 9],
  backgroundColor: ["red", "orange", "green", "blue", "skyblue", "purple"],
};

export const perAC = {
  labels: ["Nitrogen", "Carbon Dioxide", "Oxygen", "Argon"],
  data: [78, 0.04, 21, 0.93],
  backgroundColor: ["red", "blue", "green", "yellow"],
};

export const models = {
  primitiveEarthModel: `<spline-viewer url="https://prod.spline.design/vf52CYIfitgeGwFp/scene.splinecode"></spline-viewer>`,
  presentEarthModel: `<spline-viewer loading-anim-type="none" url="https://prod.spline.design/2IBosMUYkzWNTSJz/scene.splinecode"></spline-viewer>`,
  photosynthesisModel: `<img id="cellularResp-model" alt="A diagram about photosynthesis" src="assets/Photosynthesis.drawio.png">`,
  cellularRespModel: `<img id="photosynthesis-model" alt="A diagram about cellular respiration" src="assets/CellularRespiration.drawio.png">`,
  carbonCycleModel: `<img id="carbonCycle-model" alt="A diagram about carbon cycle" src="assets/CarbonCycle.drawio.png">`,
};
