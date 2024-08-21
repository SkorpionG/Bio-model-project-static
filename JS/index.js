import {
  addLabel,
  createPieChart,
  generateDescription,
  insertCanvas,
} from "./script.js";
import { priAC, perAC, models } from "./data.js";
import {
  primitiveEarth,
  presentEarth,
  photosynthesis,
  cellularRespiration,
  carbonCycle,
} from "./description.js";

const {
  presentEarthModel,
  primitiveEarthModel,
  photosynthesisModel,
  cellularRespModel,
  carbonCycleModel,
} = models;

const primitiveDescription = generateDescription(
  "Primitive Earth",
  primitiveEarth.title,
  primitiveEarth.description
);

const presentDescription = generateDescription(
  "Present Earth",
  presentEarth.title,
  presentEarth.description
);

const photosynthesisDescription = generateDescription(
  "Photosynthesis",
  photosynthesis.title,
  photosynthesis.description
);

const cellularRespDescription = generateDescription(
  "Cellular Respiration",
  cellularRespiration.title,
  cellularRespiration.description
);

const carbonCycleDescription = generateDescription(
  "Carbon Cycle",
  carbonCycle.title,
  carbonCycle.description
);

$(document).ready(function () {
  function initSegmentSwitch() {
    const options = document.querySelectorAll(".switch-option");
    const inputs = document.querySelectorAll(".options");

    for (let i = 0; i < (options.length + inputs.length) / 2; i++) {
      $(options[i]).click(function () {
        inputs[i].checked = true;
      });
    }
  }

  function setUpScreen(model, description) {
    $("#model").html(model);
    $("#description").html(description);
    addLabel();
  }

  initSegmentSwitch();

  // Should Be In This Order:
  setUpScreen(primitiveEarthModel, primitiveDescription); // 1
  insertCanvas(1); // 2
  createPieChart(priAC); // 3

  $("#left-div").click(function () {
    setUpScreen(primitiveEarthModel, primitiveDescription);
    insertCanvas(1);
    createPieChart(priAC);
  });

  $("#center-div-1").click(function () {
    setUpScreen(presentEarthModel, presentDescription);
    insertCanvas(1);
    createPieChart(perAC);
  });

  $("#center-div-2").click(function () {
    setUpScreen(photosynthesisModel, photosynthesisDescription);
  });

  $("#center-div-3").click(function () {
    setUpScreen(cellularRespModel, cellularRespDescription);
  });

  $("#right-div").click(function () {
    setUpScreen(carbonCycleModel, carbonCycleDescription);
  });
});
