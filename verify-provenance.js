module.exports = function verifyProvenance(prov) {
  if (!prov.build || !prov.hash) {
    throw new Error("INVALID_PROVENANCE");
  }
  return "PROVENANCE_VALID";
};
