import { milTime } from './milTime';


describe('military time validator', () => {

    it('will return "false" for an empty string', () => {

        let timeInput = '';

        const valMilTime = milTime(timeInput);

        expect(valMilTime).toBe(false);

    }); 

})
