import './styles.css';

const Form = () => {
  return (
    <div className="product-crud-container">
      <div className="base-card product-crud-form-card">
        <h1 className="product-crud-form-title">Dados do produto</h1>

        <form action="">
          <div className="row">
            <div className="col-lg-6 product-crud-inputs-left">
                <div className="margin-bottom-30">
                <input
                type="text"
                className="form-control base-input mb-5"
                placeholder="Nome do produto"
              />
                </div>
                <div className="margin-bottom-30">
                <input
                type="text"
                className="form-control base-input mb-5"
                placeholder="Nome do produto"
              />
                </div> 
                <div>
                <input
                type="text"
                className="form-control base-input mb-5"
                placeholder="Nome do produto"
              />
                </div>
             
              <select className="form-control mb-5">
                <option value="1">Livros</option>
                <option value="2">Computadores</option>
                <option value="3">Eletrônicos</option>
              </select>
              <input type="text" className="form-control" placeholder="Preço" />

              <div className="col-lg-6">
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={10}
                  className="form-control base-input mb-5"
                  placeholder="Descrição"
                ></textarea>
                <input
                  type="text"
                  className="form-control mb-5"
                  placeholder="Imagem do produto"
                />
              </div>
            </div>
          </div>
          <div className='product-crud-buttons-container'>
            <button className="btn btn-outline-danger"> CANCELAR</button>
            <button className="btn btn-primary text-white">SALVAR</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
