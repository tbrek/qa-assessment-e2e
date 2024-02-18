Feature: Quick quote happy flow

  As a new customer
  I would like to be able to get a full quote

  Scenario: Verify that a customer can get a quick quote via Brochure
    Given I am on the quick quote page "PROD"
      And The user can see the Registration Field is visible "PROD"
    When The user enters a registration into Registration Field "PROD" "GM15ZNY"
      And The user clicks Get A Quick Quote button
    Then The user clicks Yes Continue button within Mileage field
    #User is now on 'One down four to go' section
    Then The user can see the Fields on the One four to go page are visible
      And The user selects an option within No Claims Discount Dropdown "1"
      And The user enters a DOB into DOB name field "01" "01" "1989"
      And The user enters a Postcode within Postcode Field "CF14 2LW"
      And The user enters a Renewal Month within Car Insurance Renewal Dropdown "June"
      And The user enters a Random Email Address within Email Address Field
      And The user drags Car Icon to Parking Icon
    Then The user clicks Get A Quick Quote Button
    #User is now on 'Success! Here's a quick estimate of your price section
    Then The user clicks Get This Quick Quote Button
    #User is now on Enter Car Details Section
    Then The user can see the Car Details within Car Info Container
      And The user selects an option within Car Modification Toggle "yes"
      And The user selects checks the Not Listed Above check box
    Then The user selects an option within Purchase Date Toggle "yes"
      And The user selects an option within Legal Owner of this car dropdown "Other"
      And The user selects an option within Registered Keeper of Car dropdown "Other"
      And The user selects an option within Home Overnight Toggle "yes"
    #Consider adding RandomValue here
    Then The user enters mileage into Estimated Mileage Field "31600"
    Then The user clicks Continue / Driver button
    #User is now on Enter Driver Details Section
    Then The user selects an option within Title dropdown "Dr"
    #Consider adding RandomValue here
      And The user enters a first name into first name field "John"
      And The user enters a last name into last name field "Matrix"
    Then The user enters a DOB into DOB name field "01" "01" "1989"
      And The user selects an option within Lived Continuously in UK toggle "yes"
      And The user selects an option within children dropdown "0"
      And The user enters a postcode and selects their address "CF14 2LW" "23 Chamberlain Road"
      And The user enters a Random Email Address within Email Address Driver Details Field
      And The user enters a Random Mobile Number within Mobile Number Field
      And The user selects an option within Employment Status dropdown "Retired"
    Then The user selects an options Your Driving Section "Full UK Car Licence" "0" "1"
    Then The user selects an option within Medical Condition Toggle "no"
    Then The user selects an option within Has Claims Toggle "no"
      And The user selects an option within Has Motor Convictions Toggle "no"
    Then The user selects an option within Has Criminal Convictions Toggle "no"
    When The user clicks Continue Cover Button
   
