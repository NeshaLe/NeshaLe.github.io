const fs = require("fs");

function citanjeExcFajla(sastojci) {
  if (typeof require !== "undefined") XLSX = require("xlsx");
  // const xla = [];
  const xl = XLSX.readFile("./data/sastojci.xlsx");
  xl.SheetNames.forEach((sheet) => {
    let rowObject = XLSX.utils.sheet_to_row_object_array(xl.Sheets[sheet]);
    //   console.log(rowObject);

    for (let key in rowObject) {
      if (rowObject[key].__EMPTY_4 !== undefined) {
        sastojci.push(rowObject[key].__EMPTY_4);
      }
    }
    sastojci.shift();
    //   console.log(sastojci);
    // let listasas = sastojci.join(", ");
    // console.log(listasas);
    // document.getElementById("jsondata").innerHTML = sastojci.join(", ");
    return sastojci;
  });
  // upis sastojaka u export.txt
  fs.writeFile("export.txt", `${sastojci}`, function (err) {
    console.log("Sastojci su upisani u export.txt");
    if (err) return console.log(err);
  });
}

module.exports = citanjeExcFajla;
