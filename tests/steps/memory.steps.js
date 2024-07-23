import { render, screen, fireEvent } from '@testing-library/react'
import Game from '../../src/components/game'

export function openTheGame () {
  render(<Game />)
}

export function boardSize (rows, columns) {
  const cards = screen.getAllByTestId('card')
  return cards.length === rows * columns
}

