$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Project Management/com.qa.cucumber.freecrm/src/main/java/features/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free crm create contacts",
  "description": "",
  "id": "free-crm-create-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "free crm create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user is already on loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title is already on loginpage",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user move to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enters contact details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 12,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;1"
    },
    {
      "cells": [
        "milu123",
        "milu123",
        "partha",
        "sarathi",
        "manager"
      ],
      "line": 13,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;2"
    },
    {
      "cells": [
        "milu123",
        "milu123",
        "shanth",
        "kumar",
        "director"
      ],
      "line": 14,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "free crm create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user is already on loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title is already on loginpage",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enters \"milu123\" and \"milu123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user move to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enters contact details \"partha\" and \"sarathi\" and \"manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_already_on_loginpage()"
});
formatter.result({
  "duration": 13960298175,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_is_already_on_loginpage()"
});
formatter.result({
  "duration": 31567661,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "milu123",
      "offset": 13
    },
    {
      "val": "milu123",
      "offset": 27
    }
  ],
  "location": "LoginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 756124773,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 10278009982,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 355274589,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_move_to_new_contact_page()"
});
formatter.result({
  "duration": 3907680576,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "partha",
      "offset": 29
    },
    {
      "val": "sarathi",
      "offset": 42
    },
    {
      "val": "manager",
      "offset": 56
    }
  ],
  "location": "LoginStepDefination.user_enters_contacts_details(String,String,String)"
});
formatter.result({
  "duration": 4022780854,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browse()"
});
formatter.result({
  "duration": 961776126,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "free crm create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user is already on loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title is already on loginpage",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enters \"milu123\" and \"milu123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user move to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enters contact details \"shanth\" and \"kumar\" and \"director\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_already_on_loginpage()"
});
formatter.result({
  "duration": 10023593487,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_is_already_on_loginpage()"
});
formatter.result({
  "duration": 27057133,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "milu123",
      "offset": 13
    },
    {
      "val": "milu123",
      "offset": 27
    }
  ],
  "location": "LoginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 531123008,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 5754352198,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 14893015,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_move_to_new_contact_page()"
});
formatter.result({
  "duration": 2548757597,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shanth",
      "offset": 29
    },
    {
      "val": "kumar",
      "offset": 42
    },
    {
      "val": "director",
      "offset": 54
    }
  ],
  "location": "LoginStepDefination.user_enters_contacts_details(String,String,String)"
});
formatter.result({
  "duration": 3330742290,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browse()"
});
formatter.result({
  "duration": 809035184,
  "status": "passed"
});
});