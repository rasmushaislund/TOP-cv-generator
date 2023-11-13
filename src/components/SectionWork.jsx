import '../styles/SectionWork.css';
import AddSubSection from './AddSubSection';
import SectionSep from './SectionSep';
import SubSectionInfo from './SubSectionInfo';
import DeleteSection from './DeleteSection';

export default function SectionWork() {
  return (
    <div className="section section-work">
      <SectionSep name={'EXPERIENCE'} imgPath={'/img/briefcase.svg'} />
      <div className="section-input">
        <SubSectionInfo what={'Title'} where={'Company'} />
        <textarea
          name="work-text"
          id="work-text"
          rows="5"
          disabled={false}
          maxLength={300}
        ></textarea>
        <DeleteSection />
      </div>
      <AddSubSection />
    </div>
  );
}
