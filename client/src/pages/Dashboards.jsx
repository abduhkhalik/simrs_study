import React, { useContext } from "react";
import { Context } from "../context/Context";

function Dashboards() {
  const { user } = useContext(Context);
  console.log(user);
  return (
    <section className="content">
      <div className="container">Dashboards</div>
    </section>
  );
}

export default Dashboards;
