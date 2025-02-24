import { useEffect, useRef, useState } from "react";
import PageTitle from "../PageTitle";
import SectionTitle from "../SectionTitle";

const UseRef = () => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");

  const count = useRef(0);
  const myInput1 = useRef(null);
  const myInput2 = useRef(null);

  const merge = (s1, s2) => {
    //Transformou o ss1 em um array
    return [...s1]
      .map(function (e, i) {
        return `${e}${s2[i] || ""}`; //Vai retornar o evento + o indice do evento 2
      })
      .join("");
  };

  useEffect(
    function () {
      count.current++;
      myInput2.current.focus();
    },
    [value]
  );

  useEffect(
    function () {
      count.current++;
      myInput1.current.focus();
    },
    [value2]
  );
  return (
    <div className="useRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{merge(value, value2)} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>
        <input
          type="text"
          className="input"
          value={value}
          ref={myInput1}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <SectionTitle title="Exercício #02" />
      <div className="center">
        <input
          type="text"
          className="input"
          value={value2}
          ref={myInput2}
          onChange={(e) => setValue2(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UseRef;
