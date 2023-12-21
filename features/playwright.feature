@foo
Feature: Verify JDoodle UI

  Background: Navigation
    Given JDoodle website

  Scenario: Verify Code editor and clicking execute button
    Given Code Snippet in editor
    When Clicked on Execute option


 Scenario: Verify menu items
    Given Products menu items


 Scenario: Verify menu language dropdown items
    Then Verify "Java (Advanced) Java (" language selection
    Then Verify "C#" language selection
    Then Verify "Python3" language selection
    Then Verify "C++" language selection
    Then Verify "NodeJS" language selection
    Then Verify "PHP" language selection
