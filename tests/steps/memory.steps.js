import { fireEvent, render, screen } from '@testing-library/react'
import Game from '../../src/components/Game'

export function openTheGame () {
  render(<Game />)
}

export function boardSize (rows, columns) {
  const cards = screen.getAllByTestId('card', { exact: false })
  return cards.length === rows * columns
}

export function areCardsCovered () {
  const cards = screen.getAllByTestId('card', { exact: false })
  cards.forEach(card => {
    if (!card.classList.contains('covered')) {
      return false
    }
  })
  return true
}

export function clickCard (row, col) {
  const card = screen.getByTestId(`card-row${row}-col${col}`)
  fireEvent.click(card)
}

export function isCardUncovered (row, col) {
  const card = screen.getByTestId(`card-row${row}-col${col}`)

  if (card.classList.contains('uncovered')) {
    return true
  } else {
    return false
  }
}
