@foo
Feature: Verify JDoodle suites

  Background: Navigate to Jdoodle website
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



Scenario: Verify Code pricing section
    Given click on Price tab
    Then verify Platform Price page
    Then verify API Price page
  
@Scenario1
Scenario: Verify Code execution #Currently blocked due to image handling issue: communicated to Gokul.
    Given Code Snippet in editor
    When Clicked on Execute option

