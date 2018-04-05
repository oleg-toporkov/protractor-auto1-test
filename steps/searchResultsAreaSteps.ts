import { step } from '../helpers/reportHelper';
import { SearchResultsArea } from '../pages/searchResultsArea';
import { protractor } from "protractor";
import { cleanNumber } from "../helpers/numberHelper";

let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

export let expect = chai.expect;

export class SearchResultsAreaSteps {

    searchResultsArea = new SearchResultsArea();

    /**
     * Select sorting type
     * @param index - option zero based index
     */
    selectSortingType(index: number): void {
        step('Select sorting type', () => {
            this.searchResultsArea.clickSortingTypes();
            this.searchResultsArea.clickSortByOption(index);
        });
    }

    /**
     * Wait loading message to disappear
     */
    waitLoadingMessageDisappeared(): void {
        step('Wait loading message to disappear', () => {
            this.searchResultsArea.waitLoadingMessageDisappeared();
        });
    }

    /**
     * Verify all cars are filtered by first registration
     * @param expectedYear - this year and greater allowed
     */
    verifyCarsFilteredByFirstRegistration(expectedYear: number): void {
        step(`Verify all cars are filtered by first registration: ${expectedYear}`, () => {
            this.searchResultsArea.getAutosRegistrationYear().then( (years) => {
                years.forEach( (year) => {
                    expect(cleanNumber(year['value']),
                        `Auto from line ${year['index']} not filtered properly`).to.be.at.least(expectedYear);
                });
            });
        });
    }

    /**
     * Verify all cars are sorted by price descending
     */
    verifyCarsSortedByPriceDesc(): void {
        step('Verify all cars are sorted by price descending', () => {
            this.searchResultsArea.getAutosPrice().then( (prices) => {
                prices.forEach( (price, index) => {
                    if (index != (prices.length-1)) {
                        protractor.promise.all([price['value'], prices[index + 1]['value']]).then(([current, next]) => {
                            expect(cleanNumber(current), `Auto from line ${index} should go before ${index + 1}`).to.be.at.least(cleanNumber(next));
                        });
                    }
                });
            });
        });
    }

    /**
     * Verify filter selected
     * @param text - filter text
     */
    verifyFilterSelected(text: string): void {
        step(`Verify filter "${text}" selected`, () => {
            this.searchResultsArea.waitSelectedFilterAppeared(text);
        });
    }

}