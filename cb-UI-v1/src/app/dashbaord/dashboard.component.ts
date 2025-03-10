import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { Router, RouterModule } from "@angular/router";
import { NgxChartsModule } from '@swimlane/ngx-charts'; // Import ngx-charts
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@Component({
  selector: "app-dashboard",
  imports: [
    RouterModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    NgxChartsModule,
    CommonModule, MatSidenavModule, MatListModule,MatProgressBarModule
  ],
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.css",
})
export class DashboardComponent {
  constructor(private http: HttpClient, private router: Router) {}
  totalEmployees = 40;
  bookedServices = 30;
  completedServices = 20;
  pendingServices = this.bookedServices - this.completedServices;

  heatmapData = [
    {
      name: 'Annual Checkups',
      series: [
        { name: 'Utilized', value: 120 },
        { name: 'Remaining', value: 80 }
      ]
    },
    {
      name: 'Health Vouchers',
      series: [
        { name: 'Utilized', value: 80 },
        { name: 'Remaining', value: 20 }
      ]
    },
    {
      name: 'Medical Consultations',
      series: [
        { name: 'Utilized', value: 60 },
        { name: 'Remaining', value: 90 }
      ]
    }
  ];
  employees = [
    { id: 1, name: 'John Doe', status: 'Completed', diagnosis: 'Healthy' },
    { id: 2, name: 'Jane Smith', status: 'Pending', diagnosis: 'High BP' },
    { id: 3, name: 'Alice Brown', status: 'Booked', diagnosis: 'Diabetes' },
    { id: 4, name: 'Robert Johnson', status: 'Completed', diagnosis: 'Healthy' },
    { id: 5, name: 'Emily Davis', status: 'Pending', diagnosis: 'Asthma' },
    { id: 6, name: 'Michael Wilson', status: 'Booked', diagnosis: 'Heart Disease' },
    { id: 7, name: 'Sarah Miller', status: 'Completed', diagnosis: 'Healthy' },
    { id: 8, name: 'David Anderson', status: 'Pending', diagnosis: 'Obesity' },
    { id: 9, name: 'Laura Thomas', status: 'Booked', diagnosis: 'Diabetes' },
    { id: 10, name: 'James Martinez', status: 'Completed', diagnosis: 'Healthy' },
    { id: 11, name: 'Sophia White', status: 'Pending', diagnosis: 'Allergy' },
    { id: 12, name: 'Daniel Harris', status: 'Booked', diagnosis: 'Cholesterol' },
    { id: 13, name: 'Olivia Clark', status: 'Completed', diagnosis: 'Healthy' },
    { id: 14, name: 'Ethan Lewis', status: 'Pending', diagnosis: 'Migraine' },
    { id: 15, name: 'Emma Walker', status: 'Booked', diagnosis: 'Arthritis' },
    { id: 16, name: 'Lucas Hall', status: 'Completed', diagnosis: 'Healthy' },
    { id: 17, name: 'Ava Allen', status: 'Pending', diagnosis: 'Stress' },
    { id: 18, name: 'Mason Young', status: 'Booked', diagnosis: 'Hypertension' },
    { id: 19, name: 'Isabella King', status: 'Completed', diagnosis: 'Healthy' },
    { id: 20, name: 'William Wright', status: 'Pending', diagnosis: 'Thyroid Issues' },
    { id: 21, name: 'Charlotte Scott', status: 'Booked', diagnosis: 'Obesity' },
    { id: 22, name: 'Henry Green', status: 'Completed', diagnosis: 'Healthy' },
    { id: 23, name: 'Amelia Baker', status: 'Pending', diagnosis: 'Anemia' },
    { id: 24, name: 'Benjamin Adams', status: 'Booked', diagnosis: 'Liver Disease' },
    { id: 25, name: 'Mia Nelson', status: 'Completed', diagnosis: 'Healthy' },
    { id: 26, name: 'Jack Carter', status: 'Pending', diagnosis: 'Hypertension' },
    { id: 27, name: 'Harper Mitchell', status: 'Booked', diagnosis: 'Osteoporosis' },
    { id: 28, name: 'Elijah Perez', status: 'Completed', diagnosis: 'Healthy' },
    { id: 29, name: 'Evelyn Roberts', status: 'Pending', diagnosis: 'Chronic Pain' },
    { id: 30, name: 'Alexander Turner', status: 'Booked', diagnosis: 'Allergy' },
    { id: 31, name: 'Scarlett Phillips', status: 'Completed', diagnosis: 'Healthy' },
    { id: 32, name: 'Jacob Campbell', status: 'Pending', diagnosis: 'Asthma' },
    { id: 33, name: 'Madison Parker', status: 'Booked', diagnosis: 'Diabetes' },
    { id: 34, name: 'Michael Evans', status: 'Completed', diagnosis: 'Healthy' },
    { id: 35, name: 'Abigail Edwards', status: 'Pending', diagnosis: 'High BP' },
    { id: 36, name: 'Daniel Collins', status: 'Booked', diagnosis: 'Depression' },
    { id: 37, name: 'Sofia Stewart', status: 'Completed', diagnosis: 'Healthy' },
    { id: 38, name: 'Matthew Morris', status: 'Pending', diagnosis: 'Obesity' },
    { id: 39, name: 'Chloe Rogers', status: 'Booked', diagnosis: 'Heart Disease' },
    { id: 40, name: 'Joshua Reed', status: 'Completed', diagnosis: 'Healthy' }
  ];
  services = [
    { name: 'Annual Checkups', usage: 120, total: 200 },
    { name: 'Health Vouchers', usage: 80, total: 100 },
    { name: 'Medical Consultations', usage: 60, total: 150 }
  ];

  getUtilizationPercentage(service: any): number {
    return (service.usage / service.total) * 100;
  }
  // view: [number, number] = [900, 400]; // Chart size

  chartData = [
    { name: 'Completed Service Engagements', value: 40 },
    { name: 'Pending Service Utilizations', value:  20},
  ];

  colorScheme: Color = {
    domain: ['#0b1059', '#5bc0eb'], // Your custom colors
    group: ScaleType.Ordinal, // Required property
    selectable: true, // Optional but recommended
    name: 'customScheme' // Unique name for the scheme
  };


  menuClick(str: string): void {
    console.log(str);
    
  }
}
