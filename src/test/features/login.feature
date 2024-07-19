Feature: login page validation

  @regression
  Scenario: login page with valid username and password
    Given providing valid url for login
    When providing valid username and password
    Then clicking login button

  @smoke
  Scenario: login page with valid username and password
    Given providing valid url for login
    When providing valid username as "12345" and password as "mercury"
    Then clicking login button
