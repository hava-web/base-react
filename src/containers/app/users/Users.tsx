import React, { useEffect } from 'react';
import withAuthenticate from 'hoc/withAuthenticate';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Input from 'components/input/Input';
import { Button, Label, Form } from 'semantic-ui-react';
import { UserInput } from 'models/users.model';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store';
import {
  createUserAction,
  userListAction,
} from 'store/features/users/usersSlice';
import UserList from './UserList';

function Users() {
  const state = useSelector((state: RootState) => state);
  const { users } = state.users;
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<UserInput>({
    defaultValues: {
      name: '',
      job: '',
    },
  });
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(userListAction());
  }, [dispatch]);
  const onSubmit: SubmitHandler<UserInput> = (data: UserInput) => {
    dispatch(createUserAction(data));
    reset();
  };

  return (
    <div>
      <h1>This is my user list</h1>
      <Form onSubmit={handleSubmit(onSubmit)} className="formInput">
        <Controller
          name="name"
          control={control}
          rules={{ required: 'Name is required' }}
          render={({ field }) => (
            <div>
              <Label>Name</Label>
              <Input {...field} ref={null} />
              {errors.name && <span>{errors.name.message}</span>}
            </div>
          )}
        />
        <br />
        <Controller
          name="job"
          control={control}
          rules={{ required: 'Job is required' }}
          render={({ field }) => (
            <div>
              <div>
                <Label>Job</Label>
                <Input {...field} ref={null} />
                {errors.job && <span>{errors.job.message}</span>}
              </div>
            </div>
          )}
        />
        <br />
        <Button color="facebook" type="submit">
          Create
        </Button>
      </Form>
      <UserList users={users} />
    </div>
  );
}

export default withAuthenticate(Users);
