import { step } from '../helpers/reportHelper';
import { FilterArea } from '../pages/filterArea';


export class FilterAreaSteps {

    filterArea = new FilterArea();

    /**
     * Select first registration year
     */
    selectFirstRegistrationYear(year: string): void {
        step(`Select first registration year: ${year}`, () => {
            this.filterArea.expandFirstRegistrationYear();
            this.filterArea.clickFirstRegistrationYearSelector();
            this.filterArea.clickFirstRegistrationYearOption(year);
        });
    }

}