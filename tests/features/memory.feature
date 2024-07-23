Feature: Memory

Background:
Given the player opens the game

Scenario: Starting screen - Board size
Then the board should have "3" rows and "4" columns

Scenario: Starting screen - All the cards should be covered
Then all the cards should be covered

Scenario: Uncovering a card
When the player left clicks on a card
Then the card should be uncovered

Scenario: Uncovering a card - Uncovering the second card
Given the player uncovers a card
When there are two cards uncovered
Then the card should be uncovered
And the first card should remain uncovered

Scenario: Uncovering a card - Displaying the card symbol
Given the player uncovers a card
Then the card should show a symbol

Scenario: Uncovering a card - Matching card symbols
Given the player uncovers a card
And the card shows a symbol
When there are two cards uncovered
Then the game should check if their symbols match

Scenario: Uncovering a card - Trying to uncover a card already uncovered
Given the player uncovers a card
And the card is already uncovered
Then the card should remain uncovered

Scenario: Covering a card
Given the player uncovers a card
When there are two cards uncovered
And their symbols don't match
Then the cards should be covered

Scenario: Uncovering all the cards - Winning the game
Given the player uncovers a card
When all the cards are uncovered
Then the player should win the game