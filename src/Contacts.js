import React from 'react';

const List = props => (
  <ul>
    {
			props.contacts.map(function(item, index) {
				return (
					<li key={index}>{item.firstName} {item.lastName}: {item.phone} {item.email} {item.address}</li>
				)
			})
    }
  </ul>
);

export default List;