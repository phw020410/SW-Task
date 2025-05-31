import Content from "../content/Content"
import Menu from "../menu/Menu"

function DefaultPage({content}) {
    return (
        <>
            <Menu />
            <Content
            content={content}
            />
        </>
    )
}

export default DefaultPage