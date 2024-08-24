import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css'
import Homepage from './components/homepage'
import './bootstrap-5.1.3-dist/bootstrap-5.1.3-dist/css/bootstrap.css'
import Layout from './components/layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MacContext from './context/context';
import { useState } from 'react';


function App() {

  const [showModal, setShowModal] = useState(false)


  return (
    <>

      <MacContext.Provider value={{ showModal, setShowModal }}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='/' element={<Homepage />} />
              {/* <Route path='/' /> */}
            </Routes>
          </Layout>
        </BrowserRouter>
      </MacContext.Provider>

    </>
  )
}





export default App;
