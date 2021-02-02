const GamePage = ({ onReturnHome }) => {
  const handleClick = () => {
    onReturnHome && onReturnHome("app");
  };
  return (
    <div>
      This is Game-Page!
      <br />
      <button onClick={handleClick}>Back to Home-Page</button>
    </div>
  );
};

export default GamePage;
