Feature: login with scenario outlines

  @smoke
  Scenario Outline: valid with two different users
    Given providing valid url for login
    When providing valid username as "<username>" and password as "<password>"
    Then clicking login button

    Examples:
      | username | password |
      | mercury  | mercury  |
