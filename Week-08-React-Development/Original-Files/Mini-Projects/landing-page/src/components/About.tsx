import React from "react";
import "./About.css"

interface AboutProps {
    icon: React.ReactNode,
    title: string;
    info: string;
    backColor?: string
}

const About = ({icon, title, info, backColor}: AboutProps) => {
    
    return (
        <>
            <div className={`content ${backColor}`} >
                    <div className="icon">
                        {icon}
                    </div>
                    <div className="info">
                        <h3>{title}</h3>
                        <p>
                            {info}
                        </p>
                    </div>
            </div>
        </>)
}

export default About