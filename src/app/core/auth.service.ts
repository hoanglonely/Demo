import { Injectable } from "@angular/core";
import { IUser } from "../user/user";
import { MessageService } from "../shared/messages/message.service";

@Injectable()
export class AuthService {
    currentUser: IUser;
    redirectUrl: string;

    constructor(private messageService: MessageService) { }

    isLoggedIn(): boolean {
        return !!this.currentUser;
    }

    login(userName: string, password: string) {
        if (!userName || !password) {
            this.messageService.addMessage('Vui lòng nhập tên đăng nhập và mật khẩu của bạn');
            return;
        }
        if (userName === 'hoangdeptrai') {
            this.currentUser = {
                id: 1,
                userName: userName,
                isAdmin: true
            };
            this.messageService.addMessage('Hoàng đã đăng nhập!');
            return;
        }
        this.currentUser = {
            id: 2,
            userName: userName,
            isAdmin: false
        };
        this.messageService.addMessage(`User: ${this.currentUser.userName} đã đăng nhập`)
    }

    logout() {
        this.currentUser = null;
    }
}