const {axiosInstancs}=require('./axios');

function sendMessage(messageObj,messageText,chatid){
    return axiosInstancs.get("sendMessage",{
        chat_id:chatid,
        text:messageText
    });
}




  function handleMessage(messageObj){
    const messageText=messageObj.text;
    const chatid=messageText.substring(0, 10);
    const message=messageText.substring(10);
    console.log(chatid);
    console.log(message);
    console.log(messageText);

    if(messageText.charAt(0)==='/'){
        const command=messageText.substr(1);
        switch(command){
            case "start" :
            return sendMessage(
                messageObj,message,chatid
            );
            default:
                return sendMessage(messageObj,"I am not set",chatid);
        }

    }
    else{
        
      
        
        return sendMessage(messageObj,message,chatid);
    }
}


module.exports={handleMessage};