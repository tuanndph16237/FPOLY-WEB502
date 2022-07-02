var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Buổi 1
// Cài đặt Nodejs Typescript, ts-node ...
// Variable trong TS
var a;
var b;
var c;
a = 10;
// b = "Hello các bạn"
c = true;
// Function trong TS cần phải khai báo kiểu tham số và đầu ra
function greeting() {
    console.log('Xin chao cac ban');
}
function perimeter(radius) {
    return radius * 2 * 3.14;
}
//Buổi 2: Cacs kiểu dự liệu mới
// 1. Phân biệt giữa let const và var
// 2. Khai báo một array function
// 3. Kiểu mảng Array (một mảng chứa 1 loại data type)
var arrNumber;
arrNumber = [1, 2, 3, 4, 5, 6];
// console.log(arrNumber)
// 4. Kiểu Enum
var khuvuc;
(function (khuvuc) {
    khuvuc[khuvuc["mienBac"] = 100] = "mienBac";
    khuvuc[khuvuc["mienNam"] = 101] = "mienNam";
    khuvuc[khuvuc["mienTrung"] = 102] = "mienTrung";
})(khuvuc || (khuvuc = {}));
var Field;
(function (Field) {
    Field[Field["economic"] = 0] = "economic";
    Field[Field["informationSystem"] = 1] = "informationSystem";
    Field[Field["merchanic"] = 2] = "merchanic";
})(Field || (Field = {}));
// console.log(Field.informationSystem)
// console.log(khuvuc.mienNam)
// 5. Kiểu tuple
var sinhvien;
sinhvien = ["Kien", 20, true, true];
// console.log(typeof(sinhvien))
// 6. Ép kiểu dữ liệu, (chuyển giới)
var y = "10";
var z = Number(y) + 20;
// console.log(z)
// let z: number = 10
// console.log(z + "20")
// 7. Tổng kết phần kiểu dữ liệu
// Typescript sẽ khiến cho việc code trên nên đơn giản hơn
// Phù hợp với các dự án lớn vì đã quy định các kiểu dữ liệu rõ ràng - Nghiêm khắc trong kiểu dữ liệu
// 8. Kiểu union (alias)
var hobby;
hobby = "My hobby";
hobby = 1000;
var price;
price = 1000000;
function showPrice(price) {
    return "";
}
// 9. Function (Hàm)
// Tại sao cần sử dụng hàm
// Tham số và đối sổ hàm là gì?
// Giá trị trả về của hàm
// 10.Lập trình hướng đối tượng OOP
// Mô phỏng sự vật ngoài đời thực và mô tả hoá nó trong code
// 1. Tính trừu tượng:
// 2. Tính kế thừa:
// 3. Tính bao đóng
// Tạo ra một class
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.walk = function () {
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.getAge = function () {
        console.log(this.age);
    };
    ;
    return Student;
}(Person));
var student = new Student("Van Anh", 20);
student.age = 30;
console.log(student.age);