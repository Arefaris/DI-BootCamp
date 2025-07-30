import type { HeadingProps } from "../types"
import type { ReactElement } from "react"

const Heading = ({title, subtitle}: HeadingProps): ReactElement => {

    return (
        <>
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </>
    )
}

export default Heading