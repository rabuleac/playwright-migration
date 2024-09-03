Feature: login page validation

  @regression
  Scenario: login page with valid username and password
    Given user navigate to page
    When providing valid username and password
    And click on login button
    Then success message must be displayed

  Scenario: login page with invalid username and password
    Given user navigate to page
    When providing invalid username and password
    And click on login button
    Then unsuccess message must be displayed
