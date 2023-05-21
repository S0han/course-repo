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

  describe('it knows that "12:99 - 13:01" is not a valid time range', () => {
        const timeInput = "12:99 - 13:01";

        expect(milTime(timeInput)).toBe(false);
  });
  
});
