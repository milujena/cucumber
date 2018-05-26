package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		features="D:\\Project Management\\com.qa.cucumber.freecrm\\src\\main\\java\\features\\login.feature",
		glue= {"D:\\Project Management\\com.qa.cucumber.freecrm\\src\\main\\java\\stepDefinations"}
		
		)
public class TestRunner {

}

