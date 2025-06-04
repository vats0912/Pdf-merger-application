const PDFMerger = require('pdf-merger-js');
const { v4: uuidv4 } = require('uuid');
const merge1 = async (p1, p2) => {
    let merger = new PDFMerger();  // Create a new instance inside the function
    await merger.add(p1);
    await merger.add(p2);

    const outputFilename = `${uuidv4()}.pdf`; // Fix string interpolation
    await merger.save(`public/${outputFilename}`); // Use the correct filename

    return outputFilename; // Return the generated filename
};

module.exports= merge1;