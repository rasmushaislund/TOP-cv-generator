import '../styles/Header.css';
import SaveEdit from './SaveEdit';

export default function Header() {
  return (
    <div className="header">
      <SaveEdit />
      <div className="avatar">
        <div className="avatar-profile">
          <img
            src="/img/avatar.jpg"
            alt="profile picture"
            className="avatar-img"
          />
          <div className="avatar-info">
            <input
              type="text"
              maxLength={50}
              disabled={false}
              placeholder="Enter name"
              name="name"
              autoFocus
            />
            <textarea
              maxLength={100}
              disabled={false}
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
              name="email"
              id="input-email"
              placeholder="Enter email"
            />
            <img src="/img/email.svg" alt="mail" className="contact-img" />
          </div>
          <div className="contact-item">
            <input
              type="text"
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
