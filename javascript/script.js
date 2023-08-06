// let thanhpho = 'thanhpho';

// var myInfo = {
//     name: 'Thang',
//     age: 25,
//     city: 'New York',
//     [thanhpho]: 'Buon ma thuot',
//     getName: function() {
//         return this.thanhpho;
//     }
// };


// console.log('Thanh pho: ', myInfo.getName());


function User(firstname, lastname, age, city) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.city = city;
    this.getName = function () {
        return `${this.firstname} ${this.lastname}`;
    };
}
var admin = new User('Thang', 'Nguyen', '20', 'New York');
var user = new User('Viet', 'dasdasd', '10', 'New York');
console.log('Ten admin: ' + admin.getName());
console.log('Ten user: ' + user.getName());
