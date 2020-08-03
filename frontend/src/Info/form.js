import React from "react";
class InfoForm extends React.Component {
  constructor() {
    super();

    this.state = {
      _id: "",
      Name: "",
      Author: "",
      Rating: "",
      isEdit: false,
    };
  }

  infoChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  infoSubmit = (event) => {
    if (!this.state.isEdit) {
      let Data = {
        isEdit: this.state.isEdit,
        Name: this.state.Name,
        Author: this.state.Author,
        Rating: this.state.Rating,
      };
      this.props.myData(Data);
    } else {
      let Data = {
        isEdit: this.state.isEdit,
        _id: this.state._id,
        Name: this.state.Name,
        Author: this.state.Author,
        Rating: this.state.Rating,
      };
      this.props.myData(Data);
    }
  };

  componentWillReceiveProps(props) {
    if (props.setForm._id != null) {
      this.setState({
        isEdit: true,
        _id: props.setForm._id,
        Name: props.setForm.Name,
        Author: props.setForm.Author,
        Rating: props.setForm.Rating,
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.infoSubmit} autoComplete="off">
        <div className="form-group">
          <label htmlFor="Name">Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            onChange={this.infoChange}
            name="Name"
            value={this.state.Name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Author">Author:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Author"
            onChange={this.infoChange}
            name="Author"
            value={this.state.Author}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Rating">Ratings:</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter ratings"
            onChange={this.infoChange}
            name="Rating"
            value={this.state.Rating}
            max="5"
            min="0"
            step="0.5"
          />
        </div>
        <button type="submit" className="btn btn-success">
          {this.state.isEdit ? "Update" : "Create"}
        </button>
      </form>
    );
  }
}

export default InfoForm;
