const Parent = (props) => {

    if (props.children && props.admin === "123") {
        return props.children
    }

    console.log(props)
    return (
        <>
            <h2>Parent</h2>
        </>
    );
}

export default Parent;