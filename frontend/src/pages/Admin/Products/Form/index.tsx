import './styles.css';

const Form = () => {
  return (
    <div className="product-crud-container">
      <div className="base-card product-crud-form-card">
        <h1 className="product-crud-form-title">Dados do produto</h1>

        <form action="">
          <div className="row">
            <div className="col-lg-6">
              <input
                type="text"
                className="form-control base-input mb-5"
                placeholder="Nome do produto"
              />
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
          <div>
            <button className="btn btn-outline-danger"> Cancelar</button>
            <button className="btn btn-primary">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
