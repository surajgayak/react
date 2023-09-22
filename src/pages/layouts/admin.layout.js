import "bootstrap";
import AdminNavbar from "../admin/components/navbar.component";
import AdminSidebar from "../admin/components/sidebar.component";
import { Outlet } from "react-router-dom";
import AdminFooter from "../admin/components/footer.component";

const AdminLayout = () => {
    // check wether logged in user 


    return (<>
        
        <AdminNavbar />

        <div id="layoutSidenav">
            
            <AdminSidebar />

            <div id="layoutSidenav_content">
                <main>
                    <Outlet />
                </main>
                
                <AdminFooter />
            </div>
        </div>
    </>)
}
export default AdminLayout;