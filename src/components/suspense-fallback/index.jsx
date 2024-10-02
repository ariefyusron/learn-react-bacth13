import { Suspense } from "react";
import { Spin } from 'antd'

const Index = (props) => (
  <Suspense fallback={<Spin size="large" />}>
    {props.children}
  </Suspense>
);

export default Index;