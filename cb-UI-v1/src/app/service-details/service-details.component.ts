import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { ServiceItems } from '../corporate/corporate.component';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-service-details',
  imports: [MatIconModule, CommonModule, FormsModule],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.css'
})
export class ServiceDetailsComponent implements OnInit{
  public details: any = {};

  constructor(private http: HttpClient, private route: ActivatedRoute) {

  }
  popupMessage: any;
  showPopup: boolean = false;

  ngOnInit(): void {
    // Fetch the 'id' parameter from the route
    let centerId = this.route.snapshot.paramMap.get('id');
    
    console.log('Health Center ID:', centerId);

    // If the parameter can change dynamically, subscribe to route params
    this.route.paramMap.subscribe(params => {
      centerId = params.get('id');
      console.log('Updated Health Center ID:', centerId);
      this.details = ServiceItems.find(it=>it.id === centerId)
    });
  }

  onSubmit(form: NgForm) {
    const { name, email, phone, location } = form.value; // Fetch form data
    this.http.post("http://65.1.91.144:8081/api/send-email", {
      name: name + "-----/phone:" + (phone ? phone: "N/A") + "-----/location:" + location + "-----/service:"+ this.details.title,
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
