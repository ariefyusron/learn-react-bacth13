const Button = ({ children, onClick, style }) => (
  <button
    style={{ backgroundColor: 'blue', color: '#fff', ...style }}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;