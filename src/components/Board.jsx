import Card from './Card'

export default function Board ({ totalRows, totalColumns }) {
  const board = []
  for (let row = 0; row < totalRows; row += 1) {
    board.push([])
    for (let col = 0; col < totalColumns; col += 1) {
      board[row].push({
        row,
        col
      })
    }
  }
  return (
    <>
      {board.map((row, rowIndex) => (
        <div className='row' data-testid='row' key={rowIndex}>
          {row.map((card, cardIndex) => (
            <Card key={cardIndex} row={card.row} col={card.col} />
          )
          )}
        </div>
      ))}
    </>
  )
}
