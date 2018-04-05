import { ElementFinder, element, ElementArrayFinder, by, Locator } from "protractor";
import { dataQaSelectorBy } from "../../helpers/dataQaSelectorBy";

export class SearchResultsAreaElements {

    selectedFilter = (text: string): ElementFinder => element(
        by.xpath(`//button[contains(@class, "filterButton") and text()[contains(.,"${text}")]]`));

    autoList: ElementFinder = element(dataQaSelectorBy('results-found'));

    autoItems: ElementArrayFinder = this.autoList.all(dataQaSelectorBy('ad'));

    autoItemInfo: Locator = dataQaSelectorBy('spec');

    autoItemPrice: Locator = dataQaSelectorBy('price');

    sortSelectorContainer: ElementFinder = element(by.xpath('//div[contains(@class, "sort")]'));

    sortSelector: ElementFinder = this.sortSelectorContainer.element(dataQaSelectorBy('select-control'));

    sortSelectorOption: ElementArrayFinder = this.sortSelectorContainer.all(by.xpath('//*[@data-qa-selector-option-label]'));

    loadingMessage: ElementFinder = element(by.xpath('//div[contains(@class, "resultsAmount") and contains(text(), "...")]')); // seems not so g

}