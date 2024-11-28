// app.component.ts
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule, HttpClientModule],
  
})
export class AppComponent {
  constructor(private http: HttpClient){

  }
  onSubmit(data: any) {
    console.log(data);
    
    this.http.post("/api/send-email", {
      name: "simadri",
      mail: "simadrig75@gmail.com"
    }).subscribe()
  }
}
