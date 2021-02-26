const registerdata =(data)=>{
     let from = new FormData();
    from.append("server_key","5bda6652fe66a3e69331fb4d655db3ba")
    from.append("username",data.name);
    from.append("email",data.email);
    from.append("password",data.password);
    from.append("confirm_password",data.confirm_password);
    return from;
}; 

const getdata=(data)=>{
//    data = test(data)
    fetch(url,{
        method:"POST",
        body:data,

        // server_key:'server_key'
    }).then(response => response.json())
    .then(data => console.log(data));
  
};

const logindata=(data)=>{
    let from = new FormData();
    from.append("server_key","5bda6652fe66a3e69331fb4d655db3ba")
    from.append("username",data.name);   
    from.append("password",data.password);
    // fetch(url,{
    //     method:"POST",
    //     body:from,

    //     // server_key:'server_key'
    // })
    // .then(response => response.json())
    // .then(data => console.log(data));
    return from;
}
export {registerdata,logindata};

//            "server_key":'5bda6652fe66a3e69331fb4d655db3ba'