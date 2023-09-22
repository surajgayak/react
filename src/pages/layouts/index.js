import { Outlet } from "react-router-dom"
import { HomeMenu } from "../fe/components/menu.component"

const HomePageLayout = () =>{
    
    return (<>

        <HomeMenu />

        <Outlet />

    
    
    </>)
} 

export default HomePageLayout;