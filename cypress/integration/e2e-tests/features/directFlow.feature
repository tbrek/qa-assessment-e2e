Feature: Direct quote happy flow

  As a new customer
  I would like to be able to get a full quote

  Scenario: Verify that a customer can buy a policy via direct quote using the new checkout
    Given I am on the car page
    When I dismiss cookie policy modal
    And I skip through the introduction modal
    And I enter "CK55HGD" as my registration number
    And I click "FIND CAR" button
    And my car has 0 modifications
    And purchase date is correct
    And "Policyholder (me)" is the legal owner
    And "Policyholder (me)" is the registered keeper
    And my car will be kept home overnight
    And the mileage is correct
    And I click "NEXT: DRIVERS" button
    Then I should be on "drivers" page
    When I choose "Mr" as my title
    And I add "John" as my first name
    And I add "Doe" as my last name
    And I add "1" "January" "1979" as my DOB
    And I have lived in UK since the age of 17
    And I have 1 children
    And I enter "W6 8DJ" as my postscode
    And I choose "Heritage House, 2-14 Shortlands, London" as my address
    And I set "random email" and "07900000000" as my contact details
    And I set my marketing preferences to "No" "No" "No"
    And I set my employment as follows
      | status   | industry          | job               |
      | Employed | Insurance Company | Software Engineer |
    And I set my licence details to
      | type                | years held |
      | Full UK car licence | 10         |
    And I set my medical conditions
    And I have 0 claims
    And I set my NCD to 10
    And I have 0 driving convictions
    And I have 0 criminal convitctions
    And I click "NEXT: COVER" button
    Then I should be on "cover" page
    When my inception date is in 5 days
    And I set my voluntary excess to "£150"
    And I click "GET A QUOTE" button
    Then I should be on "quote" page
