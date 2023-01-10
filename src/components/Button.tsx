export interface Props {
  name: string
}

export default function Button({ name }: Props) {
  return (
    <button onClick={() => alert('test')} className="text-primary">{name}</button>
  )
}