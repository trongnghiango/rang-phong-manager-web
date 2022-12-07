import axios from 'axios';
import environment from 'environment';
import { IUser } from 'state/interfaces/user.interface';

export const getUsers = async (): Promise<IUser[]> => {
  const response = await axios.get(environment.app.users);

  return response.data;
};

export const getUser = async (id: string): Promise<IUser> => {
  const url = environment.app.users;
  const params = { id };
  console.log({url})
  const response = await axios.get(url, {params});
console.log('Res:', response.data)
  return response.data;
};
