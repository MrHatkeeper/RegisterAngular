import { Component } from '@angular/core';
import {NevimJakBySeMelaMenovatService} from "./nevim-jak-by-se-mela-menovat.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Register';

  nickname = '';
  password = '';
  send = false;
  age = 0;

  constructor(private apiService: NevimJakBySeMelaMenovatService){
  }

  addUser(): void {
    this.send = true;
    this.apiService.createPlayer(this.nickname, this.password).subscribe((data) => {
      console.log(data);
    });
  }
}
