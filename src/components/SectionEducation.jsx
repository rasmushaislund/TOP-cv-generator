import '../styles/SectionEducation.css';
import SectionSep from './SectionSep';
import SubSectionInfo from './SubSectionInfo';
import AddSubSection from './AddSubSection';
import DeleteSection from './DeleteSection';

export default function SectionEducation() {
  const deleteSubSection = (e) => {
    const target = e.target;
    const ancestorChild = target.closest('.section-input');
    const ancestorParent = ancestorChild.closest('.section-education');

    if (target.matches('.delete-section, .delete-icon')) {
      ancestorParent.removeChild(ancestorChild);
    }
  };
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
        <DeleteSection handleClick={deleteSubSection} />
      </div>
      <AddSubSection />
    </div>
  );
}
