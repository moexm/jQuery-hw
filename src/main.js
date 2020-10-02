const api1 = jQuery('.test');
api1.addClass('red');
const api2 = api1.find(".child").addClass('yellow');

api2.end().addClass("black");

api1.each((div)=>console.log(div));

const child= api1; //三个“class=test”的元素


console.log(typeof child.parent()); //不能直接打印出elements
console.log(child.parent()); //是一个对象，newApi

child.parent().print();
api1.children().print();
