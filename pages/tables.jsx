import Head from "next/head";

function tables() {
  return (
    <div>
      <Head>
        <title>Tables</title>
      </Head>
      <h2>Border Collapse</h2>
      <p>
        Utilities for controlling whether table borders should collapse or be
        separated.
      </p>

      <table className="border-collapse border border-slate-400 hover:border-collapse">
        <thead>
          <tr>
            <th className="border border-slate-300">State</th>
            <th className="border border-slate-300">City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-300">Indiana</td>
            <td className="border border-slate-300">Indianapolis</td>
          </tr>
          <tr>
            <td className="border border-slate-300">Ohio</td>
            <td className="border border-slate-300">Columbus</td>
          </tr>
          <tr>
            <td className="border border-slate-300">Michigan</td>
            <td className="border border-slate-300">Detroit</td>
          </tr>
        </tbody>
      </table>

      <br />
      <hr />
      <br />

      <table className="table-auto">
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>

      <br />
      <hr />
      <br />

      <table className="table-fixed">
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
      
    </div>
  );
}

export default tables;
