let footerDate = () => {
  let d = new Date();
  document.querySelector(
    '#footer-text'
  ).innerHTML = `©${d.getFullYear()} chayapatr a. punnasit c. pruttiporn i. chinnathat k.`;
};

export default footerDate;
