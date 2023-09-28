import React, { memo, useState } from 'react';
import './Users.css';
import Button from 'components/button/Button';
import { useDispatch } from 'react-redux';
import { deleteUserAction } from 'store/features/users/usersSlice';
import { AppDispatch } from 'store';
import {
  Header,
  Icon,
  Modal,
  Pagination,
  PaginationProps,
  Table,
  TableHeaderCell,
} from 'semantic-ui-react';
import { SingleUserState } from 'models/users.model';
import Input from 'components/input/Input';
import UserModal from './UserModal';

const UserList = ({ users }: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const [cancel, setCancel] = useState(false);
  const [userCancel, setUserCancel] = useState('');
  const [user, setUser] = useState();
  const [searchText, setSearchText] = useState('');
  const [activePage, setActivePage] = useState<any>(1);
  const filterUser = users.filter((users: SingleUserState) => {
    const lowerCaseName = users.name.toLowerCase();
    const lowerCaseJob = users.job.toLowerCase();
    const lowerCaseSearch = searchText.toLowerCase();
    return (
      lowerCaseName.includes(lowerCaseSearch) ||
      lowerCaseJob.includes(lowerCaseSearch)
    );
  });
  const dataPerPage = 5;
  const totalPages = Math.ceil(filterUser.length / dataPerPage);
  const startIndex = (activePage - 1) * dataPerPage;
  const endIndex = startIndex + dataPerPage;
  const userFind = user;
  const [open, setOpen] = useState(false);
  const status = open;

  const deleteUser = (id: string) => {
    setCancel(true);
    setUserCancel(id);
  };

  const handleDeleteUser = (id: string) => {
    dispatch(deleteUserAction(id));
    setCancel(false);
    setUserCancel('');
  };

  const handlePageChange = (
    e: React.MouseEvent<HTMLAnchorElement>,
    data: PaginationProps,
  ) => {
    const { activePage } = data;
    setActivePage(activePage);
  };
  const updateUser = (id: string) => {
    const userFind = users.find((user: SingleUserState) => user.id === id);
    if (userFind) {
      setUser(userFind);
    }
    setOpen(true);
  };
  const handleCancel = (open: boolean) => {
    setOpen(open);
  };
  return (
    <>
      <div className="flex my-2 mt-3">
        <h1 className="tittle-user w-full">
          <Icon name="users" />
          <div className="title">USER LIST</div>
        </h1>
        <Input
          icon={'search'}
          className="float-end"
          value={searchText}
          onChange={(e, { value }) => {
            setActivePage(1);
            setSearchText(value);
          }}
          placeholder="Search..."
        />
      </div>
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
            {filterUser.length !== 0 ? (
              <Table.Body>
                {filterUser
                  .slice(startIndex, endIndex)
                  .map((user: SingleUserState) => (
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
                            onClick={() => {
                              deleteUser(user.id);
                            }}
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
                <Modal open={cancel}>
                  <Header icon="archive" content="Confirm delete" />
                  <Modal.Content>
                    <p>Are you sure you want to delete user {userCancel} ?</p>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button color="red" onClick={() => setCancel(false)}>
                      <Icon name="remove" /> No
                    </Button>
                    <Button
                      color="green"
                      onClick={() => handleDeleteUser(userCancel)}
                    >
                      <Icon name="checkmark" /> Yes
                    </Button>
                  </Modal.Actions>
                </Modal>
              </Table.Body>
            ) : (
              <Table.Body>
                <Table.Row>
                  <TableHeaderCell
                    colSpan="4"
                    className="h-48 justify-items-center bg-slate-200"
                  >
                    <h1 className="text-center">
                      <Icon name="eye slash" />
                      USER NOT FOUND
                    </h1>
                  </TableHeaderCell>
                </Table.Row>
              </Table.Body>
            )}
            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan="4">
                  <div className="float-right">
                    <Pagination
                      defaultActivePage={1}
                      totalPages={totalPages}
                      boundaryRange={1}
                      siblingRange={1}
                      onPageChange={handlePageChange}
                    />
                  </div>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </div>
      ) : (
        <div className="display-loader">
          <span className="loader" />
        </div>
      )}
    </>
  );
};

export default memo(UserList);
