import Nav from '../nav/Nav';
import './Page.css'

function NewTab() {
	return (<>
		<div id="open-in-new">
			<div id="open-in-new-main">
				Open link in new tab?
				<div id="open-in-new-link">
					
				</div>
				<div id="open-in-new-buttons">
					<button className="open-in-new-button" id="open-in-new-yes" onClick={
                        () => window.open(document.getElementById("open-in-new-link").textContent, "_blank")
                        }>
						Open
					</button>
					<button className="open-in-new-button" id="open-in-new-no" onClick={
                        () => document.getElementById(document.getElementById("open-in-new").style.display = "none")
                        }>
						Close
					</button>
				</div>
			</div>
		</div>
	</>)
}

function Page({ children, redirect, title }) {
    document.title = title
    return <>
        <Nav redirect={redirect}></Nav>
        <div id="page">
            {children(redirect)}
        </div>
        <NewTab />
    </>
}

export default Page;