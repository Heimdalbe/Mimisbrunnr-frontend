const capitalize = (word = "") => {
  if (typeof word !== "string") return word;
  if (word.length === 0) return "";
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export default capitalize;
