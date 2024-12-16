import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { Router, RouterModule } from "@angular/router";
export const ServiceItems = [
  {
    id: "CB10000",
    title: "Comprehensive Health Check-ups and Targeted Screenings",
    icon: "monitor_heart", // Material icon
    description:
      "At CareBond, we deliver Comprehensive Health Check-ups and Targeted Screenings designed to empower individuals and organizations with actionable health insights. Through a holistic approach, we address every aspect of health, from early detection to ongoing care, enabling proactive well-being management.",
    offers: {
      title: "Comprehensive Health Check-ups",
      description:
        "A detailed evaluation of overall health and wellness, ensuring a proactive approach to maintaining health.",
    },
    inclusions: [
      "- Medical history reviews, physical examinations, and advanced diagnostic tests.",
      "- Tailored packages for individuals, families, and corporate employees.",
      "- Flexible options for Center Visits, On-site Services, and Home Sample Collection.",
    ],
    specializedPackages: [
      {
        title: "Annual Health Check-ups:",
        description:
          " Early detection of health risks for continued well-being.",
        caseStudy:
          " ABC Tech Pvt. Ltd. partnered with CareBond for annual employee health check-ups. With a 90% participation rate, the program identified key health risks early, leading to a 25% reduction in absenteeism.",
      },
      {
        title: "Pre-Employment Health Check-ups:",
        description:
          " Early detection of health risks for continued well-being.",
        caseStudy:
          " XYZ Logistics utilized pre-employment screenings to assess fitness for high-demand roles, resulting in improved workplace safety metrics by 40%.",
      },
      {
        title: "Pre- and Post-Policy Health Check-ups:",
        description:
          " Early detection of health risks for continued well-being.",
        caseStudy:
          " An insurance client streamlined its policy issuance process with CareBond’s pre-policy health check-ups, reducing turnaround times by 30%.",
      },
    ],
  },
  {
    id: "CB10001",
    title: "CareBond SOS BUTTON",
    icon: "emergency", // Material icon
    description:
      "Seamlessly integrates with various platforms, including Android & iOS devices, apps, and IoT devices...",
  },
  {
    id: "CB10002",
    title: "CareBond FAMILY PROTECT",
    icon: "family_restroom", // Material icon
    description:
      "Monthly and annual subscriptions tailored for families residing in India, including NRIs and Indians living away...",
  },
  {
    id: "CB10003",
    title: "CareBond CLINICS AND OHCS",
    icon: "local_hospital", // Material icon
    description:
      "Specializes in setting up Onsite Health Clinics and Occupational Health Centers tailored to client needs...",
  },
  {
    id: "CB10004",
    title: "CareBond TRAININGS",
    icon: "school", // Material icon
    description:
      "Immersive training programs encompassing CPR, first aid, and more to equip individuals with life-saving skills...",
  },
  {
    id: "CB10005",
    title: "CareBond DIAGNOSTICS SUPPORT",
    icon: "science", // Material icon
    description:
      "Tailor-made diagnostic solutions for corporates, facilitating timely detection and intervention...",
  },
  {
    id: "CB10006",
    title: "CareBond TELEMEDICINE",
    icon: "videocam", // Material icon
    description:
      "Virtual consultations with qualified medical professionals to ensure healthcare accessibility...",
  },
  {
    id: "CB10007",
    title: "CareBond PHARMACY SERVICES",
    icon: "local_pharmacy", // Material icon
    description:
      "On-demand delivery of medicines and pharmaceutical products, supporting chronic and emergency needs...",
  },
];

@Component({
  selector: "app-corporate",
  imports: [
    RouterModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
  ],
  templateUrl: "./corporate.component.html",
  styleUrl: "./corporate.component.css",
})
export class CorporateComponent {
  items = ServiceItems;
  constructor(private http: HttpClient, private router: Router) {}

  openCard(item: any): void {
    this.router.navigate(["/corporate/details/" + item.id]);
  }
}
