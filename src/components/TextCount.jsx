import useHomeStore from '../stores/storeHome'

const TextCount = () => {
  const count = useHomeStore(state => state.count)

  return (
    <div>
      <p>count: {count}</p>
    </div>
  )
};

export default TextCount;