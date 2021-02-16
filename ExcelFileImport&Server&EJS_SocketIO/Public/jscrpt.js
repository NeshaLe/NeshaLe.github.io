let selectedFile;
const socket = io();
console.log(window.XLSX);

socket.on("poruka", ({ spisak, vreme }) => {
  const lista = document.getElementById("jsondata");
  lista.innerHTML = spisak.toUpperCase();
  let time = document.getElementById("vreme");
  time.innerHTML = `Vreme promene statusa: ${vreme} h`;
  // console.log(vreme);
  // console.log(typeof spisak);
});

// dobijanje spiska iz excel fajla iz backenda______
let lista = document.getElementById("jsondata").innerHTML;
const spisak = lista.split(", ");
console.log("spisak u Array: ", spisak);
// _________________________________

document.getElementById("input").addEventListener("change", (event) => {
  //   console.log(event);
  selectedFile = event.target.files[0];
  console.log("ubaceni fajl", selectedFile);
  console.log(typeof selectedFile);
});
let sastojci = [];
let data = [
  {
    // name: "jayanth",
    data: "scd",
    // abc: "sdef",
  },
];

document.getElementById("button").addEventListener("click", () => {
  XLSX.utils.json_to_sheet(data, "out.xlsx");
  if (selectedFile) {
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(selectedFile);
    fileReader.onload = (event) => {
      let data = event.target.result;
      let workbook = XLSX.read(data, { type: "binary" });
      console.log(workbook);
      workbook.SheetNames.forEach((sheet) => {
        let rowObject = XLSX.utils.sheet_to_row_object_array(
          workbook.Sheets[sheet]
        );
        console.log(rowObject);

        for (let key in rowObject) {
          if (rowObject[key].__EMPTY_4 !== undefined) {
            sastojci.push(rowObject[key].__EMPTY_4);
          }
        }
        sastojci.shift();
        console.log(sastojci);
        document.getElementById("jsondata").innerHTML = sastojci.join(", ");
      });
    };
  } else {
    document.getElementById("jsondata").innerHTML = "Nije ubacen excel fajl.";
  }
});
