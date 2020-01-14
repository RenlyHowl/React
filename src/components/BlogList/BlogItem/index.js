import React from 'react'

export default function BlogItem(props) {
  // console.log(props);
  return (
    <li>
      <h1>{props.title} </h1>
      <p>{props.body} </p>
      <hr />
    </li>
  )
}

