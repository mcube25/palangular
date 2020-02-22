
import {Component, OnInit} from '@angular/core'
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit{

allowNewServer = false;
serverName = 'hello';
serverCreationStatus ='no server was created';
    constructor(){
        setTimeout(()=>{
      this.allowNewServer = true;
        }, 2000)
    }
ngOnInit(){}
onCreateServer(){
    this.serverCreationStatus='server was created !!'+ this.serverName};
    onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
    }
    serverID =10;
serverStatus: string ='offline';
comeOnLine: string ='click below'

getServerStatus(){
    return this.comeOnLine;
}
}