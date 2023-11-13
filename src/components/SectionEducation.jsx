import '../styles/SectionEducation.css';
import SectionSep from './SectionSep';
import SubSectionInfo from './SubSectionInfo';
import AddSubSection from './AddSubSection';
import DeleteSection from './DeleteSection';

export default function SectionEducation() {
  return (
    <div className="section section-education">
      <SectionSep name={'EDUCATION'} imgPath={'/img/school.svg'} />
      <div className="section-input">
        <SubSectionInfo what={'Degree'} where={'School'} />
        <textarea
          name="education-text"
          id="education-text"
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
