import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthService){

  }
  title = 'heroesApp';

  // ngOnInit(): void {
  //   this.authService.checkAuthentication()
  //   .subscribe(()=>{
  //     console.log('check authentication')
  //   })

  // }
}
