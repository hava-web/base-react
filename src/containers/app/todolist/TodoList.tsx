import React, { useState } from 'react';
import withAuthenticate from 'hoc/withAuthenticate';
import Input from 'components/input/Input';
import Button from 'components/button/Button';
import {
  addTodoAction,
  deleteTodo,
  updateCompleted,
  // eslint-disable-next-line import/named
  updateTodoName,
} from 'store/features/todo/todoSlice';
import { useAppDispatch, useAppSelector } from 'store/store-hooks';
import { v4 as uuidV4 } from 'uuid';
import './TodoList.css';
import { Checkbox } from 'semantic-ui-react';

function TodoList() {
  const [todo, setTodo] = useState('');
  const [editId, setEditId] = useState('');
  const [editValue, setEditValue] = useState('');
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.todo);
  const list = state.todoList;
  const handleTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  const handleAddTodo = () => {
    dispatch(
      addTodoAction({
        id: uuidV4(),
        name: todo,
        completed: false,
      }),
    );
    setTodo('');
  };

  const handleCompleted = (id: string) => {
    dispatch(updateCompleted(id));
  };

  const handleEdit = (id: string) => {
    setEditId(id);
    const todo = list.find((todo) => todo.id === id);
    if (todo) {
      setEditValue(todo.name);
    }
  };

  const handleEditChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) => {
    setEditValue(e.target.value);
  };

  const cancelEdit = () => {
    setEditId('');
  };

  const handleUpdateTodo = (id: string) => {
    dispatch(
      updateTodoName({
        id,
        name: editValue,
      }),
    );
    setEditId('');
  };

  const handleDelete = (id: string) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div>
      <h1>This is my todo list</h1>
      <div>
        <Input onChange={handleTodoChange} value={todo} />
        <Button margin={true} onClick={handleAddTodo}>
          Add
        </Button>
      </div>
      <ul className="list">
        {list.map((item) => (
          <div key={item.id} className="todo_list">
            {editId === item.id ? (
              <>
                <div className="">
                  <Input
                    value={editValue}
                    onChange={(e) => handleEditChange(e, item.id)}
                  />
                </div>
                <div className="todo-buttons">
                  <Button color="vk" onClick={cancelEdit}>
                    Cancel
                  </Button>
                  <Button
                    margin={true}
                    onClick={() => handleUpdateTodo(item.id)}
                  >
                    Update
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div className="todo_list">
                  <li className="todo-name">Todo: {item.name}</li>
                  <Checkbox
                    onClick={() => handleCompleted(item.id)}
                    checked={item.completed}
                  />
                </div>
                <div className="todo-buttons">
                  <Button color="vk" onClick={() => handleEdit(item.id)}>
                    Edit
                  </Button>
                  <Button margin={true} onClick={() => handleDelete(item.id)}>
                    Delete
                  </Button>
                </div>
              </>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default withAuthenticate(TodoList);
