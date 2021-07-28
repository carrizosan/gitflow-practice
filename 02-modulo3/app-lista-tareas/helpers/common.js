const printHeader = (headerText) => {
  console.log("<<<<<<<<<< :::::::::::::::::::::::::::::::: >>>>>>>>>>".green);
  console.log(headerText.magenta.bold);
  console.log("<<<<<<<<<< :::::::::::::::::::::::::::::::: >>>>>>>>>>\n".green);
};

module.exports = { printHeader };
