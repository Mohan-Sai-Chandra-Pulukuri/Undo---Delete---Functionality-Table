import "./styles.css";
import { useEffect, useState } from "react";
const stack = [];
export default function App() {
  const [arr, setArr] = useState([
    { id: 1, name: "abc", occupation: "developer", age: 23 },
    {
      id: 2,
      name: "def",
      occupation: "consultant",
      age: 34,
    },
    {
      id: 3,
      name: "ghi",
      occupation: "manager",
      age: 45,
    },
    {
      id: 4,
      name: "jkl",
      occupation: "teacher",
      age: 56,
    },
  ]);
  const handleDelete = (row) => {
    stack.push(row);
    setArr(arr.filter((val) => val.id !== row.id));
    arr.sort((o1, o2) => o1.id - o2.id);
    console.log(stack);
  };
  const handleUndo = () => {
    console.log("Contains of Stack is ", JSON.stringify(stack));
    if (stack.length > 0) {
      tmp = [...arr, stack.pop()];
      tmp.sort((o1, o2) => o1.id - o2.id);
      setArr(tmp);
    }
  };
  return (
    <>
      <button onClick={(e) => handleUndo()}>Undo</button>
      <table>
        <thead>
          <th>id</th>
          <th>name</th>
          <th>occupation</th>
          <th>age</th>
        </thead>
        <tbody>
          {arr.map((val, index) => (
            <tr key={index}>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.occupation}</td>
              <td>{val.age}</td>
              <button onClick={(e) => handleDelete(val)}>Delete</button>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
