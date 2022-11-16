import { FC } from 'react'
import { useSelector } from 'react-redux'
import { isTaggedTemplateExpression } from 'typescript'
import { IState } from '../../../reducers'
import { IUsersReducer } from '../../../reducers/usersReducer'

interface IProps {
  name: string
  age: number
  arr: [number, number, number]
}
export const Home: FC<IProps> = (props) => {
  const { users } = useSelector<IState, IUsersReducer>((state) => ({
    ...state.users,
  }))
  return (
    <>
      {users?.map((user) => (
        // eslint-disable-next-line react/jsx-key
        <span>{user.name}</span>
      ))}
      Home My first name is {props.name} , {props.age}
    </>
  )
}
