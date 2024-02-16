Feature: Quick quote happy flow

  As a new customer
  I would like to be able to get a full quote

  Scenario: Verify that a customer can get a quick quote via Brochure
    Given I am on the quick quote page
    And The user can see the Registration Field is visible
    Then The user enters a registration into Registration Field "GM15ZNY"
    Then The user clicks Find My Car button

   
