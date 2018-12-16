import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { RouterModule } from '@angular/router';
import { MessageComponent } from './message.component';
import { MessageService } from './message.service';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: 'messages', component: MessageComponent, outlet: 'popup'}
    ])
  ],
  declarations: [ MessageComponent],
  providers: [MessageService]
})
export class MessageModule { }
