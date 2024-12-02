import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { ServiceItems } from '../corporate/corporate.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-details',
  imports: [MatIconModule, CommonModule],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.css'
})
export class ServiceDetailsComponent implements OnInit{
  public details: any = {};

  constructor(private route: ActivatedRoute) {}

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
}
