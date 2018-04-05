import { ElementFinder, element, by, Locator, ElementArrayFinder } from "protractor";

export class SearchResultsAreaElements {

    autoList: ElementFinder = element(by.xpath(''));

    autoItems: ElementArrayFinder = this.autoList.all(by.xpath(''));

    autoItemYear: Locator = by.xpath('');

    autoItemPrice: Locator = by.xpath('');

    sortSelector: ElementFinder = element(by.xpath(''));

}