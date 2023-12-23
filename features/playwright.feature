@foo
Feature: Verify JDoodle suites

  Background: Navigation
    Given JDoodle website

 Scenario: Verify all hoverable menu items
    Given "Products" verify menu items
    Given "Solutions" verify menu items


 Scenario: Verify language dropdown menu items
    Then Verify "Java (Advanced) Java (" language selection
    Then Verify "C#" language selection
    Then Verify "Python3" language selection
    Then Verify "C++" language selection
    Then Verify "NodeJS" language selection
    Then Verify "PHP" language selection

@Scenario1
Scenario: Verify Code pricing section
    Given click on Price tab
    Then verify Platform Price page
    Then verify API Price page
  

Scenario: Verify Code execution #Currently blocked due to 
    Given Code Snippet in editor
    When Clicked on Execute option