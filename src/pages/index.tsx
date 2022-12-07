import React, { useEffect, useState } from 'react';
import { MainLayout } from '../components/shared/main-layout/MainLayout';
import { IndexPage } from '../components/pages/index-page/IndexPage';
import { GetStaticProps, NextPage } from 'next';
import { getUsers } from 'domains/users/user.services';
import { useStateValue } from 'state/AppProvider';
import { IUser } from 'state/interfaces/user.interface';
import NoneLayout from 'components/shared/layouts/none-layout';


interface IProps {
  users: IUser[];
}

function Index(props: IProps) {
  const { state, dispatch } = useStateValue();
  const { teeth } = state;
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {

    const fetchAPI = async () => {
      const users: IUser[] = await getUsers();
      console.log('IndexPage Props:::', users);
      setUsers(users)
    }
    fetchAPI();
  }, [])

  return (
    <IndexPage data={users} />
  );
}

Index.getLayout = function getLayout(page: React.ReactElement) {
  return <NoneLayout>{page}</NoneLayout>;
};

/**
 * ts-prune-ignore-next
 */
//  export const getStaticProps: GetStaticProps = async () => {
//   // TODO: how to handle errors
//   const users: IUser[] = await getUsers();
//   console.log('IndexPage Props:::', {users})
//   return { props: { users } };
// };

// ts-prune-ignore-next
export default Index;
