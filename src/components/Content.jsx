import '../styles/Content.css';
import SaveEdit from './SaveEdit';
import SectionEducation from './SectionEducation';
import SectionProfile from './SectionProfile';
import SectionWork from './SectionWork';

export default function Content() {
  return (
    <div className="main-container">
      <SaveEdit />
      <SectionProfile />
      <SaveEdit />
      <SectionWork />
      <SaveEdit />
      <SectionEducation />
    </div>
  );
}
