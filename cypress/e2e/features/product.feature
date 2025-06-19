Feature: Product Page

  Scenario: Successful navigation to the product page
    Given I visit the product page
    Then I should see the product list

  Scenario: Must show the product sale price
    Given I visit the product page
    Then I should see the product 13 regular price as "₱5,000.00" and sale price "₱4,599.89"
    Then I should see the product 13 regular price must be strikethrough

  Scenario: Product details are correct
    Given I visit the product page
    Then I should see the product name "Product 2"