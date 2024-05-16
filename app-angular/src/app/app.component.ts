import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { HubService } from './services/hub.service';
HubService


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,FormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-chat';
  private hubService: HubService;
  public mensagens: string[] = [];
  public novaMensagem: string = "";
  
  constructor() {
    this.hubService = new HubService()
   console.log(this.hubService.mensagens);
   
    this.mensagens = this.hubService.mensagens
    this.novaMensagem = this.hubService.novaMensagem

}

enviarMensagem() {
    this.novaMensagem= this.hubService.enviarMensagem(this.novaMensagem)
}


}
