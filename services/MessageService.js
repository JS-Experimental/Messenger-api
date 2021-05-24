import {MessageModel} from "../model/MessageModel.js";

export const createNewMessage = (messageText) => {
    try {
        MessageModel.build({
            messageText,
            senderImage: "https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg",
            sender: "others"
        }).save();
    }
    catch (e) {
        console.log(e);
    }
}

export const getAllMessages = () => {
    return MessageModel.findAll();
}