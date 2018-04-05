import { step } from '../helpers/reportHelper';
import { SearchResultsArea } from '../pages/searchResultsArea';

let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);


export class SearchResultsAreaSteps {

    searchResultsArea = new SearchResultsArea();

    /**
     * Select sorting type
     */
    selectSortingType(): void {
        step('Select first registration year', () => {
            this.searchResultsArea.clickSortingTypes();
            //TODO move on
        });
    }

}