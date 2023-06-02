import './styles.css';
import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
const buttonIcon = () => {
    return (
 

    <div className="btn-container">
    <button className="btn btn-primary">
    <h6>
       INICIE AGORA A SUA BUSCA
    </h6>
   </button>
    <div className='btn-icon-container'>
      <ArrowIcon />
    </div>

    </div> 
    
    );
    }

    export default buttonIcon;