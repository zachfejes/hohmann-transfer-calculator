import kineticEnergy from "./kineticEnergy";

describe("Method: kineticEnergy - expected errors", () => {
  test("should throw an error when no parameter is passed", () => {
    expect(() => {
      kineticEnergy();
    }).toThrow();
  });

  test("should throw an error when undefined is passed as a parameter", () => {
    var v = undefined;

    expect(() => {
      kineticEnergy(v);
    }).toThrow();
  });

  test("should throw an error when NaN is passed as a parameter", () => {
    var v = "test";

    expect(() => {
      kineticEnergy(v);
    }).toThrow();
  });
});

describe("Method: kineticEnergy - valid parameters", () => {
    test("should return 2 when v = 2", () => {
        var v = 2;

        expect(kineticEnergy(v)).toEqual(2)
    })

    test("should return 2 when v = -2", () => {
        var v = -2;

        expect(kineticEnergy(v)).toEqual(2);
    })

    test("should return 0 when v = 0", () => {
        var v = 0;

        expect(kineticEnergy(v)).toEqual(0);
    })

    test("should return Infinity when v = Infinity", () => {
        var v = Infinity;

        expect(kineticEnergy(v)).toEqual(Infinity);
    })
})