import { FilterAreaSteps, SearchResultsAreaSteps, CommonSteps, feature, story } from '../facade'

describe('Autos List Sorting', () => {

    let filterAreaSteps = new FilterAreaSteps();
    let searchResultsAreaSteps = new SearchResultsAreaSteps();
    let commonSteps = new CommonSteps();

    beforeEach( () => {
        feature('Autos List Sorting');
        commonSteps.openApplication();
    });


    it('Sort by price descending with selected first registration filter', () => {
        story('Sort with selected filters');

        filterAreaSteps.selectFirstRegistrationYear('2015');
        searchResultsAreaSteps.waitLoadingMessageDisappeared();
        searchResultsAreaSteps.verifyFilterSelected('2015');

        searchResultsAreaSteps.selectSortingType(1); // let's not deal with Umlaut for now ;(
        searchResultsAreaSteps.waitLoadingMessageDisappeared();

        searchResultsAreaSteps.verifyCarsFilteredByFirstRegistration(2015);
        searchResultsAreaSteps.verifyCarsSortedByPriceDesc();
    });

});
