export const user ={
    name:"Rishi@1709",
    email:"rishistack17@gmail.com"
}
let users =[

];

function Validate  (data){
    if (find(data)){
        return true
    };
    return false;
}


const find = (data)=>{
    let res = false;
    if (users.length>=1){
        for ( let i =0;i<users.length;i++){
            if (users[i].name==data.name && users[i].password == data.password){
                res = true
            };
        };
    }
    
    return res
};
const Adduser=(data)=>{
    // if (users.length >=1){
    //     user.forEach(element => {
    //         if (element.name == data.name){
    //             return "user is already registeed"
    //         }else{
    //             users.push(data)
    //             return "ok"
    //         };
    //     });
    // }else{
    //     users.push(data)
    //     return "ok"
    // };
    let res = "ok"
    if (!find(data)){
        users.push(data)
        res =  "ok"
    }else{
        res = "already present"
    };
    return res
    
};

export {Validate,Adduser};
