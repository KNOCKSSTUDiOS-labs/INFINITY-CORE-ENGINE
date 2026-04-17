module.exports = function verifySBOM(sbom) {
  if (!sbom.spdxVersion && !sbom.bomFormat) {
    throw new Error("INVALID_SBOM");
  }
  return "SBOM_VALID";
};
