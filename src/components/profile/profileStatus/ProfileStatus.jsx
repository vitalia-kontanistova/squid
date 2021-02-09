import React, { useEffect, useState } from "react";
import css from "./ProfileStatus.module.css";

const ProfileStatus = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  let activateEditMode = () => {
    setEditMode(true);
  };

  let deactivateEditMode = () => {
    props.updateStatus(status);
    setEditMode(false);
  };

  let onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div className={css.profile_status}>
      {editMode ? (
        <div className={css.status}>
          <input
            onBlur={deactivateEditMode}
            onChange={onStatusChange}
            autoFocus
            value={status}
          />
        </div>
      ) : (
        <div
          onClick={activateEditMode}
          // onDoubleClick={activateEditMode} //при f12 не работает
          className={css.status}
        >
          {props.status}
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
