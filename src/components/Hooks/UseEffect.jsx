import { useEffect, useState } from "react";
import PageTitle from "../PageTitle";
import SectionTitle from "../SectionTitle";

const UseEffect = () => {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);

  const calcFatorial = (num) => {
    const n = parseInt(num);
    if (n === 0) return 1;
    if (n < 0) return "Não existe!";
    return calcFatorial(n - 1) * n;
  };

  useEffect(
    //Efeito colateral
    function () {
      setFatorial(calcFatorial(number));
    },
    [number] // Só aciona se acontecer a mudança no NUMBER
  );

  useEffect(
    function () {
      if (fatorial > 1000) {
        document.title = "Eita!";
      } else {
        document.title = "React Use Effect!";
      }
    },
    [fatorial] // Só aciona se acontecer a mudança no FATORIAL
  );

  const [status, setStatus] = useState("?");
  const [num, setNum] = useState(0);

  useEffect(
    function () {
      setStatus(num % 2 === 0 ? "Par" : "Ímpar");
    },
    [num] //Quando o NUM mudar, ele aciona o useEffect
  );

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle={
          <>
            Permite executar efeitos colaterais em componentes.
            <br /> Efeitos colaterais incluem qualquer operação que interaja com
            o mundo fora do React, como:
            <br /> + Buscar dados de uma API.
            <br /> + Atualizar o DOM manualmente.
            <br /> + Registrar ou remover assinaturas (event listeners, timers,
            etc.).
            <br /> + Sincronizar dados entre componentes ou com um serviço
            externo.
          </>
        }
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">Fatorial</span>
        <span className="text red">{fatorial}</span>
        <input
          type="number"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
          className="input"
        />
      </div>
      <SectionTitle title="Exercício #02" />
      <div className="center">
        <span className="text">Status</span>
        <span className="text red">{status}</span>
        <input
          type="number"
          className="input"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UseEffect;
