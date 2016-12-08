import Webdriver from 'selenium-webdriver';
import 'iedriver';

export default class IeBrowser {

    static getBrowser(){
        let capabilities = Webdriver.Capabilities.ie();
        let driver = new Webdriver
            .Builder()
            .withCapabilities(capabilities)
            .build();

        return {
            'Driver' : driver,
            'By' : Webdriver.By,
            'Until' : Webdriver.until
        }
    }
}
