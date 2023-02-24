const { deterministicPartitionKey } = require("./dpk");

const getHexCode = (p) => {
  return crypto.createHash("sha3-512").update(p).digest("hex");
};

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal '10' when given number 10 in input", () => {
    const trivialKey = deterministicPartitionKey(10);
    expect(trivialKey).toBe("10");
  });

  it("Returns the literal 'test' when given string 'test' in input", () => {
    const trivialKey = deterministicPartitionKey("test");
    expect(trivialKey).toBe("test");
  });

  it("Returns the literal '1' when given partitionKey as number 1 in input", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: 1 });
    expect(trivialKey).toBe("1");
  });

  it("Returns the literal 'test' when given partitionKey as string 'test' in input", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: "test" });
    expect(trivialKey).toBe("test");
  });

  it("Returns the literal hash for the object when given the object of no partitionKey as input", () => {
    const trivialKey = deterministicPartitionKey({ key: "test" });
    const hash = getHexCode(JSON.stringify({ key: "test" }));
    expect(trivialKey).toBe(hash);
  });

  it("Returns the literal hash for the object when given string which length is bigger than 256 as input", () => {
    const trivialKey = deterministicPartitionKey(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui officia molestiae ad! Dolore aliquam quae dolores suscipit rem tempora. Unde, voluptates quis! Eveniet nam soluta obcaecati assumenda quasi quod quaerat."
    );

    const hash = getHexCode(
      JSON.stringify(
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui officia molestiae ad! Dolore aliquam quae dolores suscipit rem tempora. Unde, voluptates quis! Eveniet nam soluta obcaecati assumenda quasi quod quaerat."
      )
    );

    expect(trivialKey).toBe(hash);
  });
});
