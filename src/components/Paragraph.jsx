import doneRing from '../assets/Done_ring_round_fill.svg'

export default function Paragraph({children}) {
  return (
    <p className='flex gap-2'>
      <img className='max-w-full' src={doneRing} alt="done ring" />
      {children}
    </p>
  )
}