import Browser from '../browser/browserManager'

class MainPage{
   constructor(){
   	 
     this.driver = Browser.Driver; 
     this.By = Browser.By;
     this.until = Browser.Until;
   }

   getDate(){  	
        return this.driver.wait(this.until.elementLocated(this.By.id('DateDiv')), 15000);
   }	

   getName(){
   	  return 'hello';
   }
}
export { MainPage as default }