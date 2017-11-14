//Require packages
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

//Buil new webdriver instance
var driver = new webdriver.Builder().forBrowser('chrome').build();

//Configuration
url = 'http://www.phptravels.net';
driver.manage().timeouts().implicitlyWait(5000);

//Start test
driver.get(url);
driver.findElement(By.xpath("//div[@class='navbar-collapse collapse']//li[1]")).click();
driver.findElement(By.xpath("//div[@class='navbar-collapse collapse']//li[1]/ul/li[2]/a")).click();
driver.findElement(By.css("input[name=firstname]")).sendKeys("Henk");
//Selecteer het veld 'lastname' by Name en vul daar de Boer in
driver.findElement(By.name("lastname")).sendKeys("de Boer");
//Selecteer het veld 'phone' met css en vul daar 0609060906 in
driver.findElement(By.css("input[name=phone]")).sendKeys("0609060906");
//Selecteer het veld 'Email' met Xpath en vul daar jan.de.boer@hotmail.com in
driver.findElement(By.xpath("//input[@placeholder='Email']")).sendKeys("henk3.de.boer@hotmail.com");
//Selecteer het veld 'password' met css en vul daar henk123 in
driver.findElement(By.css("input[name=password]")).sendKeys("henk123");
//Selecteer het veld 'confirmpassword' met css en vul daar henk123 in
driver.findElement(By.css("input[name=confirmpassword]")).sendKeys("henk123");
//Selecteer de knop 'submit' met css en klik op de knop
driver.findElement(By.css("button[type=submit]")).click();

//Quit test
driver.sleep(2000);
driver.quit();
