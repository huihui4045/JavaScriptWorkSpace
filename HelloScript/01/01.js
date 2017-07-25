/**
 * Created by gavin on 2017/3/10.
 */

/*
 var person = new Object();
 person.firstname = "Bill";
 person.lastname = "Gates";
 person.age = 56;
 person.eyecolor = "blue";

 console.log(person.firstname);


 //工厂模式
 function createPerson(name, age) {
 var o = new Object();
 o.name = name;
 o.age = age;
 o.sayName = function () {
 console.log(this.name);
 }
 return o;
 }

 var c = createPerson("jason", 30);
 c.sayName();


 function User(name, age) {

 this.name = name;
 this.age = age;
 this.msg = function () {
 console.log("名字：" + this.name + "年龄：" + this.age);
 }
 }

 var user = new User("吕鹏", 26);

 user.msg();

 user.tity = "北京";


 function SuperType() {
 this.name = "super";
 this.age = 23;
 }

 function SubType() {
 this.name = "sub";
 }


 SubType.prototype = new SuperType();


 var mSub = new SubType();

 console.log("年龄" + mSub.age);*/

//借用构造函数

/*function SuperType1() {
 this.name = "super1";
 this.age = 23;
 this.country = "中国";
 this.sayMsg = function () {

 console.log("SuperType1:" + this.name + " " + this.country);
 }
 }

 function SubType1() {
 SuperType1.call(this);
 this.name = "sub1";

 }

 var mSub1 = new SubType1();
 console.log(mSub1.name + ":" + mSub1.age + ":" + mSub1.sayMsg());*/





//组合继承

function SuperType(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
    this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function () {

    console.log("名字" + this.name);
}

function SubType(name, age) {

    this.country = "美国";

    SuperType.call(this, name, age, this.country)

}

SubType.prototype = new SuperType();

SubType.prototype.sayMsg = function () {

    console.log("姓名：" + this.name + "年龄：" + this.age + "国家：" + this.country);


}


var sub = new SubType("lvpeng", 25);

sub.sayName();
sub.sayMsg();


//闭包


function f1() {

    var n = 100;

    function f2() {

        var m = 10;

        console.log("f2  m:" + m);
        console.log("f2  n:" + n);
    }

    return f2;
}


var result = f1();


result();

/*
 function f1(){
 var n=999;
 nAdd=function(){n+=1}
 function f2(){
 alert(n);
 }
 return f2;
 }
 var result=f1();
 result(); // 999
 nAdd();
 result(); // 1000*/

