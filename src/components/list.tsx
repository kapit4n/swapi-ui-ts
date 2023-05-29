import './list.css'

interface ListProps {
  title: string;
  children: React.ReactNode
}

export default function List({ title, children }: ListProps) {
  return (
    <div className='list'>
      <h2>{title}</h2>
      <div className='list-body'>{children}</div>
    </div>
  )
}
