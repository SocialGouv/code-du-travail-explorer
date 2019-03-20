const parseReference = require("./parseReference");

const getChild = (element, name) => element.$.find(el => el.name === name);

// Beware, this one is recursive
function getText(element = { text: "" }) {
  if (element.type === "text") {
    return element.$.trim();
  }
  if (element.$) {
    return element.$
      .map((child) => getText(child))
      .join(" ");
  }
  return "";
}

function  getTags(element = { text: ""}) {
  if (element.type === "text") {
    return [element.$.trim()];
  }
  if (element.$) {
    return element.$
      .map((child) => getTags(child))
      .reduce((acc, val) => acc.concat(val), []); // flatten the array
  }
  return [];
}


const format = fiche => {

  if (!fiche.$[0].name === "Publication") return null;

  const publication = fiche.$[0];
  const { ID: id } = publication._;

  const title = getText(getChild(publication, "dc:title"));

  const dateRaw = getText(getChild(publication, "dc:date"));
  const [year, month, day] = dateRaw.split(" ")[1].split("-");
  const date = `${day}/${month}/${year}`;

  const audience = getText(getChild(publication, "Audience"));
  const urlSlug = audience === "Particuliers" ? "particuliers" : "professionnels-entreprises";
  const url = `https://www.service-public.fr/${urlSlug}/vosdroits/${id}`;

  const meaninglessCrumbs = ["Accueil particuliers", "Travail"];
  const ariane = getTags(getChild(publication, "FilDAriane"))
    .filter(crumb => !meaninglessCrumbs.includes(crumb));
  const sousThemePere =  getTags(getChild(publication, "SousThemePere"));
  const dossierPere = getTags(getChild(publication, "DossierPere"));
  const tags = Array.from(new Set(ariane.concat(sousThemePere, dossierPere)));

  const intro = getText(getChild(publication, "Introduction"));
  const texte = getText(getChild(publication, "Texte"));
  const listeSituations = getText(getChild(publication, "ListeSituations"));
  const text = intro + " " + texte + " " + listeSituations;


  const references_juridiques = publication.$
    .filter(el => el.name === "Reference")
    .map(parseReference)
    .reduce((acc, val) => acc.concat(val), []) // flatten the array
    .filter(Boolean);

  return {
    date,
    id,
    raw: JSON.stringify(publication),
    tags,
    text,
    references_juridiques,
    title,
    url
  }
}

module.exports = format;
