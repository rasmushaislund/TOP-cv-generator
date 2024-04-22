import '../styles/Header.css';
import SaveEdit from './SaveEdit';
import { useState } from 'react';

export default function Header() {
  const [bool, setBool] = useState(true);
  const [avatarImage, setAvatarImage] = useState('/img/avatar-placeholder.svg');

  const handleToggle = () => {
    if (!bool) {
      setBool(true);
    } else {
      setBool(false);
    }
  };

  const onImageChange = (e) => {
    // if (e.target.files && e.target.files[0]) {
    setAvatarImage(URL.createObjectURL(e.target.files[0]));
    // }
    console.log(avatarImage);
  };

  const deleteImage = () => {
    const defaultImage = '/img/avatar-placeholder.svg';
    setAvatarImage(defaultImage);
    console.log(avatarImage);
  };

  return (
    <div className="header">
      <SaveEdit toggle={handleToggle} />
      <div className="avatar">
        <div className="avatar-profile">
          <img src={avatarImage} alt="profile picture" className="avatar-img" />
          <label
            className={`add-photo-label${bool ? ' hide' : ''}`}
            htmlFor="add-photo"
          >
            <img src="/img/add-photo.svg" alt="add photo" />
          </label>
          <input
            type="file"
            id="add-photo"
            className="new-photo"
            accept=".jpeg, .jpg, .png"
            onInput={onImageChange}
          />
          <button
            className={`delete-photo${bool ? ' hide' : ''}`}
            htmlFor="delete-photo"
            onClick={deleteImage}
          >
            <img src="/img/delete.svg" alt="delete photo" />
          </button>
          <div className="avatar-info">
            <input
              type="text"
              maxLength={50}
              disabled={bool}
              placeholder="Enter name"
              name="name"
              autoFocus
            />
            <textarea
              maxLength={100}
              disabled={bool}
              rows="4"
              placeholder="Short profile description"
              name="short-profile"
            />
          </div>
        </div>
        <div className="contact">
          <div className="contact-item">
            <input
              type="tel"
              disabled={bool}
              name="telephone"
              id="input-tele"
              placeholder="Enter phone number"
            />
            <img
              src="/img/phone-in-talk.svg"
              alt="phone"
              className="contact-img"
            />
          </div>
          <div className="contact-item">
            <input
              type="email"
              disabled={bool}
              name="email"
              id="input-email"
              placeholder="Enter email"
            />
            <img src="/img/email.svg" alt="mail" className="contact-img" />
          </div>
          <div className="contact-item">
            <input
              type="text"
              disabled={bool}
              name="address"
              id="input-address"
              placeholder="Enter city"
            />
            <img
              src="/img/map-marker-radius.svg"
              alt="location"
              className="contact-img"
            />
          </div>
          <div className="contact-item">
            <input
              type="url"
              disabled={bool}
              name="linkedin"
              id="input-linkedin"
              placeholder="Insert url to linkedIn profile"
            />
            <img
              src="/img/linkedin.svg"
              alt="linkedin"
              className="contact-img"
            />
          </div>
          <div className="contact-item">
            <input
              type="url"
              disabled={bool}
              name="github"
              id="input-github"
              placeholder="Insert url to Github profile"
            />
            <img
              src="/img/github-logo.svg"
              alt="github"
              className="contact-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
