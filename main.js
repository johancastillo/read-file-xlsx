var inputFile = document.getElementById("file");

const formatData = (data) => {
    // Headers
    const headers = [...data[0]]

    // Content
    data.shift();
    const content = [...data]

    console.log("HEADERS", headers);
    console.log("CONTENT", content);

    // Entities

    content.map((entity) => {
        const newEntity = createEntities(entity);
        console.log("ENTITY", newEntity);
    })
    
}

const createEntities = (singleData) => {

    // Return
    return {
        title : singleData[0],
        price: singleData[1],
        contidad: singleData[2],
        sku: singleData[3]
    }

}

inputFile.addEventListener("change", function () {
  readXlsxFile(inputFile.files[0]).then(function (rows) {
    // `rows` is an array of rows
    console.log(rows);

    formatData(rows);

    // each row being an array of cells.
  });
});
