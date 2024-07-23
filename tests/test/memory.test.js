import { loadFeature, defineFeature } from 'jest-cucumber'
import * as steps from '../steps/memory.steps'

const feature = loadFeature('C:/Users/edurne.munozlaparra/OneDrive - Travelport/Documents/DUAL/memory/tests/features/memory.feature')

defineFeature(feature, (test) => {
  test('Starting screen - Board size', ({ given, then, pending }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    })
    then(/^the board should have "(.*)" rows and "(.*)" columns$/, (rows, columns) => {
      expect(steps.boardSize(rows, columns)).toBe(true)
    })
  })

  test('Starting screen - All the cards should be covered', ({ given, then, pending }) => {
    given('the player opens the game', () => {
      pending()
    })
    then('all the cards should be covered', () => {
      pending()
    })
  })

  test('Uncovering a card', ({ given, when, then, pending }) => {
    given('the player opens the game', () => {
      pending()
    })
    when('the player left clicks on a card', () => {
      pending()
    })
    then('the card should be uncovered', () => {
      pending()
    })
  })

  test('Uncovering a card - Uncovering the second card', ({ given, when, then, pending }) => {
    given('the player opens the game', () => {
      pending()
    })
    given('the player uncovers a card', () => {
      pending()
    })
    when('there are two cards uncovered', () => {
      pending()
    })
    then('the card should be uncovered', () => {
      pending()
    })
    then('the first card should remain uncovered', () => {
      pending()
    })
  })

  test('Uncovering a card - Displaying the card symbol', ({ given, then, pending }) => {
    given('the player opens the game', () => {
      pending()
    })
    given('the player uncovers a card', () => {
      pending()
    })
    then('the card should show a symbol', () => {
      pending()
    })
  })

  test('Uncovering a card - Matching card symbols', ({ given, and, when, then, pending }) => {
    given('the player opens the game', () => {
      pending()
    })
    given('the player uncovers a card', () => {
      pending()
    })
    and('the card shows a symbol', () => {
      pending()
    })
    when('there are two cards uncovered', () => {
      pending()
    })
    then('the game should check if their symbols match', () => {
      pending()
    })
  })

  test('Uncovering a card - Trying to uncover a card already uncovered', ({ given, and, then, pending }) => {
    given('the player opens the game', () => {
      pending()
    })
    given('the player uncovers a card', () => {
      pending()
    })
    and('the card is already uncovered', () => {
      pending()
    })
    then('the card should remain uncovered', () => {
      pending()
    })
  })

  test('Covering a card', ({ given, when, and, then, pending }) => {
    given('the player opens the game', () => {
      pending()
    })
    given('the player uncovers a card', () => {
      pending()
    })
    when('there are two cards uncovered', () => {
      pending()
    })
    and('their symbols don\'t match', () => {
      pending()
    })
    then('the cards should be covered', () => {
      pending()
    })
  })

  test('Uncovering all the cards - Winning the game', ({ given, when, then, pending }) => {
    given('the player opens the game', () => {
      pending()
    })
    given('the player uncovers a card', () => {
      pending()
    })
    when('all the cards are uncovered', () => {
      pending()
    })
    then('the player should win the game', () => {
      pending()
    })
  })
})
