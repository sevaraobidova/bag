import { Typography } from '@mui/material'
import './App.css'
import Button from './components/Common/Button'
import Header from './components/Layout/Header'


function App() {

  return (
    <>
     <Header/> 
    <Button btnText='Click me' customStyle='transparent' />
    <Typography  variant='body1'> hellolar</Typography>
    <Typography variant='h4'>hello h1</Typography>
    <h1>hello</h1>
    </>
  )
}

export default App
