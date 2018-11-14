// Khi không truyền timezone lấy ra thời gian theo trình duyệt
//  Muốn convert cần set lại time

const date = new Date();
console.log('===============>', date.toLocaleString());

// Đổi từ thời gian trình duyệt to UTC localtime
let utc = date.getTime() + date.getTimezoneOffset() * 60 * 1000
console.log('===============>utc', new Date(utc).toLocaleString() );

// date.getTimezoneOffset trả về số phút chênh lệch sau đó convert ra minisecond



// VD vn +7
let vn = new Date().setTime(utc - new Date().getTimezoneOffset() * 1000 * 60)
let vnTime = new Date(vn);

console.log('===============>bombay', vnTime.toLocaleString());

// american
let american = utc + (-10) * 3600 * 1000;
let nd1 = new Date(american);
console.log('===============>americatn', nd1.toLocaleString());