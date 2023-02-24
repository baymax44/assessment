const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

const getHexCode = (p) => {
  return crypto.createHash("sha3-512").update(p).digest("hex");
};

exports.deterministicPartitionKey = (event) => {
  if (!event) {
    return TRIVIAL_PARTITION_KEY;
  }

  let candidate = event.partitionKey ?? getHexCode(JSON.stringify(event));

  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }

  return candidate.length > MAX_PARTITION_KEY_LENGTH
    ? getHexCode(JSON.stringify(candidate))
    : candidate;
};
