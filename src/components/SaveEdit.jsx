import '../styles/SaveEdit.css';
import { useState } from 'react';

export default function SaveEdit({ toggle }) {
  const [enable, setEnable] = useState(false);
  const [imageName, setImageName] = useState('edit-outline');

  const toggleEdit = () => {
    if (!enable) {
      setEnable(true);
      setImageName('save');
    } else {
      setEnable(false);
      setImageName('edit-outline');
    }
  };
  return (
    <div className="btn save-edit-btn">
      <button type="button">
        <img
          src={`/img/${imageName}.svg`}
          alt="save/edit toggle"
          className="btn-icon"
          onClick={() => {
            toggleEdit();
            toggle();
          }}
        />
      </button>
    </div>
  );
}
