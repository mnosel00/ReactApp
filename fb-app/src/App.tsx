import { Posts } from '../src/Components/routes/Posts/posts'
import { Home } from '../src/Components/routes/Home/home'
import { FC } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { GlobalStyle } from './styledHelpers/global'
import { Layout } from './Components/Common/Layout'

export const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <BrowserRouter>
          <img src='' alt='' />

          <div>
            <Link to='posts'>Posts</Link>
            <Link to='./'>Home</Link>
          </div>
          <Routes>
            <Route path='posts' element={<Posts />} />

            <Route index element={<Home name='dssdsds' age={21} arr={[1, 2, 3]} />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  )
}
