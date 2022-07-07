import React from 'react';

function TableBody({ data, headers, contentFormat }) {
  console.log('🚀 ~ file: TableBody.js ~ line 4 ~ TableBody ~ data', data);
  return (
    <>
      {data.map((item, i) => {
        return (
          <tr key={i}>
            {headers.map((header, j) => (
              <td key={j}>{contentFormat(header.key, item[header.key])}</td>
            ))}
          </tr>
        );
      })}
    </>
  );
}

export default TableBody;
