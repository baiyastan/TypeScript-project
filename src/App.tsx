import React, { useState } from "react";
import "./App.css";
import Heading from "./Components/Heading";
import Section from "./Components/Section";
import About from "./Components/About";
import Counter from "./Components/Counter";
import { TodoList } from "./Components/TodoList";
import { ITodo } from "./types/data";

function App() {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = () => {
    if (text !== "") {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: text,
          completed: false,
        },
      ]);
      setText("");
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addTodo();
    }
  };

  const removeTodo = (id: number): void => {};

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;

        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };

  return (
    <div className="App">
      <Heading title={"Hi Kamila"} isActive={true} />
      <Section text={"My best course Okurmen"}>
        Tell me about Okurmen
        <div>Hi Islam, How old are you Islam</div>
      </Section>
      <About firstName={"Emir"} lastName={"Sharshenbaev"} age={16} />
      <Counter click={setCount}>
        <h1>Count: {count}</h1>
      </Counter>
      <input value={text} onChange={(e) => setText(e.target.value)} onKeyDown={handleKeyDown} type="text" />
      <button onClick={addTodo}>add</button>
      <br></br>
      <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
