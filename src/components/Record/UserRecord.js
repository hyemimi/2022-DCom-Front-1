import React from "react"
import { useThemeColor } from "../../Context/theme";

const UserRecord = () => {
    const theme = useThemeColor();


    return (
        <>
            <h1 style={{fontSize: '1.5rem', color: theme.point}}> 000 님의 총 집중시간은 ? </h1>
        </>
    )
}
export default UserRecord