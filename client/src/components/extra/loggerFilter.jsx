import React from "react";

const LoggerFilter = ({ state, Logs }) => {
  if (state.identifier == "" && state.type == "") {
    const allLogs = Logs.length ? (
      Logs.map((item) => {
        return (
          <tbody key={item._id}>
            <tr>
              <td>{item.type}</td>
              <td className>{item.identifier}</td>
              <td>{item.data}</td>
              <td>{item.ts}</td>
            </tr>
          </tbody>
        );
      })
    ) : (
      <div></div>
    );

    return allLogs;
  } else if (state.identifier !== "") {
    const Log = Logs.filter((item) => {
      return item.identifier === state.identifier;
    });
    const allLogs = Log.length ? (
      Log.map((item) => {
        return (
          <tbody key={item._id}>
            <tr>
              <td>{item.type}</td>
              <td>{item.identifier}</td>
              <td>{item.data}</td>
              <td>{item.ts}</td>
            </tr>
          </tbody>
        );
      })
    ) : (
      <div></div>
    );
    return allLogs;
  } else if (state.type !== "") {
    const Log = Logs.filter((item) => {
      return item.type === state.type;
    });
    const allLogs = Log.length ? (
      Log.map((item) => {
        return (
          <tbody key={item._id}>
            <tr>
              <td>{item.type}</td>
              <td>{item.identifier}</td>
              <td>{item.data}</td>
              <td>{item.ts}</td>
            </tr>
          </tbody>
        );
      })
    ) : (
      <div></div>
    );
    return allLogs;
  }
};

export default LoggerFilter;
