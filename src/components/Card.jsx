import { AiFillGithub } from "react-icons/ai";

export default function Card({ item }) {
    return (
        <a style={{ position: "relative", margin: "20px", display: "block", textDecoration: "none", color: "inherit" }} className={`${item.class} card`} href={item.deployedLink} target='_blank'>
            <h3 style={{ 
                position: "absolute", 
                bottom: "0", 
                left: "0", 
                backgroundColor: "white", 
                padding: "10px", 
                borderRadius: "5px", 
                outline: "2px solid black",
                margin: "0", 
            }}>
                {item.name}
                <a className="Logos" href={item.githubLink} target='_blank'>
                    <AiFillGithub />
                </a>
            </h3>

        </a>
    )
}