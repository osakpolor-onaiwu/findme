import { useState, useEffect } from "react";
import { connect } from "react-redux";
import LoggerFilter from "../extra/loggerFilter";

const Logger = ({ Logs }) => {
  const initialState = {
    type: "",
    identifier: "",
  };
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="logs ">
      <form>
        <select
          name="type"
          className="browser-default"
          onChange={handleChange}
          id=""
        >
          <option value="">Type</option>
          <option value="info">Info</option>
          <option value="error">Error</option>
        </select>

        <input
          type="text"
          placeholder="Identifier"
          name="identifier"
          onChange={handleChange}
          className="browser-default"
          id=""
        />
        <button type="submit">Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Identifier</th>
            <th>Logs</th>
            <th>Time</th>
          </tr>
        </thead>
        <LoggerFilter state={state} Logs={Logs} />
      </table>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    Logs: state.Logs.logs,
  };
};

export default connect(mapStateToProps)(Logger);
