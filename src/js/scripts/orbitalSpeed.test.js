import orbitalSpeed from "./orbitalSpeed";

describe("Method: orbitalSpeed - expected errors", () => {
  test("should throw an error when passed no parameters", () => {
    expect(() => {
      orbitalSpeed();
    }).toThrow();
  });

  test("should throw an error when parameters are undefined", () => {
    expect(() => {
      orbitalSpeed(undefined);
    }).toThrow();

    expect(() => {
      orbitalSpeed(undefined, undefined);
    }).toThrow();

    expect(() => {
      orbitalSpeed(undefined, undefined, undefined);
    }).toThrow();

    expect(() => {
      orbitalSpeed(undefined, undefined, 0);
    }).toThrow();

    expect(() => {
      orbitalSpeed(0, undefined, undefined);
    }).toThrow();

    expect(() => {
      orbitalSpeed(undefined, 0, undefined);
    }).toThrow();

    expect(() => {
      orbitalSpeed(undefined, 0, 0);
    }).toThrow();

    expect(() => {
      orbitalSpeed(0, undefined, 0);
    }).toThrow();
  });

  test("should throw an error when parameters are NaN", () => {
    var r, m, a;

    r = "test";
    m = 0;

    expect(() => {
      orbitalSpeed(r, m);
    }).toThrow();

    r = 0;
    m = "test";

    expect(() => {
      orbitalSpeed(r, m);
    }).toThrow();

    r = 0;
    m = 0;
    a = "test";

    expect(() => {
      orbitalSpeed(r, m, a);
    }).toThrow();

    r = ["one", "two"];
    m = 0;

    expect(() => {
      orbitalSpeed(r, m);
    }).toThrow();

    r = 0;
    m = ["one", "two"];

    expect(() => {
      orbitalSpeed(r, m);
    }).toThrow();

    r = 0;
    m = 0;
    a = ["one", "two"];

    expect(() => {
      orbitalSpeed(r, m, a);
    }).toThrow();
  });

  test("should throw an error when parameters are < 0", () => {
    var r, m, a;

    r = -1;
    m = 0;

    expect(() => {
      orbitalSpeed(r, m);
    }).toThrow();

    r = 0;
    m = -1;

    expect(() => {
      orbitalSpeed(r, m);
    }).toThrow();

    r = -1;
    m = 0;
    a = 0;

    expect(() => {
      orbitalSpeed(r, m, a);
    }).toThrow();

    r = 0;
    m = -1;
    a = 0;

    expect(() => {
      orbitalSpeed(r, m, a);
    }).toThrow();
  });

  test("should throw an error when parameter a === 0", () => {
    var r = 0;
    var m = 0;
    var a = 0;

    expect(() => {
      orbitalSpeed(r,m,a);
    }).toThrow();
  })

});

describe("Method: orbitalSpeed - circular orbit", () => {
    test("given r = 6578000m and m = 5.972e24kg, the result should be 7784.34281m/s", () => {
        var r, m, expected;
        r = 6578000;
        m = 5.972e24;
        expected = 7784.058051209743;

        expect(orbitalSpeed(r,m)).toEqual(expected);
    })

    test("given r = 657000m, m = 5.972e24kg and a = r, the result should be 7784.058051209743m/s", () => {
        var r,m,a,expected;
        r = 6578000;
        m = 5.972e24;
        a = r;
        expected = 7784.058051209743;

        expect(orbitalSpeed(r,m,a)).toEqual(expected);
    })
})

describe("Method: orbitalSpeed - eliptical orbit", () => {
    test("given r = 6578000m, m = 5.972e24kg, and a = 6600000, the result should be 7797.020688084556m/s", () => {
        var r,m,a,expected;
        r = 6578000;
        m = 5.972e24;
        a = 6600000;
        expected = 7797.020688084556;

        expect(orbitalSpeed(r,m,a)).toEqual(expected);
    })
})

describe("Method: orbitalSpeed - parabolic orbit", () => {
    test("given r = 6578000m, m = 5.972e24kg, and a = Infinity, the result should be 11008.320466320303m/s", () => {
      var r,m,a,expected;
      r = 6578000;
      m = 5.972e24;
      a = Infinity;
      expected = 11008.320466320303;

      expect(orbitalSpeed(r,m,a)).toEqual(expected);

    })
})

describe("Method: orbitalSpeed - hyperbolic orbit", () => {
  test("given r = 6578000m, m = 5.972e24kg, and a = -6578000m, the result should be 13482.384033760857m/s", () => {
    var r,m,a,expected;
    r = 6578000;
    m = 5.972e24;
    a = -6578000;
    expected = 13482.384033760857;

    expect(orbitalSpeed(r,m,a)).toEqual(expected);
  })
})