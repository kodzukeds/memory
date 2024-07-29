import Card from './Card'

export default function Board ({ totalRows, totalColumns }) {
  const board = []
  for (let row = 0; row < totalRows; row += 1) {
    board.push([])
    for (let column = 0; column < totalColumns; column += 1) {
      board[row].push({
        y: row,
        x: column
      })
    }
  }
  return (
    <>
      {board.map((row, rowIndex) => (
        <div className='row' data-testid='row' key={rowIndex}>
          {row.map((card, cardIndex) => (
            <Card key={cardIndex} />
          ))}
        </div>
      ))}
    </>
  )
}
