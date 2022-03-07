import { add } from "../calc";

describe("Add", () => {

    test("1+1 = 2", () => {
        expect(add(1, 1)).toEqual(2);
    });

})