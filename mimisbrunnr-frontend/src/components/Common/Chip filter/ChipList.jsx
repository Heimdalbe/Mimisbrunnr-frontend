import IconChip from "./IconChip";
import PrimaryButton from "../../Common/PrimaryButton";
import "./Chipfiltering.css";

const ChipList = ({ chips }) => {
  return (
    <div className="chiplist">
      {chips.map((c) => (
        <IconChip key={c.id} label={c.label} icon={c.icon} />
      ))}
      <PrimaryButton isLight={true} text={"Verwijder alle filters"} />
    </div>
  );
};

export default ChipList;
