import Component from "./Component"

function List() {
    return (
        <div id="menu-list-conatiner">
            <ul>
                <Component
                name={"Home"}
                url={"/"}
                />
                <Component
                name={"Project"}
                url={"/project"}
                />
                <Component
                name={"Repository"}
                url={"/repository"}
                />
            </ul>
        </div>
    )
}

export default List