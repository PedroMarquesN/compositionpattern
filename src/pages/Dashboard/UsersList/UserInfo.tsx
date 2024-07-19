import { FC } from "react";
import { Info } from "../../styles"

interface UserInfoProps {
    label: string;
    value: string;
}

export const UserInfo1:FC<UserInfoProps> = ({ label, value }) => {
    return(
        <Info>
            <h3>{label}</h3>
            <p>{value}</p>
        </Info>
    )
}