import Strofe from "../../../components/Clublied/Strofe";

const Clublied = () => {
  return (
    <div className="container-sm-tm">
      <h1>Clublied</h1>
      <Strofe
        titel={"Refrein"}
        lijnen={[
          "Heimdal, Heimdal, club van mijn hart",
          "waar ik al-tijd mezellef kan zijn!",
          "geloofd, geliefd, zijt gij voor mij",
          "Heimdal, met ons schoon wit en ons zwart",
        ]}
      />
      <Strofe
        titel={"Strofe 1"}
        lijnen={[
          "Hoera nu, met z'n allen, gaan wij alweer knallen",
          "Samen, vriend en schild, maak ple-zier!",
        ]}
      />
      <Strofe
        titel={"Refrein"}
        lijnen={[
          "Heimdal, Heimdal, club van mijn hart",
          "waar ik al-tijd mezellef kan zijn!",
          "geloofd, geliefd, zijt gij voor mij",
          "Heimdal, met ons schoon wit en ons zwart",
        ]}
      />
      <Strofe
        titel={"Strofe 2"}
        lijnen={[
          "Comic Sans, ons café, is gevuld tot de nok",
          "Komt nader, schuif erbij met ons!",
          "May the force be with you en je broeders nabij",
        ]}
      />
      <Strofe
        titel={"Refrein"}
        lijnen={[
          "Heimdal, Heimdal, club van mijn hart",
          "waar ik al-tijd mezellef kan zijn!",
          "geloofd, geliefd, zijt gij voor mij",
          "Heimdal, met ons schoon wit en ons zwart",
        ]}
      />
    </div>
  );
};

export default Clublied;
