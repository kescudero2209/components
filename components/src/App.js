import { useState } from "react";
import Inputs from "./components/Inputs";
import Buttons from "./components/Buttons";

function App() {
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  return (
    <>
      <section>
        <h1>Estado de los componentes y eventos</h1>
        <Inputs setPassword={setPass} setNames={setName} />
        {pass === "252525" && <Buttons text="Ingresar" />}
        {name === "" ? (
          <p>Todos los campos son obligatorios</p>
        ) : (
          pass === "" && <p>Todos los campos son obligatorios</p>
        )}
      </section>
    </>
  );
}
export default App;