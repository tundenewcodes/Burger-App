import React, { useState } from 'react'
import Layout from './components/layouts/layout'
import BurgerBuilder from './components/BurgerBuilder'
import CheckOut from './components/CheckOut/CheckOut'
import { Routes, Route } from 'react-router-dom'
//import ContactData from "./components/CheckOut/Contact-Data/ContactData"

const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<BurgerBuilder />}>
            <Route path='/checkout' element={<CheckOut />}>
              {' '}
            </Route>{' '}
          </Route>{' '}
          <Route index element={<BurgerBuilder />} />{' '}
        </Routes>{' '}
      </Layout>{' '}
    </div>
  )
}

export default App
