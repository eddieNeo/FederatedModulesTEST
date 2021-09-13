import React, { useEffect } from "react";
import System from "../../CustomSystem";

export const ReduxStore = () => {
  const [system, setSystem] = React.useState(undefined);
  function setLayout() {
    setSystem({
      url: "http://localhost:4004/remoteEntry.js",
      scope: "ReduxStore",
      module: "./actions",
    });
  }
    useEffect(() => {
      setLayout();
  }, []);
  return <System system={system} />;
};

