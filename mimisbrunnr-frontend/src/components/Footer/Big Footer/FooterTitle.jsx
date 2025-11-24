const FooterTitle = ({ title, isDark }) => {
  return (
    <div className={`footer-title-container ${isDark ? "dark-text" : "light-text"}`}>
      <h1>{title}</h1>
    </div>
  );
};

export default FooterTitle;
