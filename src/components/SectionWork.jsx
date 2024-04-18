import '../styles/SectionWork.css';
import AddSubSection from './AddSubSection';
import SectionSep from './SectionSep';
import SubSectionInfo from './SubSectionInfo';
import DeleteSection from './DeleteSection';
import SaveEdit from './SaveEdit';
import { useState } from 'react';
import { v4 as uuid4 } from 'uuid';

export default function SectionWork() {
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
    <div className="section section-work">
      <SaveEdit toggle={handleToggle} />
      <SectionSep name={'EXPERIENCE'} imgPath={'/img/briefcase.svg'} />
      <div className="section-input">
        <ul>
          {list.map((subSection) => (
            <li key={subSection.id}>
              <SubSectionInfo
                what={'Title'}
                where={'Company'}
                disabled={bool}
              />
              <textarea
                name="work-text"
                id="work-text"
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
