import './App.css';
import Page from './Page';
import pages from './data/getPages'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"

console.log(pages)


function RedirectWrapper({ children }) {
    const navigate = useNavigate()
    const redirect = (target) => {
        const path = target.startsWith("/") ? target : `/${target}`
        if (target.startsWith("http")) {
            window.open(target, "_blank")
        } else {
            navigate(path)
        }
    }

    return <Page redirect={redirect}>{children}</Page>
}

function App() {
    
    return <>
        <Router>
            <Routes>
                {
                    pages.map((page, index) => (

                        <Route key={index} path={page.path} element={
                            <RedirectWrapper>
                                {page.content}
                            </RedirectWrapper>
                        } />

                    ))
                }
            </Routes>
        </Router>
    </>
    
}

export default App;
