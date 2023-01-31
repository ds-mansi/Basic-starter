import { Data } from "@react-google-maps/api";
import * as React from "react";
type data={
  name:any
}

const Header = (props: Data) => {
  // const { title, hours } = props;

  return (
    <>
      <div>
        <div className="text-xl font-semibold mb-4">{Data.name}</div>
        <table>
          <thead className="sr-only">
            <tr>
              <th>Day of the Week</th>
              <th>Hours</th>
            </tr>
          </thead>
          
        </table>
      </div>
    </>
  );
};

export default Header;