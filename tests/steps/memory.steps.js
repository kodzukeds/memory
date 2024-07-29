import { render, screen, fireEvent } from '@testing-library/react'
import Game from '../../src/components/Game'

export function openTheGame () {
  render(<Game />)
}

export function boardSize (rows, columns) {
  const cards = screen.getAllByTestId('card')
  return cards.length === rows * columns
}

export function areCardsCovered () {
  const cards = document.querySelectorAll('[data-testid="card"]')
  cards.forEach(card => {
    if (!card.classList.contains('covered')) {
      return false
    }
  })

  return true
}
