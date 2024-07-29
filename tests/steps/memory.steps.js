import { render, screen, fireEvent } from '@testing-library/react'
import Game from '../../src/components/game'

export function openTheGame () {
  render(<Game />)
}

export function boardSize (rows, columns) {
  const cards = screen.getAllByTestId('card')
  return cards.length === rows * columns
}

export function areCardsCovered () {
  const cards = document.getElementById('[data-testid="card"]')
  return cards.getElementsByClassName('covered').length === cards.length
}
