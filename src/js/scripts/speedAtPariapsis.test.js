import speedAtPariapsis from './speedAtPariapsis';

describe("Method: speedAtPariapsis - error cases", () => {
    test("should throw an error when passed no parameters", () => {
        expect(() => {
            speedAtPariapsis()
        }).toThrow();
    })
})