Feature: Quick quote happy flow

  As a new customer
  I would like to be able to get a full quote

  Scenario: Verify that a customer can get a quick quote via Brochure
    Given I am on the quick quote page
    And The user can see the Registration Field is visible
    Then The user enters a registration into Registration Field "GM15ZNY"
    Then The user clicks Find My Car button
    Then The user can see the Car Details within Car Info Container
    And The user selects an option within Car Modification Toggle "yes"
    And The user selects checks the Not Listed Above check box
    Then The user selects an option within Purchase Date Toggle "yes"
    And The user selects an option within Legal Owner of this car dropdown "Other"
    And The user selects an option within Registered Keeper of Car dropdown "Other"
    And The user selects an option within Home Overnight Toggle "yes"
    #Confider adding RandomValue here
    Then The user enters mileage into Estimated Mileage Field "31600"
    Then The user clicks Continue / Driver button

   
