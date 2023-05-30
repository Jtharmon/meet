Feature: Specify Number of Events

  Scenario: When user hasn't specified a number, 32 is the default number
    Given the user has not specified the number of events they want to see
    When the user opens the app
    Then the app should display a list of 32 upcoming events by default


  Scenario: User can collapse an event to hide its details
    Given User has expanded an event to see its details
    When User clicks on the "Hide Details" button of the event
    Then Event details should be hidden
