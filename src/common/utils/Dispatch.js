
export function dispatchAction(type,payload,dispatch){
    console.log(type,payload,"lllll")
    dispatch ({
        type : type ,
        payload : payload ,
    })
    return ;
}