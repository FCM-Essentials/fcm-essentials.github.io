import './App.css';
import Page from './Page';
import pages from './data/getPages'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"

console.log(pages)

function RedirectWrapper({ children, title }) {
    const navigate = useNavigate()
    const redirect = (target) => {
        const path = target.startsWith("/") ? target : `/${target}`
        if (target.startsWith("http")) {
			document.getElementById("open-in-new-link").textContent = target
			document.getElementById("open-in-new").style.display = "block"
        } else {
            navigate(path)
        }
    }

    return <Page redirect={redirect} title={ title }>{children}</Page>
}

function App() {
    
    return <>
        <Router>
            <Routes>
                {
                    pages.map((page, index) => (

                        <Route key={index} path={page.path} element={
                            <RedirectWrapper title={page.title}>
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
