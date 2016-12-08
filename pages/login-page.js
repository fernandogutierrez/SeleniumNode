import Browser from '../browser/browserManager'
import MainPage from './main-page'
class LoginPage{
   
   constructor(){

    this.url = 'http://todo.ly/';
    this.By = Browser.By;
    this.driver = Browser.Driver;                             
   }

   open(){
        this.driver.get(this.url);
        return this;
   }
   
   clickOnLogin(){
       this.driver.findElement(this.By.xpath('//div[@class="HPHeaderLogin"]/a/img'))
                  .click(); 
                  return this;
   }

   setUser(userName){
       this.driver.findElement(this.By.id('ctl00_MainContent_LoginControl1_TextBoxEmail'))
                              .sendKeys('fernandogutierrez279@hotmail.com');
                              console.log('setusername')    
      return this;
   }

   setPassword(password){
       this.driver.findElement(this.By.id('ctl00_MainContent_LoginControl1_TextBoxPassword'))
                            .sendKeys('Control123');
      return this;
   }

   clickOnLoginBtn(){
       var login_button = this.driver.findElement(this.By.id('ctl00_MainContent_LoginControl1_ButtonLogin'));
       return login_button.click();
   }

}

export {LoginPage as default}
