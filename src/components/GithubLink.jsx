import '../styles/GithubLink.css';

export default function GithubLink() {
  const getCurrentYear = new Date().getFullYear();

  return (
    <div className="developer">
      <p className="copyright">
        &copy;<span id="copyright-span"> {getCurrentYear}</span>
      </p>
      <a
        href="https://github.com/rasmushaislund"
        className="github-link"
        target="_blank"
      >
        Rasmus H.
        <img
          src="../public/img/github-logo.svg"
          alt="github logo"
          className="github-logo"
        />
      </a>
    </div>
  );
}
