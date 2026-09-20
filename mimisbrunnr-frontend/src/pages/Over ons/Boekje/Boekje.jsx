import { useState } from 'react';
import PrimaryButton from '../../../components/Common/PrimaryButton/PrimaryButton';
import PdfViewer from '../../../components/PdfViewer/PdfViewer';
import './Boekje.css';
import boekjes from '../../../api/boekjes';
import SelectField from '../../../components/Form/SelectField/SelectField';

const Boekje = () => {
  const options = boekjes.map(({ id, label }) => ({
    label,
    value: id,
  }));

  const [selectedId, setSelectedId] = useState(options[0]?.value ?? '');
  const current = boekjes.find((boekje) => boekje.id === selectedId) || boekjes[0];

  const handleChangeBoekje = (id) => {
    setSelectedId(id);
  };

  return (
    <div className="container-sm-tm">
      <div className="title-button-wrapper">
        <h1>Boekje</h1>
        {/* TODO: Button achter auth steken
        <PrimaryButton
          text={"Wijzig boekjes"}
          to={"/over-ons/boekje/edit"}
          isLight={true}
        />
        */}
      </div>
      <SelectField
        label={'Kies een boekje:'}
        placeholder={'bv. 2023-2024, editie 1'}
        options={options}
        value={selectedId}
        onChange={handleChangeBoekje}
      />
      <PdfViewer bestand={current.bestand} />
    </div>
  );
};

export default Boekje;
