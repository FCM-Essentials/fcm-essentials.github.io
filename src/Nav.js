import "./Nav.css"
import logo from './assets/logo.png';

const navPoints = [
    [
        "Download",
        "/download"
        
    ],
    [
        "About",
        "/about"
    ],
    [
        "Discord",
        "https://discord.gg/MZr5KpdneD"
    ]
]

function Nav({ redirect }) {
    return (
        <>
            <div id="nav">
                <img src={logo} alt="fcm logo" id="nav-logo"></img>
                <div id="nav-points">
                    {
                        navPoints.map(([title, link], index) => (
                            <div key={index} className="nav-point" onClick={() => redirect(link)}>
                                {title}
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Nav