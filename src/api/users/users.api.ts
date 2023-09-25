import axios from 'axios';
import CONFIG from 'config';
import { UserInput } from 'models/users.model';

export const showUsers = async () => {
  let value;
  await axios
    .get(`${CONFIG.REACT_APP_BASE_URL}/api/test/user`)
    .then((res) => {
      value = res.data;
    })
    .catch((error) => console.log(error));
  return value;
};

export const createUser = async (data: UserInput) => {
  let value;
  await axios
    .post(`${CONFIG.REACT_APP_BASE_URL}/api/test/user`, {
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
    .put(`${CONFIG.REACT_APP_BASE_URL}/api/test/user/${data.id}`, {
      name: data.name,
      job: data.job,
    })
    .then((res) => {
      value = res.data;
    })
    .catch((err) => console.log(err));
  return value;
};

export const deleteUser = async (id: string) => {
  let value;
  await axios
    .delete(`${CONFIG.REACT_APP_BASE_URL}/api/test/user/${id}`)
    .then((res) => {
      value = res.data;
    })
    .catch((err) => console.log(err));
  return value;
};
