import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "./App.vue"
import router from "./router"

import "./assets/main.css"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount("#app") 


// Xác định yêu cầu bài toán: 
// Một người dùng có thể đăng kí, đăng nhập, đăng xuất một tài khoản duy nhất.
// Admin có thể tạo lớp học, sửa hay xóa lớp học đó.
// Mỗi Admin có thể quản lí những lớp của mình tạo ra.
// Admin có thể thêm học sinh, giáo viên vào mỗi lớp học, và mỗi lớp học có thể có nhiều giáo viên giảng dạy.
// Mỗi giáo viên có thể tham gia dạy nhiều lớp, với 1 môn nào đó.
// Mỗi học sinh sẽ thuộc về một lớp nào đó.
// Mỗi người dùng có thể thêm, sửa, xóa thông tin của bản thân.
// Giáo viên có thể xem thông tin các lớp mình dạy, danh sách học sinh các lớp đó.
// Học sinh có thể xem thông tin các lớp mình học