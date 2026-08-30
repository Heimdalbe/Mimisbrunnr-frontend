import IconChip from './IconChip';
import PrimaryButton from '../../Common/PrimaryButton/PrimaryButton';
import './Chipfiltering.css';

const ChipList = ({ chips, selected, onToggle, onClear }) => {
  return (
    <div className="chiplist">
      {chips.map((c) => (
        <IconChip
          key={c.id}
          label={c.label}
          icon={c.icon}
          active={selected.includes(c.value)}
          onClick={() => onToggle(c.value)}
        />
      ))}
      <PrimaryButton isLight={true} text={'Verwijder alle filters'} onClick={onClear} />
    </div>
  );
};

export default ChipList;
