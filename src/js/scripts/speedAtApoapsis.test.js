import speedAtApoapsis from './speedAtApoapsis';

describe("Method: speedAtApoapsis - error cases", () => {
    test("should throw an error when passed no parameters", () => {
        expect(() => {
            speedAtApoapsis()
        }).toThrow();
    })
})