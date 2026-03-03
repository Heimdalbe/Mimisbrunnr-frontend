import PrimaryButton from "../../../components/Common/PrimaryButton";
import PdfViewer from "../../../components/PdfViewer/PdfViewer";
import "./Boekje.css";
import boekjes from "../../../api/boekjes";

const Boekje = () => {
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
      <div className="select-wrapper">
        <label htmlFor="jaar">Kies een jaar:</label>
        <select name="jaar" id="jaar">
          <option value="placeholder" disabled>
            bv. 2024 - 2025
          </option>
          {boekjes.map((b) => (
            <option key={b.id} value={b.id}>
              {b.datum.toLocaleDateString()}
            </option>
          ))}
        </select>
      </div>
      <PdfViewer bestand={boekjes[0].bestand} />
    </div>
  );
};

export default Boekje;
