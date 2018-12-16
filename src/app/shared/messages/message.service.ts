import { Injectable } from "@angular/core";

@Injectable()

export class MessageService {
    private messages: string[] = [];
    isDisplayed = false;

    addMessage(message: string){
        let currentDate = new Date();
        this.messages.unshift(message + ' vào ' + currentDate.toLocaleString());
    }
    deleteMessage(){
        this.messages.splice(0,this.messages.length);
    }
}