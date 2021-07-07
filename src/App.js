import React, { useState } from 'react';
import Title from './comps/Utils/Title';
import UploadForm from './comps/Utils/UploadForm';
import ImageGrid from './comps/Utils/ImageGrid';
import Modal from './comps/Utils/Modal';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
