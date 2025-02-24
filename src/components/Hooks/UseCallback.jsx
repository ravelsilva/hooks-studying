import { useCallback, useState } from "react";
import PageTitle from "../PageTitle";
import UseCallbackButtons from "./UseCallbackButtons";

const UseCallback = () => {
  // useState cria o estado "count" e a função "setCount" para atualizá-lo
  const [count, setCount] = useState(0);

  // useCallback memoriza a função "inc" para evitar recriação desnecessária
  const inc = useCallback(
    (delta) => {
      setCount((curr) => curr + delta); // Atualiza o estado somando o valor "delta"
    },
    [setCount] // Dependências: essa função só será recriada se "setCount" mudar (o que raramente acontece)
  );

  return (
    <div className="useCallback">
      <PageTitle
        title="Hook UseCallback"
        subtitle="Retorna uma função memorizada!"
      />
      <div className="center">
        <span className="text">{count}</span>
        <UseCallbackButtons inc={inc} />
      </div>
    </div>
  );
};

export default UseCallback;
