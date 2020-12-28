import React from "react";
import css from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  activateEditMode() {
    this.setState({ editMode: true });
  }

  deactivateEditMode() {
    this.setState({ editMode: false });
  }

  render() {
    return (
      <div className={css.profile_status}>
        {this.state.editMode ? (
          <div className={css.status}>
            <input
              onBlur={this.deactivateEditMode.bind(this)}
              autoFocus
              value={this.props.status}
            />
          </div>
        ) : (
          <div
            onDoubleClick={this.activateEditMode.bind(this)}
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
