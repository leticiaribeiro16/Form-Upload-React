const express = require('express');
const app = express();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('image'), (req, res) => {
  res.send('Imagem enviada com sucesso!');
});

app.listen(5000, () => {
  console.log('Servidor iniciado na porta 5000.');
});
