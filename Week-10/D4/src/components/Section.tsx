import type { ReactNode } from "react"

// ReactElement only react elements
// ReactNode includes alot, strings, element..etc
type SectionProps = {
    children: ReactNode;
    place: string;
}

// oldschool const Section: React.FC<SectionProps>
const Section = ({children, place}: SectionProps) => {
    return <>
        {children}
        {place}
        </>
}

export default Section