import { step } from '../helpers/reportHelper';
import { FilterArea } from '../pages/filterArea';

let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);


export class FilterAreaSteps {

    filterArea = new FilterArea();

    /**
     * Select first registration year
     */
    selectFirstRegistrationYear(): void {
        step('Select first registration year', () => {
            this.filterArea.expandFirstRegistrationYear();
            //TODO move on
        });
    }

}