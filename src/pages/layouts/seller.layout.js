import "bootstrap";

import { Outlet } from "react-router-dom";
import SellerFooter from "../seller/components/footer.component";
import SellerNavbar from "../seller/components/navbar.component";
import SellerSidebar from "../seller/components/sidebar.component";
const SellerLayout = () => {
    // check wether logged in user 

    return (<>
        
        <SellerNavbar />

        <div id="layoutSidenav">
            
            <SellerSidebar />

            <div id="layoutSidenav_content">
                <main>
                    <Outlet />
                </main>
                
                <SellerFooter />
            </div>
        </div>
    </>)
}
export default SellerLayout;