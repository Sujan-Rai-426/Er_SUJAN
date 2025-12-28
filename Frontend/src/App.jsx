import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Navbar, Footer, } from './components/Components_Import'
import Home from './pages/Home'
import Interactive_Background from './utils/Interactive_Background'
import Parent_API_Provider from './context/Parent_API_Provider'
import { Analytics } from "@vercel/analytics/react"

function App() {

    return (

        <Parent_API_Provider>
            <BrowserRouter>
                <div>
                    <Navbar />

                    <Interactive_Background>
                        <main className='container'>
                            <Routes>
                                <Route exact path='/' element={ <Home /> } />
                            </Routes>
                        </main>
                    </Interactive_Background>

                    <Footer/>

                    <Analytics />

                </div>
            </BrowserRouter>
        </Parent_API_Provider>

    )
}

export default App
