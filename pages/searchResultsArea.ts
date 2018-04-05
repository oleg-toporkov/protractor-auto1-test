import { SearchResultsAreaElements } from './elements/searchResultsAreaElements'
import { promise as wdpromise } from 'selenium-webdriver';


export class SearchResultsArea {

    searchResultsAreaElements = new SearchResultsAreaElements();

    clickSortingTypes(): wdpromise.Promise<void> {
        return this.searchResultsAreaElements.sortSelector.click();
    }

}