const Header = ({ title, subTitle }) => {

  return (
    <div className="header">
      <h1>{title}</h1>
      <h2>{subTitle ? subTitle : '-'}</h2>
    </div>
  )
};

export default Header;