import React from 'react';
import { MainLayout } from '../../components/shared/main-layout/MainLayout';
import { GetStaticProps, NextPage } from 'next';
import { UploadPage } from 'components/pages/upload-page/UploadPage';

interface IProps {
  test?: string;
}

const UploadRoute: NextPage<IProps> = (props) => {
  return (
    <MainLayout title="Upload">
      {/* <UploadPage /> */}
      <h1>Upload</h1>
    </MainLayout>
  );
};


// ts-prune-ignore-next
export default UploadRoute;
