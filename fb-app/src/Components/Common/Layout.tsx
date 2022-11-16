import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { getUsers } from '../../actions/userActions'

import { Menu } from './Menu'

type GetUsers = ReturnType<typeof getUsers>

const Wrapper = styled.div`
  width: 100%;
`

const Content = styled.div`
  width: 1024px;
  margin: 0 auto;
`
interface IProps {
  children: React.ReactNode
}

export const Layout: FC<IProps> = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch<GetUsers>(getUsers())
  }, [dispatch])

  return (
    <Wrapper>
      <Menu />
      <Content>{props.children}</Content>
    </Wrapper>
  )
}
