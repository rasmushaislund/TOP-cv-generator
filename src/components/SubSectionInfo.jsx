import '../styles/SubSectionInfo.css';
import { useState } from 'react';

export default function SubSectionInfo({ what, where, disabled }) {
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const handleDateFromChange = (e) => {
    setDateFrom(e.target.value);
  };

  const handleDateToChange = (e) => {
    setDateTo(e.target.value);
  };

  return (
    <div className="sub-section-info">
      <input
        type="text"
        placeholder={disabled === true ? '' : what}
        disabled={disabled}
      />
      <input
        type="text"
        placeholder={disabled === true ? '' : where}
        disabled={disabled}
      />
      <div className="from-and-to">
        <input
          type="text"
          disabled={disabled}
          name="date-from"
          id="date-from"
          placeholder={disabled === true ? '' : 'mm.yyyy'}
          onChange={handleDateFromChange}
          required
        />
        <p>{disabled === true && dateFrom === '' ? '' : '-'}</p>
        <input
          type="text"
          disabled={disabled}
          name="date-to"
          id="date-to"
          placeholder={disabled === true && dateTo === '' ? '' : 'mm.yyyy'}
          onChange={handleDateToChange}
          required
        />
      </div>
    </div>
  );
}
