import { step } from '../helpers/reportHelper';
import { browser } from "protractor";

let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

export let expect = chai.expect;


export class CommonSteps {

    /**
     * Open base URL and verify title text
     */
    openApplication(): void {
        step('Open application', () => {
            browser.get(browser.baseUrl);
            browser.manage().window().maximize();
            browser.sleep(browser.params['timeout']['animation']); // small wait for animation to finish
            expect(browser.getTitle(), 'Verify browser title').eventually.contains('AutoHero.com');
        });
    }

}