import React, { memo } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Page/Header/Header'

const App = memo(() => {
  return (
    <>
      <Header />
      {/* <Routes>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </Routes> */}
    </>
  )
})

export default App