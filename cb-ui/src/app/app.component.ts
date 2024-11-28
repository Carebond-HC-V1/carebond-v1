// app.component.ts
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule, HttpClientModule, CommonModule],
  
})
export class AppComponent {
  popupMessage: any;
  showPopup: boolean = false;
  constructor(private http: HttpClient) {

  }
  // onSubmit(data: any) {
  //   console.log(data);
    
  //   this.http.post("/api/send-email", {
  //     name: "simadri",
  //     mail: "simadrig75@gmail.com"
  //   }).subscribe()
  // }

  onSubmit(form: NgForm) {
    const { name, email } = form.value; // Fetch form data
    this.http.post("http://65.1.91.144:8081/api/send-email", {
      name: name,
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
