// import DataUriParser from "datauri/parser.js";
// import path from "path"

// const getDataUri=(file)=>{
//     const parser=new DataUriParser();
//     const extName=path.extname(file?.originalname)?.toString();
//     return parser.format(extName,file.buffer);
// }
// export default getDataUri

import DataUriParser from "datauri/parser.js";
import path from "path";

const getDataUri = (file) => {
  if (!file || !file.originalname || !file.buffer) {
    throw new Error("Invalid file object: missing originalname or buffer");
  }
  
  const parser = new DataUriParser();
  const extName = path.extname(file.originalname).slice(1);  // remove the dot
  
  return parser.format(extName, file.buffer);
};

export default getDataUri;

