import './CopyrightSection.css';

const CopyrightSection = () => {
  const year = new Date().getFullYear();

  return (
    <p>Copyright {year} Heimdal.be | All rights reserved</p>
  );
}

export default CopyrightSection;
