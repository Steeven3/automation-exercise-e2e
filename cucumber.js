module.exports = {
  default: {
    paths: ["features/**/*.feature"],
    require: ["steps/**/*.ts"], // Retirer "tests/" si le dossier est à la racine
    requireModule: ["ts-node/register"],
    format: ["progress-bar", "html:reports/cucumber-report.html"],
    publishQuiet: true
  }
};