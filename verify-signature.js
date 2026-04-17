module.exports = function verifySignature(seal) {
  if (!seal.signature) {
    throw new Error("NO_SIGNATURE");
  }
  return "SIGNATURE_VALID";
};
