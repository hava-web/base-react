import React, { memo, useState } from 'react';
import './Users.css';
import Button from 'components/button/Button';
import { useDispatch } from 'react-redux';
import { deleteUserAction } from 'store/features/users/usersSlice';
import { AppDispatch } from 'store';
import { Icon, Menu, Table } from 'semantic-ui-react';
// import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { SingleUserState } from 'models/users.model';
import UserModal from './UserModal';

const UserList = ({ users }: any) => {
  const dispatch = useDispatch<AppDispatch>();
  // const { handleSubmit, control, reset } = useForm();
  // const [editId, setEditId] = useState('');
  const [user, setUser] = useState();
  const userFind = user;
  const [open, setOpen] = useState(false);
  const status = open;

  const deleteUser = (id: string) => {
    dispatch(deleteUserAction(id));
  };

  const updateUser = (id: string) => {
    // setEditId(id);
    const userFind = users.find((user: SingleUserState) => user.id === id);
    if (userFind) {
      setUser(userFind);
    }
    setOpen(true);

    // Reset the form fields when switching to editing a different item
  };

  // const onSubmit: SubmitHandler<any> = (data: UserInput) => {
  //   dispatch(updateUserAction(data));
  //   setEditId('');
  // };

  const handleCancel = (open: boolean) => {
    setOpen(open);
  };

  return (
    <>
      <h1>This is my user list</h1>
      {users.length ? (
        <div>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign="center">ID</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">NAME</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">JOB</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">ACTION</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {users.map((user: SingleUserState) => (
                <Table.Row key={user.id}>
                  <Table.Cell textAlign="center">{user.id}</Table.Cell>
                  <Table.Cell textAlign="center">{user.name}</Table.Cell>
                  <Table.Cell textAlign="center">{user.job}</Table.Cell>
                  <Table.Cell textAlign="center" width={2}>
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
                  </Table.Cell>
                </Table.Row>
              ))}
              <UserModal
                status={status}
                user={userFind}
                handleCancel={handleCancel}
              />
            </Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan="4">
                  <Menu floated="right" pagination>
                    <Menu.Item as="a" icon>
                      <Icon name="chevron left" />
                    </Menu.Item>
                    <Menu.Item as="a">1</Menu.Item>
                    <Menu.Item as="a">2</Menu.Item>
                    <Menu.Item as="a">3</Menu.Item>
                    <Menu.Item as="a">4</Menu.Item>
                    <Menu.Item as="a" icon>
                      <Icon name="chevron right" />
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
};

export default memo(UserList);
