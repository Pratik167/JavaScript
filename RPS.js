max =3;
let ranNum= Math.random()*max;
let num= Math.floor(ranNum);
let arr= ["rock","paper","scissor"];


const readline = require("readline")
const input=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(m)
{
    let n=m;
switch(n)
{
case "1":
        {
            function ask(name)
{
console.log("you picked:",name);
console.log("CPU picked:",arr[num]);

if((name=="scissor"&&arr[num]=="paper") || (name=="rock"&&arr[num]=="scissor") || (name=="paper"&&arr[num]=="rock"))
{
    console.log("U win ma nig");
}
else if(name==arr[num])
{
    console.log("u draw ma nig");
}
else
{
    console.log("u lose ma nig");
};
}
input.question("rock paper scissor:",ask);
        break;
    }



case "2":
        {
            function ask(name)
{
console.log("you picked:",name);
// console.log("CPU picked:",arr[num]);

if((name=="scissor"))
{
    console.log("Cpu picked rock")
    console.log("U lose ma nig");
}
else if(name=="rock")
{
    console.log("Cpu picked paper")
    console.log("U lose ma nig");
}
else
{
    console.log("Cpu picked scissor")
    console.log("U lose ma nig");
};
}
input.question("rock paper scissor:",ask);
break;}

case "3":
{
            function ask(name)
{
console.log("you picked:",name);
// console.log("CPU picked:",arr[num]);

if((name=="scissor"))
{
    console.log("Cpu picked paper")
    console.log("U win ma nig");
}
else if(name=="rock")
{
    console.log("Cpu picked scissor")
    console.log("U win ma nig");
}
else
{
    console.log("Cpu picked rock")
    console.log("U win ma nig");
};
}
input.question("rock paper scissor:",ask);
break;}
}
}
console.log("---------RPS---------");
console.log("---------1.Normal---------");
console.log("---------2.You aint winning brub---------");
console.log("---------3.You always winning brub---------");
input.question("---------Pick:",ask);


// function ask(name)
// {
// console.log("you picked:",name);
// console.log("CPU picked:",arr[num]);

// if((name=="scissor"&&arr[num]=="paper") || (name=="rock"&&arr[num]=="scissor") || (name=="paper"&&arr[num]=="rock"))
// {
//     console.log("U win ma nig");
// }
// else if(name==arr[num])
// {
//     console.log("u draw ma nig");
// }
// else
// {
//     console.log("u lose ma nig");
// };
// }
// input.question("rock paper scissor:",ask);