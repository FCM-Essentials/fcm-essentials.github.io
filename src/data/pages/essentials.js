

const data = {
    title: "Essentials",
    path: "/essentials",
    content: ((redirect) => <>
        <h1 onClick={() => redirect("/essentials/capes")} className="clickable">Cape Browser</h1>
    </>)
}

export default data