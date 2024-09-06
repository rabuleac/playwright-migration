Feature: login page validation

  @regression
  Scenario: login page with valid username and password
    Given user navigate to login page
    When providing valid username and password:
      | username   | tomsmith             |
      | password   | SuperSecretPassword! |
    And click on login button
    Then success message must be displayed on login page

  Scenario: login page with invalid username and password
    Given user navigate to login page
    When providing invalid username and password:
      | username    | invalidUsername     |
      | password    | invalidPassword     |
    And click on login button
    Then unsuccess message must be displayed
