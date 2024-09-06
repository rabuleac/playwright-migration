Feature: Fill form validation

  @regression
  Scenario: fill all fields with valid data
    Given user navigate to form page
    When user fill all fields:
      | firstName    | Alexandr         |
      | lastName     | Rabuleac         |
      | emailAddress | some@email.com   |
      | commentField | Some random text |
    And click on continue button
    Then success message must be displayed on form page
