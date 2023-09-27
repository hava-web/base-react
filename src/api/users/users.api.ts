import axios from 'axios';
// import CONFIG from 'config';
import { UserInput } from 'models/users.model';

export const showUsers = async () => {
  let value;
  await axios
    .get(`https://650a7bc6dfd73d1fab086a20.mockapi.io/api/test/user`)
    .then((res) => {
      value = res.data;
    })
    .catch((error) => console.log(error));
  return value;
};

export const createUser = async (data: UserInput) => {
  let value;
  await axios
    .post(`https://650a7bc6dfd73d1fab086a20.mockapi.io/api/test/user`, {
      name: data.name,
      job: data.job,
    })
    .then((res) => {
      value = res.data;
    })
    .catch((err) => console.log(err));
  return value;
};

export const updateUser = async (data: any) => {
  let value;
  await axios
    .put(
      `https://650a7bc6dfd73d1fab086a20.mockapi.io/api/test/user/${data.id}`,
      {
        name: data.name,
        job: data.job,
      },
    )
    .then((res) => {
      value = res.data;
    })
    .catch((err) => console.log(err));
  return value;
};

export const deleteUser = async (id: string) => {
  let value;
  await axios
    .delete(`https://650a7bc6dfd73d1fab086a20.mockapi.io/api/test/user/${id}`)
    .then((res) => {
      value = res.data;
    })
    .catch((err) => console.log(err));
  return value;
};
