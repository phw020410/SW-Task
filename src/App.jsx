import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import NotFound from './page/NotFound'
import DefaultPage from "./page/defaultPage"

function App() {
    return (
        <div id="page">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<DefaultPage 
                    content={<h1>Home Page</h1>}
                    />}/>

                    <Route path="/project" element={<DefaultPage
                    content={<h1>Project</h1>}
                    />}/>
                    
                    <Route path="/repository" element={<DefaultPage
                    content={<h1>Repository</h1>}
                    />}/>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App