const Inputs = (props) => {
    return (
      <>
        <section>
          <p>Ingrese usuario y contraseña</p>
          <div>
            <h4>Nombre:</h4>
            <input
              type="text"
              placeholder="Ingrese usuario"
              onChange={(e) => props.setNames(e.target.value)}
            />
            <h4>Contraseña:</h4>
            <input
              type="password"
              placeholder="Ingrese contraseña"
              onChange={(e) => props.setPassword(e.target.value)}
            />
          </div>
        </section>
      </>
    );
  };
  export default Inputs;