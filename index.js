const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// 'videos' フォルダ内のMP4ファイルを公開
app.use('/videos', express.static('videos'));

app.get('/', (req, res) => {
  res.send('MP4 Video Hosting Server is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
