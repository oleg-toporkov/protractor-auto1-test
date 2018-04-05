import { FilterAreaElements } from './elements/filterAreaElements';
import { promise as wdpromise } from 'selenium-webdriver';
import { browser, ExpectedConditions } from "protractor";


export class FilterArea {

    filterAreaElements = new FilterAreaElements();

    expandFirstRegistrationYear(): wdpromise.Promise<void> {
        browser.wait(ExpectedConditions.visibilityOf(
            this.filterAreaElements.firstRegistrationFilter),
            browser.params['timeout']['general'], 'First registration filter is not visible');
        return this.filterAreaElements.firstRegistrationFilter.click();
    }

    clickFirstRegistrationYearSelector(): wdpromise.Promise<void> {
        return this.filterAreaElements.firstRegistrationFilterSelector.click();
    }

    clickFirstRegistrationYearOption(year: string): wdpromise.Promise<void> {
        return this.filterAreaElements.firstRegistrationFilterOption(year).click();
    }

}