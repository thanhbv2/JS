/**
 * 
 * @param {*} Khai báo biến var sẽ tồn tại scope trong function chứa nó 
 * let, const chỉ tồn tại trong block chứa nó {}

 */

function demoScope() {

  if (true) {
    var globalVariable = 2;
  }

  console.log('===============>', globalVariable);
}


// demoScope();


function nestedScope() {
  var outer = 10;

  function inner() {
    console.log('===============>', outer);
  }

  inner();
}

// nestedScope();

/**
 * 
 * @param {*} Khi function thực thi xong nó tạo 1 closure chứa các biến được khai báo từ outer function
 * vì vậy mặc dù function đã thực thi xong nó vẫn có thể tham chiều đến biến của outer funciton
 * Theo thứ tự từ trong ra ngoài thì clouse trong cùng sẽ tham chiếu đến được các biến ở ngoài
 */
function closureDemo(a) {
  function inner(b) {
    return a + b;
  }
  return inner;
}

let result1 = closureDemo(3)
let inner = result1(5)
// console.log('===============>', inner);

// console.log('===============>', closureDemo(3)(5));


function A(x) {
  function B(y) {
    function C(z) {
     console.log('===============>', x + y + z);
    }
    C(3);
  }
  B(2);
}

A(1)

// Closure pitfalls 

/**
 * Trước khi thực hiện click thì hàm add_the_handlers đã chạy xong dẫn đến giá trị của i luôn bằng length - 1;
 * Điều này gây nhầm lẫn khi không hiểu rõ closure
 */

var add_the_handlers = function (nodes) {
  var i;
  for (i = 0; i < nodes.length; i += 1) {
    nodes[i].onclick = function (e) {
      alert(i);
    };
  }
};
nodes = document.getElementById("click");
add_the_handlers(nodes);


// Giải pháp truyền giá trị của i ở thời điểm hiện tại vào closure của funciton được bind onclick
var add_the_handlers = function (nodes) {
  var helper = function (i) {
    return function (e) {
      alert(i);
    };
  };
  var i;
  for (i = 0; i < nodes.length; i += 1) {
    modes[i].onclick = helper(i);
  }
};