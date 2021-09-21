import React from "react";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";

const Uploader = () => {
  const axios = require("axios").default;

  const API_ENDPOINT =
    "https://vbmx5sl4yd.execute-api.ap-south-1.amazonaws.com/default/getSignedUrl";
  const handleChangeStatus = ({ meta, remove }, status) => {
    console.log(status, meta);
  };

  
 const handleSubmit = async (files) => {
    const f = files[0];
    let body=    f["file"];
    console.log('Hi Dinesh',f["file"].name);
    // * GET request: presigned URL
    const response = await axios({
      method: "GET",
      url: API_ENDPOINT+'?filename='+body.name,
    });

    console.log("Response: ", response);


console.log(JSON.stringify(body));
    // * PUT request: upload file to S3
    const result = await fetch(response.data.uploadURL, {
      method: "PUT",
      body: body,
    });
    console.log("Result: ", result);
  };
  

  return (
    <Dropzone
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      hjello
      maxFiles={1}
      multiple={false}
      canCancel={false}
      inputContent="Drop An Image"
      styles={{
        dropzone: { width: 500, height: 300 },
        dropzoneActive: { borderColor: "blue" },
      }}
    />
  );
};

<Uploader />;

export default Uploader;
