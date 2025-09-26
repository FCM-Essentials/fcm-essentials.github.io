import Nav from './Nav';
import './Page.css'

function Page({ children, redirect }) {
    console.log("Page rendered", { children, redirect });
    return <>
        <title></title>
        <Nav redirect={redirect}></Nav>
        <div id="page">
            {children}
        </div>
    </>
}

export default Page;