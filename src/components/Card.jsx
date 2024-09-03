export default function Card ({ row, col }) {
  // const [isUncovered, setIsUncovered] = useState('')

  // function handleClick (e) {
  //   e.preventDefault()
  //   if (!isUncovered) {
  //     onClick(row, colPosition)
  //     setIsUncovered(true)
  //   }
  // }
  return (
    <button className='card covered' data-testid={`card-row${row}-col${col}`} />
  )
}
