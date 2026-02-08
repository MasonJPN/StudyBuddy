import {Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Study from "./pages/Study"
import CardList from "./pages/CardList"
import FlashCardProvider from "./context/FlashCardContext"
import AddSetForm from "./pages/AddSetForm"
import Login from "./pages/Login"
import Quiz from "./pages/Quiz"
export default function App(){

  return (
   
    <FlashCardProvider >
    <NavBar />
<main>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/study/:setId" element={<Study />} />
      <Route path="/set/:setId" element={<CardList />}/>
      <Route path="/add" element={<AddSetForm />} />
      <Route path="/quiz/:setId" element={<Quiz />} />
    </Routes>
</main>
    <Footer />
    </FlashCardProvider>
    
  )
}