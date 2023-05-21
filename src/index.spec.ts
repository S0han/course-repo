import { milTime } from "./milTime";

describe("military time validator", () => {
  it('will return "false" for an empty string', () => {
    const timeInput = "";

    const valMilTime = milTime(timeInput);

    expect(valMilTime).toBe(false);
  });

  it('must contain a " - " in the time range', () => {
    const timeInput = "10:21 -11:05";

    const valMilTime = milTime(timeInput);

    expect(valMilTime).toBe(false);
  });

    describe('can detect valid hours', () => {
        it.each([
            ["25:00 - 12:23", false],
            ["23:00 - 27:23", false],
            ["19:00 - 22:23", true],
        ])("it knows that %s has hours that are %s ", (time, result) => {
            expect(milTime(time)).toBe(result);
        });
    });

    describe('can detect valid minutes', () => {
        it.each([
            ["12:99 - 13:01", false], 
            ["12:01 - 13:99", false], 
            ["12:01 - 14:23", true],
        ])("it knows that %s has minutes that are %s", (time, result) => {
            expect(milTime(time)).toBe(result);
        });
    });
  
});
