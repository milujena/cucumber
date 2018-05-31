package runner;
//parthasarathi
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		features="D:\\Project Management\\com.qa.cucumber.freecrm\\src\\main\\java\\features\\contacts.feature",
		glue= {"stepDefinations"},
		dryRun=false,
		monochrome=true,
		strict=true,
		
		//plugin = {"html:target/cucumber-html-report", "json:target/cucumber-json-report.json" }
		
		plugin= {"pretty","html:test-outout", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}
		)
public class TestRunner {

}

