import './styles.css';

const Navbar = () => {
  return (
    <>
      <nav className="admin-nav-container navbar navbar-expand-md navbar-dark bg-primary main-nav">
        <div className="container-fluid">
          <ul>
            <li>
                <a href="link" className='admin-nav-item active'>
              <p>Produtos</p>
              </a>
            </li>
            <li>
                 <a href="link" className='admin-nav-item'>
                 <p>Categorias</p>
                 </a>
              
            </li>
            <li> <a href="link" className='admin-nav-item'>
            <p>Usuários</p>
            </a>
              
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
