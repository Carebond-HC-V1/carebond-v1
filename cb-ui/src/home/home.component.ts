import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [  RouterModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  popupMessage: any;
  showPopup: boolean = false;
  constructor(private http: HttpClient, private router: Router) {

  }
  onSubmit(form: NgForm) {
    const { name, email, phone } = form.value; // Fetch form data
    this.http.post("http://65.1.91.144:8081/api/send-email", {
      name: "name:"+ name + "phone:" + phone?phone: "N/A",
      mail: email
    }).subscribe(()=>{
      this.popupMessage = `Hello ${name}, someone from our team will shortly contact.`;
      this.showPopup = true;
      setTimeout(() => {
        this.showPopup = false;
      }, 10000);
    })
    form.reset();
  }

  closePopup(): void{
    this.showPopup = false;
  }

}
