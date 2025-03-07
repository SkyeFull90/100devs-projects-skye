import Test from "@codewars/test-compat";
import chromosomeCheck from "../chromosomeCheck.js";

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(chromosomeCheck('XY'), "Congratulations! You're going to have a son.")
        Test.assertEquals(chromosomeCheck('XX'), "Congratulations! You're going to have a daughter.")
    });
});
