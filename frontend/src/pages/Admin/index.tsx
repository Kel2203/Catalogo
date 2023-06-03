import Navbar from "./Navbar";
import './styles.css';
const Admin = () => {
    return (
        <div className="adimin-container">
            <Navbar />
            <div className="admin-content">
                <h1>Admin content</h1>
            </div>
        </div>
    );
}

export default Admin;