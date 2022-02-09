import React from 'react';

export default function MessagePage(props) {
  return (
    <div className={`alert alert-${props.variant || 'info'}`}>
      {props.children}
    </div>
  );
}