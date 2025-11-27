function introMessage() {
  const color1 = "blue-text";
  const color2 = "yellow-text";

  return (
    <>
      <h1 className={color1}>Welcome to LM Multi-Services</h1>
      <p className={color2}>Where all your tech services are available</p>
    </>
  );
}

function Greetings() {
  const mystyles = {
    color: "red",
    fontSize: "20px",
    backgroundColor: "lightyellow",
  };

  return (
    <>
      <h1 style={mystyles}>How my we assist you</h1>
    </>
  );
}
