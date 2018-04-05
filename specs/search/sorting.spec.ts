import { FilterAreaSteps, SearchResultsAreaSteps, feature, story} from '../facade'

describe('Create tracker', () => {

    let filterAreaSteps = new FilterAreaSteps();
    let searchResultsAreaSteps = new SearchResultsAreaSteps();

    beforeEach( () => {
        feature('Autos List Sorting');
    });

    it('Sort by price descending with selected first registration filter', () => {
        story('Sort with selected filters');

        filterAreaSteps.selectFirstRegistrationYear();

        searchResultsAreaSteps.selectSortingType();
    });

});
