import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function Register() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get("email");
  console.log(email);
  return <div>Welcome {email} to our app</div>;
}
