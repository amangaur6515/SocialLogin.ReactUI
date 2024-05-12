import React from "react";

export default function Login() {
  const handleLogin = async () => {
    const res = await fetch(
      "https://localhost:7051/WeatherForecast/external-login"
    );
    const data = await res.json();
    window.location.href = data.redirectUrl;
    console.log(data);
  };

  return (
    <div className="App">
      <button onClick={handleLogin}>google login</button>
    </div>
  );
}
