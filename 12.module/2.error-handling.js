// try catch finally
function readFile(path) {
  //   throw new Error('파일 경로를 찾을 수 없음');
  return "파일의내용";
}

function processFile(path) {
  // processFile
  let content;
  try {
    // try readFile(path) 하는데 성공 했을 경우
    content = readFile(path);
  } catch (error) {
    // catch 에러가 발생했을 경우
    console.log(error);
    content = "기본내용";
  } finally {
    // 성공, 실패 상관없이 실행되어야 할 경우
    console.log("성공하든 실패하든 마지막으로 리소스를 정리할 수 있음!");
  }
  const result = "hi " + content;
  return result;
}

const result = processFile("경로");
console.log(result);
