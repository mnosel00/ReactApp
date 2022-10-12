import { FC } from 'react'

interface IProps {
  name: string
  age: number
  arr: [number, number, number]
}
export const Home: FC<IProps> = (props) => {
  return <>Home My first name is {props.name}</>
}
