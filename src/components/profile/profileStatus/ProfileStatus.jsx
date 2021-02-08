import React from "react";
import css from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }

  activateEditMode = () => {
    this.setState({ editMode: true });
  };

  deactivateEditMode = () => {
    this.props.updateStatus(this.state.status);
    this.setState({ editMode: false });
  };
  onStatusChange = (e) => {
    this.setState({ status: e.currentTarget.value });
  };

  render() {
    return (
      <div className={css.profile_status}>
        {this.state.editMode ? (
          <div className={css.status}>
            <input
              onBlur={this.deactivateEditMode}
              onChange={this.onStatusChange}
              autoFocus
              value={this.state.status}
            />
          </div>
        ) : (
          <div
            onClick={this.activateEditMode}
            // onDoubleClick={this.activateEditMode} //при f12 не работает
            className={css.status}
          >
            {this.props.status}
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
