# Project-DSCatalog



### [Project Spring - DSCatalog](http://https://project-ds-catalog.vercel.app)

 ## Back end


### 01. CRUD

![image](https://github.com/Kel2203/Project-DSCatalog/assets/78867830/49f028fc-0493-43a1-a35c-51f9fd6384ce)

 - Padrão DTO
 - CRUD completo
 - Tratamento de exceções
 - Postman (coleções, ambientes)
 - Dados de auditoria
 - Paginação de dados
 - Associações entre entidades (N-N)

### 2. Testes automatizados

 + TDD - Test Driven Development
   * JUnit
 + Spring Boot
   * Repositories
   * Services
   * Resources (web)
   *  Integração
   *   Mockito & MockBean


### 3. Validação e segurança
 - Modelo de dados de usuários e perfis
 - Validação com Bean Validation
 - Autenticação e autorização
+ Spring Security
    * OAuth 2.0
    * Token JWT
    * Autorização de rotas por perfil

### 4. Consultas ao banco de dados
 - SQL e JPQL
 - Projeção, restrição, escalares
 - Spring Data JPA

### 5. Docker, implantação, CI/CD
  - Imagens e Dockerfile
  - Instanciação de containers
 + CI/CD
   * Clever Cloud
   * Stage de homologação


   
  ## Front end
  
### 6. Layout e navegação
   + ReactJS
     * Criação de projeto
     * Estrutura do projeto
     * Componentes
     * Importações
   + Layout
     * HTML
     * CSS
     * Flexbox
     * Bootstrap
     * Responsividade
   + Rotas
     * React Router DOM
     * Rotas e links





   
   ![image](https://github.com/Kel2203/Project-DSCatalog/assets/78867830/e4a9a19c-1f97-4501-88bf-33fd40e36eb4)
   ![image](https://github.com/Kel2203/Project-DSCatalog/assets/78867830/4c8ae6c5-eff6-41bb-922d-426f32bd02a8)
   -----------------------
   ![image](https://github.com/Kel2203/Project-DSCatalog/assets/78867830/c3fdea14-5baa-43f5-a04d-3c1b810a105f)
   ![image](https://github.com/Kel2203/Project-DSCatalog/assets/78867830/f6bc86b7-7131-4140-a6c5-92546be8279c)

   ### 7. Integração com API
   - Props
   - Parâmetros de URL
   - Hierarquias (nesting)
   - Redirecionamentos
+ Integração com back end
  * Axios
  * React Hooks
  * useState
  * useEffect

| ROTA  | Página (componente)  |
| ------------ | ------------ |
| /  | Home  |
|  /products |  Catalog |
| /products/:productId  |  ProductDetails |
| /admin  |   Admin/Products (redirecionamento) |
|  /admin/auth/login |  Admin/Auth/Login |
|  /admin/products |  Admin/Products/List |
| /admin/products/create  |  Admin/Products/Form |
| /admin/products/:productId | Admin/Products/Form

 ### 8. Autenticação e autorização
   + Formulários
      * React Hook Form
      * Validação de formulário, expressões regulares
      * Mensagens de erro e estilização condicional
   + Login OAuth2
      * Interceptors
      * LocalStorage
      * Acesso a dados
      * JSON parse / stringify
   + Fluxos de autenticação e autorização
       * Rotas protegidas
       * Redirecionamentos de login e de autorização
       * Redirecionamentos especiais para experiência do usuário (UX)
       * Permissionamento em nível de rotas
       * Restrição de conteúdo (UI) baseada em perfil de usuário

### 9. CRUD, paginação, filtros
 - CRUD responsivo
 - Listagem de dados
 - Formulário
 - Inserção, edição e remoção
 - Comunicação entre componentes com eventos (padrão observer)
   + React Hook Form
    * Integração de libs com React Hook Form
    * React Select
    * React Currency Input Field
    * Outras libs
 - React Pagination
 - React Toastfy
 - Filtragem de dados
 - Controle de referência com hook useCallback

13. Testes e implantação


