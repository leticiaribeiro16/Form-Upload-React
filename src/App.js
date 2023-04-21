import React, { useState } from 'react';

function App() {
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    fetch('/upload', {
      method: 'POST',
      body: formData
    }).then(response => {
      console.log(response);
    }).catch(error => {
      console.error(error);
    });
  };

  return (
    <div>
      <h1>Upload de imagem</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleChange} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
