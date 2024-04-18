import '../styles/SectionEducation.css';
import SectionSep from './SectionSep';
import SubSectionInfo from './SubSectionInfo';
import AddSubSection from './AddSubSection';
import DeleteSection from './DeleteSection';
import SaveEdit from './SaveEdit';
import { useState } from 'react';
import { v4 as uuid4 } from 'uuid';

export default function SectionEducation() {
  const [list, setList] = useState([]);
  const [bool, setBool] = useState(true);

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

  const handleToggle = () => {
    if (!bool) {
      setBool(true);
    } else {
      setBool(false);
    }
  };

  return (
    <div className="section section-education">
      <SaveEdit toggle={handleToggle} />
      <SectionSep name={'EDUCATION'} imgPath={'/img/school.svg'} />
      <div className="section-input">
        <ul>
          {list.map((subSection) => (
            <li key={subSection.id}>
              <SubSectionInfo
                what={'Degree'}
                where={'School'}
                disabled={bool}
              />
              <textarea
                name="education-text"
                id="education-text"
                rows="5"
                disabled={bool}
                maxLength={300}
              ></textarea>
              <DeleteSection
                deleteSub={() => handleDeleteSubSection(subSection.id)}
                hide={bool}
              />
            </li>
          ))}
        </ul>
      </div>
      <AddSubSection add={handleAddSubSection} hide={bool} />
    </div>
  );
}
