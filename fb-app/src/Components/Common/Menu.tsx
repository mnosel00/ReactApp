import React, { FC } from 'react'
import styled from 'styled-components'

import { stackColor } from '../../styledHelpers/colors'

const Wrapper = styled.div`
  border: 10px solid ${stackColor.white};
`

export const Menu: FC = () => {
  return (
    <>
      <Wrapper>
        TO JEST MOJE MENU<p> XXYY</p>
      </Wrapper>
    </>
  )
}
