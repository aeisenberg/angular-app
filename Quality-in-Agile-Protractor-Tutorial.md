Step 1: Getting Started
=======================

0. ensure npm, node, protractor, grunt installed
1. clone from github
2. git checkout qia-step-1
3. cd server
4. npm update
5. node server.js
6. cd ../client
7. npm update
8. grunt build
9. open http://localhost:3000/projectsinfo
10. cd ../protractor
11. npm update
12. protractor dev-protractor.conf.js

Step 2: First tests
===================

Run the initial test first to make sure it works. Then add two more similar tests for ensuring navigation on other pages.

Step 3: Sketching test scenarios
================================

Determine the main use cases and sketch some initial test scenarios to create protractor tests for.

Step 4: Use case-based test scenarios
=====================================

Implement the login test scenarios. Use the following protractor concepts:

* element(by.css(<css-selector>))
* element(by.cssContainingText(<css-selector>), <text>)
* element(...).click()
* element(...).isPresent()
* element(...).isDisplayed()
* element(...).sendKeys(<text>)
* element(...).clearAndSendKeys(<text>)

Step 5: More complex test
=========================

ElementFinder methods return promises. They can be invoked synchronously *OR* asynchronously.