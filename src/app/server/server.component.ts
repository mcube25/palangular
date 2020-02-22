
import {Component, OnInit} from '@angular/core'
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit{
    serverID =10;
    serverStatus: string ='offline';
    comeOnLine: string ='click below'
allowNewServer = false;
serverName = 'hello';
serverCreationStatus ='no server was created';
serverCreated = false;
    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online':'offline';
        setTimeout(()=>{
      this.allowNewServer = true;
        }, 2000)
    }
ngOnInit(){}
onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus='server was created !!'+ this.serverName};
    onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
    }

getServerStatus(){
    return this.comeOnLine;
}
getColor(){
    return this.serverStatus === 'online'? 'green':'red';
}
}