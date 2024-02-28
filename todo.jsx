import './styles.css';
import { useRef, useState } from 'react';

const newId = (() => {
  let id = 0;
  return () => id++;
})();
const INITIAL_TASKS = [
  { id: newId(), task: 'Walk the dog' },
  { id: newId(), task: 'Water the plants' },
  { id: newId(), task: 'Wash the dishes' },
];
export default function App() {
  let inputRef = useRef();
  const [list, setList] = useState(INITIAL_TASKS);

  function addToList() {
    if (list.includes(inputRef.current.value)) return;
    setList([...list, inputRef.current.value]);
    inputRef.current.value = '';
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (inputRef.current.value.trim() === '') return;
          setList([
            ...list,
            {
              id: newId(),
              task: inputRef.current.value.trim(),
            },
          ]);
        }}
      >
        <input
          aria-label={'add new tasks'}
          type='text'
          ref={inputRef}
          placeholder='Add your task'
        />
        <div>
          <button onClick={addToList}>Submit</button>
        </div>
      </form>
      {list.length === 0 ? (
        <div> No Tasks added </div>
      ) : (
        <ul>
          {list.map((ele) => (
            <li key={ele.id}>
              <span>{ele.task}</span>
              <button
                onClick={() => {
                  if (window.confirm('Are you sure?')) {
                    setList((prevList) =>
                      prevList.filter((l) => l.id != ele.id)
                    );
                  }
                }}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
