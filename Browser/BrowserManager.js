import ChromeBrowser from "./chromeBrowser"
import IeBrowser from "./ieBrowser"

export default class BrowserManager {
    constructor(){
        this.browser = createBrowser();
    }

    static createBrowser(browser = 'chrome') {
        switch (browser){
            case 'chrome':
                this.browser = ChromeBrowser.getBrowser();
                break;
            case 'ie':
                this.browser = IeBrowser.getBrowser();
                break;
            default :
                console.log('You must to select "chrome" or "ie" as browser');
        }
        this.browser.Driver.manage().window().maximize();
    }

    static get Driver(){
        return this.browser.Driver;
    }

    static get By(){
        return this.browser.By;
    }

    static get Until(){
        return this.browser.Until;
    }
}
