import { useState } from "react";
import PrimaryButton from "../../../components/Common/PrimaryButton";
import PdfViewer from "../../../components/PdfViewer/PdfViewer";
import "./Boekje.css";
import boekjes from "../../../api/boekjes";
import SelectField from "../../../components/Form/SelectField/SelectField";

//TODO: Selectfield op full width ziet er hier beetje cursed uit

//TODO: Nut van deze pagina nog is herevalueren want er zijn eigenlijk maar 2 boekjes om te tonen (2 edities 2023-2024),
// alsook weet ik niet of er effectief nog nieuwe boekjes gaan uitkomen aangezien er voor 2024-2025 geen op de huidige site staat.

const Boekje = () => {
  const labels = boekjes.map((b) => {
    const year = b.datum ? b.datum.getFullYear() : new Date().getFullYear();
    return year;
  });

  const [selectedLabel, setSelectedLabel] = useState(labels[0] ?? "");
  const current = boekjes[labels.indexOf(selectedLabel)] || boekjes[0];

  const handleChangeBoekje = (label) => {
    setSelectedLabel(label);
  };

  return (
    <div className="container-sm-tm">
      <div className="title-button-wrapper">
        <h1>Boekje</h1>
        <PrimaryButton
          text={"Wijzig boekjes"}
          to={"/over-ons/boekje/edit"}
          isLight={true}
        />
      </div>
      <SelectField
        label={"Kies een jaar:"}
        placeholder={"bv. 2025 - 2026"}
        options={labels}
        value={selectedLabel}
        onChange={handleChangeBoekje}
      />
      <PdfViewer bestand={current.bestand} />
    </div>
  );
};

export default Boekje;
