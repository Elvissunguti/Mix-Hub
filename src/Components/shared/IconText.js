import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";


const IconText = ({ iconName, active, displayText, targetLink }) => {
    return (
        <Link to={targetLink} className="block">
        <div>
            <div>
                <Icon
                icon={iconName}
                color={active ? "white" : "gray" }
                fontSize={27}
                />
            </div>
            <div className={
                `${
                    active ? "text-white" : "text-gray-400"
                } text-sm font-semibold hover:text-white`
            } >
                {displayText}

            </div>
        </div>
        
        </Link>
    )
}
export default IconText;