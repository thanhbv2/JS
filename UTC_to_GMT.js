// Khi không truyền timezone lấy ra thời gian theo trình duyệt
//  Muốn convert cần set lại time

const date = new Date();
console.log('===============>', date.toLocaleTimeString());

// Đổi từ thời gian trình duyệt to UTC
// date.getTimezoneOffset trả về số phút chênh lệch sau đó convert ra minisecond
date.setTime(date.getTime() + date.getTimezoneOffset() * 60 * 1000);

console.log('===============>', date.toLocaleTimeString());