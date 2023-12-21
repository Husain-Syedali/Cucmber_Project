@foo
Feature: Verify JDoodle UI

  Background: Navigation
    Given JDoodle website


  Scenario: Verify menu language dropdown items
    Then Verify "Java (Advanced) Java (" language selection
    Then Verify "C#" language selection
    Then Verify "Python3" language selection
    Then Verify "C++" language selection
    Then Verify "NodeJS" language selection
    Then Verify "PHP" language selection


    
   
 
