Feature: Memory
  As a player:
        - I want to play to the classic memory game
        - So I want to uncover all the cards

        How to refer to a cell:
        - Using the (row,column) nomenclature
        - Rows and columns starts from 0

        How to load mock data
        - Using the <ctrl>+m keyboard combination to discover
        the load mock data form

        To define the board data will use:
        "0"-"5" for the different card types

        Thera is one way to define mock data
        - Table:
        | 0 | 0 | 1 | 1 |
        | 2 | 2 | 3 | 3 |
        | 4 | 4 | 5 | 5 |

    Game example: https://minesweeper.online/es/game/3584089869

Background:
Given the player opens the game

Scenario: Starting screen - Board size
Then the board should have "3" rows and "4" columns

Scenario: Starting screen - All the cards should be covered
Then all the cards should be covered

Scenario: Uncovering a card
When the player left clicks on the card ("0", "0")
Then the card should be uncovered

Scenario: Uncovering a card - Displaying the card symbol
Given the player loads the following mock data
      """
      | 0 | 0 | 0 | 0 |
      """
When the player left clicks on the card ("0", "0")
Then the card should show the symbol "0"

Scenario: Uncovering a card - Trying to uncover a card already uncovered
When the player left clicks on the card ("0", "0")
And the player left clicks on the card ("0", "0")
Then the card should remain uncovered

Scenario: Uncovering a second card - The two cards are the same
Given the player loads the following mock data
      """
      | 0 | 0 | 0 | 0 |
      """
When the player uncovers the first card ("0", "0")
And the player uncovers the second card ("0", "1")
Then the card should be uncovered

Scenario: Uncovering a second card - The two cards are different
Given the player loads the following mock data
      """
      | 0 | 1 | 0 | 0 |
      """
When the player uncovers the first card ("0", "0")
And the player uncovers the second card ("0", "1")
Then the cards should be covered

Scenario: Uncovering all the cards - Winning the game
Given the player loads the following mock data
      """
      | 0 | 0 |
      """
When the player uncovers the first card ("0", "0")
And the player uncovers the second card ("0", "1")
Then the player should win the game