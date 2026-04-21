import PdfViewer from "../../../components/PdfViewer/PdfViewer";
import statuten from "../../../api/statuten";
import PrimaryButton from "../../../components/Common/PrimaryButton";
import "./Statuten.css";

const Statuten = () => {
  return (
    <div className="container-sm-tm">
      <div className="title-button-wrapper">
        <h1>Statuten</h1>
        {/* TODO:  Button verstoppen achter auth 
        <PrimaryButton
          text={"Wijzig statuten"}
          isLight={true}
          to={"/over-ons/statuten/edit"}
        />
        */}
      </div>
      <h2>
        Laatst aangepast op {statuten.datumAangepast.toLocaleDateString()}
      </h2>
      <PdfViewer bestand={statuten.bestandUrl} />
    </div>
  );
};

export default Statuten;
