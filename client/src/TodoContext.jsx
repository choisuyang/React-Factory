import React, { useReducer, useContext, useRef } from "react";

const initialTodos = [
  {
    id: 1,
    text: "프로젝스생성하기",
    done: true,
  },
  {
    id: 2,
    text: "two",
    done: false,
  },
  {
    id: 3,
    text: "프로젝스생성하기33",
    done: false,
  },
];

function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) => (todo.id === action.id ? { ...todo, done: !todo.done } : todo));
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = React.createContext();
const TodoDispatchContext = React.createContext();
const TodoNextInContext = React.createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextInd = useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextInContext.Provider value={nextInd}>{children}</TodoNextInContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}

export function useTodoNextInd() {
  const context = useContext(TodoNextInContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}
