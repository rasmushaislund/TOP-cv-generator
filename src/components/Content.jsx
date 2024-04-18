import '../styles/Content.css';
import SectionEducation from './SectionEducation';
import SectionProfile from './SectionProfile';
import SectionWork from './SectionWork';

export default function Content() {
  return (
    <div className="main-container">
      <SectionProfile />
      <SectionWork />
      <SectionEducation />
    </div>
  );
}
