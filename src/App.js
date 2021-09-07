import "./App.css";
import { Helmet } from "react-helmet";
import Uploader from "./components/Uploader";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Upload to s3 bucket arfurniture</title>
        <meta name="description" content="How to upload files to s3" />
      </Helmet>
      <Uploader />
    </div>
  );
}

export default App;
