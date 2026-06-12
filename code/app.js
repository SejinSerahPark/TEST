const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080; // Azure는 기본적으로 8080이나 process.env.PORT를 사용합니다.

app.get('/', (req, res) => {
  res.send('<h1>🚀 GitHub Actions를 통해 Azure App Service에 성공적으로 배포되었습니다!</h1>');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
