import React from "react";

export default function Profile() {
  return (
    <div>
      {" "}
      <div
        className="row g-0 d-flex align-items-center"
        style={{ height: "600px" }}
      >
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="card p-2 bg-light">
            <h3 className="text-center text-bold">User Profile</h3>
            <ul class="list-group pt-3 pb-3">
              <li class="list-group-item">Name: name</li>
              <li class="list-group-item">Email: email</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}
