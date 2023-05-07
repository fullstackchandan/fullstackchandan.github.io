import React from "react";

export default function Resource(props) {
  return (
    <div>
      <ul>
        <li>
          {props.course} - {props.platform}
        </li>
      </ul>
    </div>
  );
}
