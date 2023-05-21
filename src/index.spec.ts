import { milTime } from './milTime';


describe('military time validator', () => {

    it('will return "false" for an empty string', () => {

        const timeInput = '';

        const valMilTime = milTime(timeInput);

        expect(valMilTime).toBe(false);

    }); 

    it('must contain a " - " in the time range', () => {
        
        const timeInput = '10:21 -11:05'

        const valMilTime = milTime(timeInput);

        expect(valMilTime).toBe(false);

    });

    it('knows that "25:00 - 12:23" is not a valid time range', () => {

        const timeInput = '25:00 - 12:23'; 
        
        const valMilTime = milTime(timeInput);

        expect(valMilTime).toBe(false);

    });

})
