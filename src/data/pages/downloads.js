
const data = {
    title: "Downloads",
    path: "/downloads",
    content: ((redirect) => <>
        <h1>Download our Stuff</h1>
        <h2>FCM Essentials</h2>
        <p><ol>
            <li onClick={() => redirect("https://modrinth.com/mod/fcm-essentials")} className="clickable">Modrinth</li>
            <li onClick={() => redirect("https://www.curseforge.com/minecraft/mc-mods/fcm-essentials")} className="clickable">CurseForge</li>
        </ol></p>
    </>)
}

export default data