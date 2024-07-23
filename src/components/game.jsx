export default function Game () {
  return (
    <>
      <h1>Memory</h1>
      <div className='board' data-testid='board'>
        <div className='board-row' data-testid='board-row'>
          <div className='card' data-testid='card' />
          <div className='card' data-testid='card' />
          <div className='card' data-testid='card' />
          <div className='card' data-testid='card' />
        </div>
        <div className='board-row' data-testid='board-row'>
          <div className='card' data-testid='card' />
          <div className='card' data-testid='card' />
          <div className='card' data-testid='card' />
          <div className='card' data-testid='card' />
        </div>
        <div className='board-row' data-testid='board-row'>
          <div className='card' data-testid='card' />
          <div className='card' data-testid='card' />
          <div className='card' data-testid='card' />
          <div className='card' data-testid='card' />
        </div>
      </div>
    </>
  )
}
