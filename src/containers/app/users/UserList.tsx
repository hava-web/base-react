import React, { memo, useState } from 'react';
import './Users.css';
import Button from 'components/button/Button';
import { useDispatch } from 'react-redux';
import {
  deleteUserAction,
  updateUserAction,
} from 'store/features/users/usersSlice';
import { AppDispatch } from 'store';
import { Form, Label } from 'semantic-ui-react';
import Input from 'components/input/Input';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { SingleUserState, UserInput } from 'models/users.model';

const UserList = ({ users }: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const { handleSubmit, control, reset } = useForm();
  const [editId, setEditId] = useState('');

  const deleteUser = (id: string) => {
    dispatch(deleteUserAction(id));
  };

  const updateUser = (id: string) => {
    setEditId(id);
    reset(); // Reset the form fields when switching to editing a different item
  };

  const onSubmit: SubmitHandler<any> = (data: UserInput) => {
    dispatch(updateUserAction(data));
    setEditId('');
  };

  const handleCancel = () => {
    setEditId('');
    reset(); // Reset the form fields when cancelling the edit
  };

  return (
    <>
      <h1>This is my user list</h1>
      {users.length ? (
        <div>
          <ul>
            {users.map((user: SingleUserState) => (
              <li key={user.id} className="item">
                {editId === user.id ? (
                  <div>
                    <Form onSubmit={handleSubmit(onSubmit)} className="form">
                      <Controller
                        name="name"
                        control={control}
                        rules={{ required: 'Name is required' }}
                        defaultValue={user.name}
                        render={({ field }) => (
                          <>
                            <Label className="label">Name</Label>
                            <Input
                              className="input"
                              {...field}
                              value={field.value || ''}
                              ref={null}
                            />
                            {/* {errors.name && <span>{errors.name.message}</span>} */}
                          </>
                        )}
                      />
                      <Controller
                        name="job"
                        control={control}
                        rules={{ required: 'Job is required' }}
                        defaultValue={user.job}
                        render={({ field }) => (
                          <>
                            <Label className="label">Job</Label>
                            <Input
                              className="input"
                              {...field}
                              value={field.value || ''}
                              ref={null}
                            />
                            {/* {errors.job && <span>{errors.job.message}</span>} */}
                          </>
                        )}
                      />
                      <Controller
                        name="id"
                        control={control}
                        defaultValue={user.id}
                        render={({ field }) => <Input type={'hidden'} />}
                      />
                      <div className="button">
                        <Button type="submit" color="linkedin">
                          Edit
                        </Button>
                        <Button color="youtube" onClick={handleCancel}>
                          Cancel
                        </Button>
                      </div>
                    </Form>
                  </div>
                ) : (
                  <div className="user">
                    <div className="user infor">
                      <div className="">{user.id}</div>
                      <div className="">{user.name}</div>
                    </div>
                    <div className="button user">
                      <Button
                        color="facebook"
                        onClick={() => updateUser(user.id)}
                      >
                        Update
                      </Button>
                      <Button
                        color="youtube"
                        onClick={() => deleteUser(user.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
};

export default memo(UserList);
