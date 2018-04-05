import { SearchResultsAreaElements } from './elements/searchResultsAreaElements'
import { promise as wdpromise } from 'selenium-webdriver';
import { browser, ExpectedConditions } from "protractor";


export class SearchResultsArea {

    searchResultsAreaElements = new SearchResultsAreaElements();

    waitSelectedFilterAppeared(filterText: string): wdpromise.Promise<{}> {
        return browser.wait(ExpectedConditions.visibilityOf(this.searchResultsAreaElements.selectedFilter(filterText)),
            browser.params['timeout']['general'], `Selected filter ${filterText} didn\'t appear`);
    }

    clickSortingTypes(): wdpromise.Promise<void> {
        return this.searchResultsAreaElements.sortSelector.click();
    }

    clickSortByOption(index: number): wdpromise.Promise<void> {
        return this.searchResultsAreaElements.sortSelectorOption.get(index).click();
    }

    waitLoadingMessageDisappeared(): wdpromise.Promise<{}> {
        browser.sleep(browser.params['timeout']['animation']);
        return browser.wait(ExpectedConditions.invisibilityOf(this.searchResultsAreaElements.loadingMessage),
            browser.params['timeout']['general'], 'Loading message didn\'t disappear');
    }

    getAutosRegistrationYear(): wdpromise.Promise<{}[]> {
        return this.searchResultsAreaElements.autoItems.map( (element, index) => {
            return {
                index: index,
                value: element.all(this.searchResultsAreaElements.autoItemInfo).get(0).getText() // year goes first
            };
        });
    }

    getAutosPrice(): wdpromise.Promise<{}[]> {
        return this.searchResultsAreaElements.autoItems.map( (element, index) => {
            return {
                index: index,
                value: element.element(this.searchResultsAreaElements.autoItemPrice).getText()
            };
        });
    }

}