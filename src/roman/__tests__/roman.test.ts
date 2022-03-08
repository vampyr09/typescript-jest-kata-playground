import { convert, sortedDict } from "../roman";

test("dict keys sorted right", () => {
    expect(sortedDict()).toEqual([1000, 500, 100, 50, 10, 5, 1]);
})

test.each([
    [4000, "MMMM"],
    [3000, "MMM"],
    [2500, "MMD"],
    [21, "XXI"],
    [40, "XL"],
    [49, "XLIX"],
    [1999, "MCMXCIX"]
])("%s -> %s", (input, output) => {
    expect(convert(input)).toEqual(output)
})
