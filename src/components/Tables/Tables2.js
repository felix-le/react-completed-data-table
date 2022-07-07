import React from 'react';
import { createUseStyles } from 'react-jss';
import TableTitle from './TableTitle';

import TableBody from './TableBody';

const tableStyles = createUseStyles({
  contentWrapper: {
    maxWidth: '50%',
    minWidth: '45%',
    '@media (max-width: 768px)': {
      maxWidth: '100%',
    },
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',

    '& .datatable-header': {
      padding: '0',
      borderBottom: 'none',
    },
  },

  titleWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FF8D00',
  },
  plusIcon: {
    marginLeft: '10px',
    color: '#26A69A',
    '&:hover': {
      cursor: 'pointer',
    },
  },

  tableFilter: {
    margin: '0',
    '& > label': {
      '& > span.inputIcon': {
        float: 'inherit',
        margin: '0',
        position: 'absolute',
        top: '0',
        right: '0',
        paddingLeft: '0.875rem',
        paddingRight: '0.875rem',
        lineHeight: 'calc(1.5385em + 0.875rem + 2px)',
      },
      '&:after': {
        display: 'none',
      },
    },
  },

  dataTableWrapper: {
    borderTop: '1px solid #ddd',
  },
});
function Tables2({ headers, tableTitle, description, data, contentFormat }) {
  const classes = tableStyles({});

  const _handleAddTodo = () => {
    console.log('add todo');
  };

  return (
    <div className='px-4 sm:px-6 lg:px-8'>
      <TableTitle
        tableTitle={tableTitle}
        description={description}
        handleAddTodo={_handleAddTodo}
      />
      <div className={`${classes.dataTableWrapper} dataTables_wrapper `}>
        <div className='datatable-scroll'>
          <table className='table datatable-sorting dataTable '>
            <thead>
              <tr>
                {headers.length > 0 &&
                  headers.map((header) => (
                    <th key={header.label}>{header.label}</th>
                  ))}
              </tr>
            </thead>
            <tbody>
              <TableBody
                headers={headers}
                data={data}
                contentFormat={contentFormat}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Tables2;
