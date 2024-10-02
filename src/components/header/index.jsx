import { memo } from 'react'

const Index = ({ data }) => (
  <div>
    {console.log('render header')}
    <h1>{data.name}</h1>
  </div>
);

export default memo(Index);