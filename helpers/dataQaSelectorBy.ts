import { Locator, by } from 'protractor';


export function dataQaSelectorBy(value: string): Locator {
    return by.css(`[data-qa-selector="${value}"]`)
}

export function dataQaSelectorOptionLabelBy(value: string): Locator {
    return by.css(`[data-qa-selector-option-label="${value}"]`)
}