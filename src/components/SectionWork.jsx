import '../styles/SectionWork.css';
import AddSubSection from './AddSubSection';
import SectionSep from './SectionSep';
import SubSectionInfo from './SubSectionInfo';
import DeleteSection from './DeleteSection';

export default function SectionWork() {
  const deleteSubSection = (e) => {
    const target = e.target;
    const ancestorChild = target.closest('.section-input');
    const ancestorParent = ancestorChild.closest('.section-work');

    if (target.matches('.delete-section, .delete-icon')) {
      ancestorParent.removeChild(ancestorChild);
    }
  };

  const addSubSection = (e) => {
    const target = e.target;
    console.log(target);
  };

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
        <DeleteSection handleClick={deleteSubSection} />
      </div>
      <AddSubSection handleClick={addSubSection} />
    </div>
  );
}
