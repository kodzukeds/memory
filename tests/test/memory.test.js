import { loadFeature, defineFeature } from 'jest-cucumber'
import * as steps from '../steps/memory.steps'

const feature = loadFeature('C:/Users/edurne.munozlaparra/OneDrive - Travelport/Documents/DUAL/memory/tests/features/memory.feature')

defineFeature(feature, (test) => {
  test('Starting screen - Board size', ({ given, then }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    })

    then(/^the board should have "(.*)" rows and "(.*)" columns$/, (rows, columns) => {
      expect(steps.boardSize(rows, columns)).toBe(true)
    })
  })

  test('Starting screen - All the cards should be covered', ({ given, then }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    })

    then('all the cards should be covered', () => {
      expect(steps.areCardsCovered()).toBe(true)
    })
  })

  test('Uncovering a card', ({ given, when, then }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    })

    when('the player left clicks on the card ("0", "0")', () => {
      steps.clickCard(0, 0)
    })

    then('the card should be uncovered', () => {
      expect(steps.isCardUncovered(0, 0)).toBe(true)
    })
  })

  test('Uncovering a card - Displaying the card symbol', ({ given, when, then, pending }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    })

    given('the player loads the following mock data', (mockData) => {
      pending()
    })

    when('the player left clicks on the card ("0", "0")', () => {
      pending()
    })

    then('the card should show the symbol "0"', () => {
      pending()
    })
  })

  test('Uncovering a card - Trying to uncover a card already uncovered', ({ given, when, then, pending }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    })

    given('the player left clicks on the card ("0", "0")', () => {
      pending()
    })

    when('the player left clicks on the card ("0", "0")', () => {
      pending()
    })

    then('the card should remain uncovered', () => {
      pending()
    })
  })

  test('Uncovering a second card - The two cards are the same', ({ given, when, then, pending }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    })

    given('the player loads the following mock data', (mockData) => {
      pending()
    })

    when('the player uncovers the first card ("0", "0")', () => {
      pending()
    })

    when('the player uncovers the second card ("0", "1")', () => {
      pending()
    })

    then('the card should be uncovered', () => {
      pending()
    })
  })

  test('Uncovering a second card - The two cards are different', ({ given, when, and, then, pending }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    })

    given('the player loads the following mock data', (mockData) => {
      pending()
    })

    when('the player uncovers the first card ("0", "0")', () => {
      pending()
    })

    and('the player uncovers the second card ("0", "1")', () => {
      pending()
    })

    then('the cards should be covered', () => {
      pending()
    })
  })

  test('Uncovering all the cards - Winning the game', ({ given, when, then, pending }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    })

    given('the player loads the following mock data', (mockData) => {
      pending()
    })

    when('the player uncovers the first card ("0", "0")', () => {
      pending()
    })

    when('the player uncovers the second card ("0", "1")', () => {
      pending()
    })

    then('the player should win the game', () => {
      pending()
    })
  })
})
