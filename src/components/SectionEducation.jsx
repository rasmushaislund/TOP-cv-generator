import '../styles/SectionEducation.css';
import SectionSep from './SectionSep';
import SubSectionInfo from './SubSectionInfo';
import AddSubSection from './AddSubSection';
import DeleteSection from './DeleteSection';
import { useState } from 'react';
import { v4 as uuid4 } from 'uuid';

export default function SectionEducation() {
  const [list, setList] = useState([]);

  const handleAddSubSection = () => {
    const newSubSection = {
      id: uuid4(),
    };

    setList([...list, newSubSection]);
  };
  return (
    <div className="section section-education">
      <SectionSep name={'EDUCATION'} imgPath={'/img/school.svg'} />
      <div className="section-input">
        <ul>
          {list.map((subSection) => (
            <li key={subSection.id}>
              <SubSectionInfo what={'Degree'} where={'School'} />
              <textarea
                name="education-text"
                id="education-text"
                rows="5"
                disabled={false}
                maxLength={300}
              ></textarea>
              <DeleteSection />
            </li>
          ))}
        </ul>
      </div>
      <AddSubSection add={handleAddSubSection} />
    </div>
  );
}
