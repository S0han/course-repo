import { milTime } from './milTime';


describe('military time validator', () => {

    it('will return "false" for an empty string', () => {

        let timeInput = '';

        const valMilTime = milTime(timeInput);

        expect(valMilTime).toBe(false);

    }); 

    it('must contain a " - " in the time range', () => {
        
        let timeInput = '10:21 -11:05'

        const valMilTime = milTime(timeInput);

        expect(valMilTime).toBe(false);

    });

})
