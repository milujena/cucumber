package stepDefinations;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefination {
	WebDriver driver;
	
	
	
	@Given("^user is already on loginpage$")
	public void user_is_already_on_loginpage()  {
		System.setProperty("webdriver.chrome.driver","D:\\Project Management\\com.qa.cucumber.freecrm\\drivers\\chromedriver.exe" );
	    driver=new ChromeDriver();
	    driver.get("https://www.freecrm.com/index.html");
	   
	}

	@When("^title is already on loginpage$")
	public void title_is_already_on_loginpage()  {
		String titel=driver.getTitle();
		System.out.println(titel);
		Assert.assertEquals("Free CRM software in the cloud powers sales and customer service", titel);
	}

	@Then("^user enters username and password$")
	public void user_enters_username_and_password() {
		driver.findElement(By.xpath("//input[@name='username']")).sendKeys("milu123");
	    driver.findElement(By.xpath("//input[@name='password']")).sendKeys("milu123");
	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button()  {
		driver.findElement(By.xpath("//input[@value='Login']")).click();
	}

	@Then("^user is on homepage$")
	public void user_is_on_homepage()  {
		String title=driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("CRMPRO", title);
	}





}
