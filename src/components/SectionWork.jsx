import '../styles/SectionWork.css';
import AddSubSection from './AddSubSection';
import SectionSep from './SectionSep';
import SubSectionInfo from './SubSectionInfo';
import DeleteSection from './DeleteSection';
import { useState } from 'react';
import { v4 as uuid4 } from 'uuid';

export default function SectionWork() {
  const [list, setList] = useState([]);

  const handleAddSubSection = () => {
    const newSubSection = {
      id: uuid4(),
    };

    setList([...list, newSubSection]);
  };

  const handleDeleteSubSection = (id) => {
    const newList = list.filter((subSection) => subSection.id !== id);
    setList(newList);
  };

  return (
    <div className="section section-work">
      <SectionSep name={'EXPERIENCE'} imgPath={'/img/briefcase.svg'} />
      <div className="section-input">
        <ul>
          {list.map((subSection) => (
            <li key={subSection.id}>
              <SubSectionInfo what={'Title'} where={'Company'} />
              <textarea
                name="work-text"
                id="work-text"
                rows="5"
                disabled={false}
                maxLength={300}
              ></textarea>
              <DeleteSection
                deleteSub={handleDeleteSubSection(subSection.id)}
              />
            </li>
          ))}
        </ul>
      </div>
      <AddSubSection add={handleAddSubSection} />
    </div>
  );
}
