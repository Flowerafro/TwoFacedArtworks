import React from 'react'
import Layout from './components/Layout'
import About from './components/About'
import Work from './components/Work'
import ArtWork from './components/ArtWork'
import Clients from './components/Clients'
import ClientWork from './components/ClientWork'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/style.scss'

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Work/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/ArtWork" element={<ArtWork/>}></Route>
          <Route path="/ArtWork/:slug" element={<ArtWork/>}></Route>
          <Route path="/Clients" element={<Clients/>}></Route>
          <Route path="/ClientWork" element={<ClientWork/>}></Route>
          <Route path="/ClientWork/:slug" element={<ClientWork/>}></Route>
        </Routes>
      </Layout>
    </>
  )
}

export default App
