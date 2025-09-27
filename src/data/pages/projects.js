
const data = {
    title: "Our Projects",
    path: "/projects",
    content: ((redirect) => <>
        <h1>Our Projects</h1>
        <p>Check out our Released and In Progress projects</p>
        <br/>
        <h2>FCM Essentials</h2>
        <p>
            FCM Essentials is a minecraft mod compatible with Forge 1.8.9 and Fabric 1.21.8. It offers a variety of features
            designed to enhance your experience on FreeBuilds of the Housing gamemode on the <span onClick={() => redirect("https://hypixel.net/")} className="clickable">Hypixel</span> Minecraft Server.
            <br/>
            <br/>
            Features include:
            <ol>
                <li>Pro Tools selection Overlay</li>
                <li>Customizable Scoreboards (the entire Scoreboard, not just the 10 lines provided) and Bossbar for your own housing</li>
                <li>Built in Griefer Radar</li>
                <li>Endless customizable (FREE!) capes</li>
            </ol>
            <br/>
            Check out the Repository on <span onClick={() => redirect("https://github.com/fcmnetwork/FCM-Essentials")} className="clickable">Github</span> or download it in <span onClick={() => redirect('/download')} className="clickable">Downloads</span>
        </p>
    </>)
}

export default data