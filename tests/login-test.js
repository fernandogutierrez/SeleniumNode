import LoginPage from '../pages/login-page';
import MainPage from '../pages/main-page';
import Browser from '../browser/browserManager'
import test from 'tape'; 

Browser.createBrowser('chrome');
var driver = Browser.Driver;

var loginPage = new LoginPage();



test('A passing test', (assert) => {

let mainPage;

    loginPage
		    .open()
		    .clickOnLogin()
			.setUser()
			.setPassword()
            .clickOnLoginBtn()
            .then(()=>{
            	 mainPage = new MainPage(driver, Browser.By, Browser.Until);
            	 mainPage.getDate();       
            })
            .then(()=>{
            	
            });

	driver.quit();
    assert.pass('This test will pass.');
    assert.end();   
});


  