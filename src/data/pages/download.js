
const data = {
    title: "Download",
    path: "/download",
    content: ((redirect) => <>
        <h1 onClick={() => redirect("https://modrinth.com/mod/fcm-essentials")} className="clickable">Modrinth</h1>
        <h1 onClick={() => redirect("https://www.curseforge.com/minecraft/mc-mods/fcm-essentials")} className="clickable">CurseForge</h1>
    </>)
}

export default data