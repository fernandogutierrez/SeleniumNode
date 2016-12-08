import Webdriver from 'selenium-webdriver';
import 'chromedriver';

export default class ChromeBrowser {

    static getBrowser(){
        let capabilities = Webdriver.Capabilities.chrome();
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
