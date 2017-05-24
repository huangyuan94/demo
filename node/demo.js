//  var fs = require('fs');


// var http = require('http');

// http.createServer(function (request, response) {
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.end('Hello World\n');
// }).listen(8000);

// console.log('Server running at http://127.0.0.1:8000/');

// 读取数据
// fs.readFile('123.txt', function (err, data) {
//   if (err) throw err;
//   console.log(data.toString());
//   var str = data.toString();
//   // 写入数据, 文件不存在会自动创建
// fs.writeFile('111.txt', str, function (err) {
//   if (err) throw err;
//   console.log('写入完成');
// });
// });

let  fs = require('fs');
let  join = require('path').join;
/**
 * 
 * @param startPath  起始目录文件夹路径
 * @returns {Array}
 */
function findSync(startPath) {
    let result=[];
    function finder(path) {
        let files=fs.readdirSync(path);
        files.forEach((val,index) => {
            let fPath=join(path,val);
            let stats=fs.statSync(fPath);
            if(stats.isDirectory()) finder(fPath);
            if(stats.isFile()) result.push(fPath);
        });

    }
    finder(startPath);
    return result;
}
let fileNames=findSync('./../imgs/').join('",\n"').replace(/\\/g,"/");
console.log(fileNames);

fs.writeFile('json.js', fileNames, (err)=> {
   if (err) return console.error(err);
   console.log("数据写入成功！");
   console.log("--------我是分割线-------------")
});