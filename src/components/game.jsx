import Board from './Board'

export default function Game () {
  return (
    <>
      <h1> Memory </h1>
      <Board totalRows={3} totalColumns={4} />
    </>
  )
}
