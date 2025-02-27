import React from "react";
class InfoTable extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Author</th>
            <th>Ratings</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.props.getData.length > 0 ? (
            this.props.getData.map((e) => (
              <tr key={e._id}>
                <td>{e.Name}</td>
                <td>{e.Author}</td>
                <td>{e.Rating}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={(event) => {
                      this.props.setData(e);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={(event) => {
                      this.props.del(e);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>No Data</tr>
          )}
        </tbody>
      </table>
    );
  }
}

export default InfoTable;
