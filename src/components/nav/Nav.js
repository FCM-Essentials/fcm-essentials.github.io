import "./Nav.css"
import logo from '../../assets/logo.png';
import { Menu } from "lucide-react";

const navPoints = [
    [
        "Projects",
        "/projects"
    ],
    [
        "Downloads",
        "/downloads"
        
    ],
    [
        "About",
        "/about"
    ],
    [
        "Discord",
        "https://discord.gg/MZr5KpdneD"
    ],
    [
        "Essentials",
        "/essentials"
    ]
]

function Nav({ redirect }) {
    function toggleMenu() {
        document.getElementById("nav-menu-bg").classList.toggle("nav-hide")
    }

    return (
        <>
            <div id="nav">
                <img src={logo} alt="fcm logo" id="nav-logo" onClick={() => redirect("/")}></img>
                <div id="nav-points">
                    {
                        navPoints.map(([title, link], index) => (
                            <div key={index} className="nav-point" onClick={() => redirect(link)}>
                                {title}
                            </div>
                        ))
                    }
                </div>
                <div id="nav-hamburger" onClick={() => toggleMenu()}>
                    <Menu size={36} className="clickable"></Menu>
                </div>
                <div id="nav-menu-bg" className="nav-hide">
                    <div id="nav-menu">
                        {
                            navPoints.map(([title, link], index) => (
                                <div key={index} className="nav-menu-point" onClick={() => { toggleMenu(); redirect(link); }}>
                                    {title}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav