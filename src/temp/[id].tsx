
// import React from 'react';
// import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
// import { MainLayout } from '../components/shared/main-layout/MainLayout';
// import { getFilm, getFilms } from '../domains/films/films.services';
// import { FilmPage } from '../components/pages/film-page/FilmPage';
// import { getUser, getUsers } from 'domains/users/user.services';
// import { ThreeDViewerPage } from 'components/pages/threedviewer-page/ThreeDViewerPage';
// import { IUser } from 'state/interfaces/user.interface';
// import { ParsedUrlQuery } from 'querystring';
// import { users } from 'pages/api/users';

// interface IProps {
//   user?: IUser;
//   errors?: string;
// }

// const ThreedRoute: NextPage<IProps> = ({user, errors}) => {
//   console.log({user, errors})
//   return (
//     <MainLayout title={`${user ? user.displayName : 'Render Orth Detail'} | Next.js + TypeScript Example`}>
//       <ThreeDViewerPage
//         data={user}
//         errors={errors}
//       />
//     </MainLayout>
//   );
// };

// interface Params extends ParsedUrlQuery {
//   id: string;
// }


// // export const getStaticPaths: GetStaticPaths<Params> = async () => {
// //   try {

// //     const users: IUser[] = await getUsers();
    
// //     const paths = Array.isArray(users) && users.map((user) => ({
// //       params: { id: user.userId.toString() },
// //     }));
    
// //     console.log('Path:::::', paths)
    
// //     return { paths, fallback: false };
// //   } catch(error) {
// //     return {
// //       paths: { params: {id: ""}},
// //       fallback: false
// //     }
// //   }
// // };



// export const getStaticPaths: GetStaticPaths<Params> = async () => {
//   const paths = users.map((user, index) => ({
//     params: {
//       id: user.userId.toString(),
//     },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// };

// /**
//  * ts-prune-ignore-next
//  */
// export const getStaticProps: GetStaticProps<IProps, Params> = async (context) => {
//   const { id } = context.params!;
//   try {
//     const user = await getUser(id as string);
//     return { props: { user } };
//   } catch (err: any) {
//     return { props: { errors: err.message } };
//   }
// };

// // ts-prune-ignore-next
// export default ThreedRoute;
import React from "react"
const Id = () => (<></>)