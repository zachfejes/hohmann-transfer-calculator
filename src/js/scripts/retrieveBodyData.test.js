import retrieveBodyData from './retrieveBodyData';

describe("Method: retrieveBodyData", () => {
    test("Should throw an error when passed no parameters", () => {
        expect(() => {
            retrieveBodyData()
          }).toThrow();
    })

    test("Should throw an error when start date is later than end date", () => {
        var start = new Date().setDate(2);
        var end = new Date().setDate(1);
        var body = "Earth";

        console.log("start: ", start);
        console.log("end", end);

        expect(() => {
            retrieveBodyData(body, start, end)
        }).toThrow();
    })
})