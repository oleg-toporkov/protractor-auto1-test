import { FilterAreaElements } from './elements/filterAreaElements'
import { promise as wdpromise } from 'selenium-webdriver';


export class FilterArea {

    filterAreaElements = new FilterAreaElements();

    expandFirstRegistrationYear(): wdpromise.Promise<void> {
        return this.filterAreaElements.firstRegistrationFilter.click();
    }

}