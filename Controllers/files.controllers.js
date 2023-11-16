const FilesRouter = require('express').Router();
const fs = require('fs/promises');
const content= new Date().toString().replace(/[:.]/g,'-');
const path=`./File/${content}.txt`

async function createFile() {
  try {
    await fs.writeFile(path, content);
  } catch (err) {
    console.log(err);
  }
}

// HTTP METHODS = GET, POST, PUT, DELETE
FilesRouter.get('/createDefaultFile', (request, response, next) => {
  console.log('REQUEST HIT');
  createFile();
  return response.status(200).json({
    message: 'Request hit',
  });
});
module.exports = FilesRouter;