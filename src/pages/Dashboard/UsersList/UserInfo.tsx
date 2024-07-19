import { FC } from "react";
import { Info } from "../../styles"

interface UserInfoProps {
    label: string;
    value: string;
    selected: boolean
}

export const UserInfo1:FC<UserInfoProps> = ({ label, value, selected }) => {
    return(
        <Info selected={selected}>
            <h3>{label}</h3>
            <p>{value}</p>
        </Info>
    )
}