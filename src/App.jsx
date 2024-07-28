import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css'
import Homepage from './components/homepage'
import './bootstrap-5.1.3-dist/bootstrap-5.1.3-dist/css/bootstrap.css'
import Layout from './components/layout';

// const darkTheme = createTheme({
//   palette: {
//     mode: 'light',
//   },
// });

function App() {


  return (
    <>
      {/* <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <main>This app is using the dark mode</main> */}



      <Layout>
        <Homepage />
      </Layout>




      {/* </ThemeProvider > */}
    </>
  )
}





export default App;
