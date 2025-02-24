import React, { useReducer } from "react";
import PageTitle from "../PageTitle";

const reducer = (state, action) => {
  //State é count: 0 e showTxt: true, e p Action são as ações que o dispatch vai enviar
  switch (action.type) {
    case "Increment":
      //return state.count + 1
      //Se deixa da forma acima, usando só o state.count, vamos sobrescrever o showTxt, pois o state retorna tudo do estado
      return { ...state, count: state.count + 1 };
    //...state mantém tudo do state do jeito que está e muda apenas o COUNT
    case "showTxt":
      return { ...state, showTxt: !state.showTxt };
    case "IncrementAndShowTxt":
      return { ...state, count: state.count + 1, showTxt: !state.showTxt };
    //Os dois casos/ações ao mesmo tempo
    case "resetActions":
      return { count: 0, showTxt: true };
    //Ação de reset
    default:
      return "This Action doens't exist";
  }
};

const UseReducer = () => {
  // o reducer, dentro do useReducer ja recebe o state e action.
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showTxt: true,
  });
  //state (Todos os estados), dispatch (O que vamos mandar fazer, a action)
  // const [count, setCount] = useState(0);
  // const [showTxt, setShowTxt] = useState(true);

  const handleClick = () => {
    // dispatch({ type: "Increment" });
    // dispatch({ type: "showTxt" });
    dispatch({ type: "IncrementAndShowTxt" });

    // setShowTxt(!showTxt);
  };
  const resetBtn = () => {
    dispatch({ type: "resetActions" });
  };
  return (
    <div className="useReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes (Utilizar com 2 ou mais estados)"
      />
      <div className="center">
        <span className="text">{state.showTxt && "Use Reducer"}</span>
        {/* Para aparecer e sumir, o showtxt precisa ser adicionadoa assim junto a string */}
        <span className="text red">{state.count}</span>
        <div>
          <button className="btn" onClick={handleClick}>
            Click
          </button>
          <button className="btn" onClick={resetBtn}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
