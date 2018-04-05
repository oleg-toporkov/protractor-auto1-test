import { ElementFinder, element } from "protractor";
import { dataQaSelectorBy, dataQaSelectorOptionLabelBy } from "../../helpers/dataQaSelectorBy";

export class FilterAreaElements {

    firstRegistrationFilter: ElementFinder = element(dataQaSelectorBy('filter-year'));

    firstRegistrationFilterSelector: ElementFinder = this.firstRegistrationFilter.element(dataQaSelectorBy('select-control'));

    firstRegistrationFilterOption = (year: string): ElementFinder => element(dataQaSelectorOptionLabelBy(year));

}