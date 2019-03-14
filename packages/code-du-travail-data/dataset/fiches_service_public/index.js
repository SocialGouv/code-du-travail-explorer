#!/usr/bin/env node
const fs = require("fs");
const xmlStringToJsObject = require("xml-js").xml2js;
const uniqBy = require("lodash.uniqby");
const filter = require("./filter");
const format = require("./format");

const read = path => fs.readFileSync(path).toString();

const getFiches = path => fs
  .readdirSync(path)
  .filter(file => file.match(/F[0-9]+/))
  .map(file => read(`${path}/${file}`))

const fiches = [].concat(
  getFiches("./data/vosdroits-particuliers"),
  getFiches("./data/vosdroits-professionnels")
);

const parsedFiches = fiches.map(fiche => xmlStringToJsObject(fiche, {
  alwaysArray: true,
  ignoreDeclaration: true,
  ignoreDoctype:  true,
  ignoreInstruction: true,
  elementsKey: "$",
  attributesKey: "_",
  textKey: "$"
}))

const filteredFiches = filter(uniqBy(parsedFiches, (fiche) => fiche.$[0]._.ID));

const formatedFiches = filteredFiches
  .map((fiche) => format(fiche))
  .filter(Boolean);

  if (module === require.main) {
    console.log(JSON.stringify(formatedFiches, null, 2));
  }
