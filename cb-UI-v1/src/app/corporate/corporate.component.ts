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
    "id": "CB10000",
    "title": "Comprehensive Health Check-ups and Targeted Screenings",
    "icon": "monitor_heart",
    "description": "At CareBond, we deliver Comprehensive Health Check-ups and Targeted Screenings designed to empower individuals and organizations with actionable health insights. Through a holistic approach, we address every aspect of health, from early detection to ongoing care, enabling proactive well-being management.",
    "offers": [
      {
        "title": "Comprehensive Health Check-ups",
        "description": "A detailed evaluation of overall health and wellness, ensuring a proactive approach to maintaining health.",
        "content": [
          {
            "title": "Inclusions",
            "data": [
              "- Medical history reviews, physical examinations, and advanced diagnostic tests.",
              "- Tailored packages for individuals, families, and corporate employees.",
              "- Flexible options for Center Visits, On-site Services, and Home Sample Collection."
            ]
          },
          {
            "title": "Specialized Packages:",
            "data": [
              {
                "title": "Annual Health Check-ups:",
                "decription": "Early detection of health risks for continued well-being.",
                "data": [
                  {
                    "title": "Case Study:",
                    "decription": "ABC Tech Pvt. Ltd. partnered with CareBond for annual employee health check-ups. With a 90% participation rate, the program identified key health risks early, leading to a 25% reduction in absenteeism."
                  }
                ]
              },
              {
                "title": "Pre-Employment Health Check-ups:",
                "description": " Early detection of health risks for continued well-being.",
                "data": [
                  {
                    "title": "Case Study:",
                    "decription": "XYZ Logistics utilized pre-employment screenings to assess fitness for high-demand roles, resulting in improved workplace safety metrics by 40%."
                  }
                ]
              },
              {
                "title": "Pre- and Post-Policy Health Check-ups:",
                "description": " Early detection of health risks for continued well-being.",
                "data": [
                  {
                    "title": "Case Study:",
                    "decription": "An insurance client streamlined its policy issuance process with CareBond’s pre-policy health check-ups, reducing turnaround times by 30%."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "title": "Targeted Screenings",
        "description": "Focused diagnostic services to detect diseases and risk factors early, promoting long-term health management.",
        "content": [
          {
            "title": "Screening Types:",
            "data": [
              "Lifestyle screenings (diabetes, hypertension, cholesterol).",
              "Cancer detection screenings (mammograms, Pap smears, prostate exams).",
              "Regular health monitoring for occupational and age-specific risks."
            ]
          },
          {
            "title": "Case Study",
            "description": "LMN Manufacturing implemented regular cholesterol and hypertension screenings for its factory workers. The initiative improved early detection rates and reduced health emergencies by 50%."
          }
        ]
      }
    ],
    "whyChoose": [
      {
        "title": "Holistic Care:",
        "description": "Comprehensive assessments tailored to individual and organizational needs."
      },
      {
        "title": "Flexibility:",
        "description": "Choose between center visits, on-site check-ups, or home sample collection for convenience."
      },
      {
        "title": "Advanced Diagnostics:",
        "description": "Leverage cutting-edge technology for precise and reliable results."
      },
      {
        "title": "Preventive Focus:",
        "description": "Reduce long-term healthcare costs with early detection and intervention."
      },
      {
        "title": "Expert Team:",
        "description": "A panel of experienced doctors and certified diagnostic specialists ensures the highest quality care."
      }
    ],
    "benefits": [
      {
        "title": "or Individuals and Families:",
        "data": [
          "Proactive health management.",
          "Peace of mind with early risk detection."
        ]
      },
      {
        "title": "For Organizations:",
        "data": [
          "Improved workplace wellness.",
          "Reduced absenteeism and higher productivity."
        ]
      },
      {
        "title": "For Policyholders and Applicants:",
        "data": [
          "Seamless pre- and post-policy health check-ups.",
          "nhanced user experience with personalized health reports."
        ]
      }
    ],
    "whoBenefits": [
      {
        "title": "Corporate Employees",
        "description": "Enhance workplace health with customized programs.",
        "data": [
          {
            "title": "Example:",
            "description": "A finance firm integrated annual health check-ups into its employee benefits, leading to a 20% increase in staff retention."
          }
        ]
      },
      {
        "title": "Individuals & Families",
        "description": "Manage health proactively with personalized assessments.",
        "data": [
          {
            "title": "Example:",
            "description": "A family availed of CareBond’s services for their routine check-ups, enabling early intervention for a cardiac issue in the father."
          }
        ]
      },
      {
        "title": "Policyholders & Applicants",
        "description": "Simplify health-related policy approvals with targeted screenings.",
        "data": [
          {
            "title": "Example:",
            "description": "An applicant reduced processing times for their insurance application by opting for CareBond’s pre-policy health check-up."
          }
        ]
      },
      {
        "title": "Senior Citizens:",
        "description": "Specialized care addressing age-related health concerns.",
        "data": [
          {
            "title": "Example:",
            "description": "CareBond’s geriatric health package helped a retired couple manage chronic conditions effectively, ensuring better quality of life."
          }
        ]
      }
    ],
    "yourHealthYourWay": "At CareBond, we ensure a seamless experience with options for Center Visits, On-site Services, and Home Sample Collection. Whether it’s Annual Health Check-ups, Pre-Employment Assessments, or Policy Health Screenings, we make it easy to prioritize your health.",
    "contactus": [
      "Take charge of your health with CareBond. Schedule your health check-up or targeted screening today and experience the difference.",
      "Would you like any further customization or additional case studies added to this?"
    ]
  },
  {
    "id": "CB10001",
    "title": "Workplace Safety and Occupational Health Services",
    "icon": "health_and_safety",
    "description": "At CareBond, we deliver Workplace Safety, Emergency Care Services, and Occupational Health Centers to ensure a healthier, safer, and more productive work environment. With tailored programs, expert professionals, and advanced facilities, we empower organizations to enhance employee well-being and minimize workplace risks.",
    "offers": [
      {
        "title": "Comprehensive Emergency Response Services",
        "description": "Preparedness and rapid response to workplace emergencies through tailored solutions.",
        "content": [
          {
            "title": "Ambulance Services",
            "data": [
              "- 24/7 ambulance support for on-site emergencies.",
              "- Fully equipped vehicles staffed by trained paramedics."
            ]
          },
          {
            "title": "On-Site Medical Facilities and OHCs",
            "data": [
              "- Fully operational Occupational Health Centers for regular medical care, health surveillance, and emergency response.",
              "- Staffed with experienced healthcare professionals, including doctors and paramedics."
            ]
          },
          {
            "title": "Emergency Preparedness Training",
            "data": [
              "- Mock drills, fire safety training, and evacuation plans tailored to your workplace."
            ]
          },
          {
            "title": "Case Study",
            "description": "XYZ Engineering Ltd. partnered with CareBond to set up an Occupational Health Center, reducing response time to injuries and minimizing downtime by 40%."
          }
        ]
      },
      {
        "title": "Workplace Hazard Assessment and Safety Audits",
        "description": "Identifying and mitigating risks to create a safer work environment.",
        "content": [
          {
            "title": "Hazard Identification",
            "data": [
              "- Comprehensive evaluation of workplace risks and potential hazards."
            ]
          },
          {
            "title": "Safety Compliance",
            "data": [
              "- Assistance in meeting industry regulations and certifications, including OHS standards."
            ]
          },
          {
            "title": "OHC Integration",
            "data": [
              "- Setting up Occupational Health Centers to monitor and address health risks effectively."
            ]
          },
          {
            "title": "Case Study",
            "description": "LMN Manufacturing partnered with CareBond for a hazard assessment and established an on-site OHC, leading to a 50% reduction in workplace incidents."
          }
        ]
      },
      {
        "title": "First Aid, CPR, and AED Training",
        "description": "Empowering employees with life-saving skills for emergency situations.",
        "content": [
          {
            "title": "Basic First Aid Training",
            "data": [
              "- Training to manage common injuries such as cuts, burns, and fractures."
            ]
          },
          {
            "title": "CPR and AED Training",
            "data": [
              "- Teaching employees to perform CPR and use automated external defibrillators effectively."
            ]
          },
          {
            "title": "OHC Support",
            "data": [
              "- OHC staff provide regular health awareness sessions and training."
            ]
          },
          {
            "title": "Case Study",
            "description": "At PQR Enterprises, an employee saved a life during a cardiac arrest thanks to CPR and AED training provided by CareBond."
          }
        ]
      },
      {
        "title": "Incident Reporting and Post-Emergency Support",
        "description": "Facilitating effective recovery and learning from workplace incidents.",
        "content": [
          {
            "title": "Incident Documentation and Analysis",
            "data": ["- Detailed root-cause analysis and actionable insights."]
          },
          {
            "title": "Post-Incident Counseling",
            "data": ["- Psychological support for affected employees."]
          },
          {
            "title": "Reintegration Support via OHCs",
            "data": [
              "- Seamless return-to-work plans managed by OHC professionals."
            ]
          },
          {
            "title": "Case Study",
            "description": "STU Logistics relied on CareBond's OHC services for post-incident care, ensuring injured employees received counseling and rehabilitation plans."
          }
        ]
      },
      {
        "title": "Industry-Specific OHC Solutions",
        "description": "Custom Occupational Health Centers for unique industry needs.",
        "content": [
          {
            "title": "Manufacturing and Warehousing",
            "data": [
              "- Addressing machinery hazards, ergonomic issues, and chemical exposures."
            ]
          },
          {
            "title": "Corporate Offices",
            "data": [
              "- Focusing on stress management, ergonomics, and first-aid readiness."
            ]
          },
          {
            "title": "Healthcare Facilities",
            "data": [
              "- Specialized training for infection control and biohazard safety."
            ]
          },
          {
            "title": "Case Study",
            "description": "DEF Pharma partnered with CareBond to integrate OHCs for regular check-ups and biohazard safety training, achieving 100% compliance with safety standards."
          }
        ]
      }
    ],
    "whyChoose": [
      {
        "title": "Comprehensive OHC Services",
        "description": "Fully operational centers for health surveillance, injury management, and routine care."
      },
      {
        "title": "Proactive Safety Culture",
        "description": "Preventive health measures through workplace assessments and safety training."
      },
      {
        "title": "Expert Teams",
        "description": "Certified professionals with expertise in workplace safety, emergency care, and occupational health."
      },
      {
        "title": "Compliance Assurance",
        "description": "Support to meet national and international health and safety regulations."
      },
      {
        "title": "Customizable Programs",
        "description": "Tailored to industry-specific challenges and organizational goals."
      }
    ],
    "benefits": [
      {
        "title": "For Employees",
        "data": [
          "A safer, healthier workplace with access to immediate medical care and regular health monitoring.",
          "Reduced stress and enhanced well-being."
        ]
      },
      {
        "title": "For Organizations",
        "data": [
          "Improved employee satisfaction and retention.",
          "Lower healthcare costs and minimized workplace incidents.",
          "Enhanced compliance with safety and occupational health standards.",
          "Build a safer, healthier workplace with CareBond’s services."
        ]
      }
    ],
    "contactUs": [
      "Contact us today to explore customized safety and health programs for your organization."
    ]
  },
  {
    "id": "CB10003",
    "title": "Patient Management Services",
    "icon": "health_and_safety",
    "description": "At CareBond, we go beyond diagnostics to offer comprehensive Patient Management Services designed to ensure continuity of care, better health outcomes, and patient satisfaction. Our structured approach provides personalized support, proactive interventions, and seamless care coordination across every stage of a patient’s health journey.",
    "offers": [
      {
        "title": "End-to-End Patient Management",
        "description": "Streamlined care management solutions for timely, consistent, and high-quality healthcare.",
        "content": [
          {
            "title": "Inclusions",
            "data": [
              "- Personalized health profiles and care plans.",
              "- Continuous monitoring for chronic conditions (e.g., diabetes, hypertension).",
              "- Dedicated health coordinators for appointment scheduling, follow-ups, and medication tracking.",
              "- Integration of health records for transparency and easy access."
            ]
          },
          {
            "title": "Specialized Solutions",
            "data": [
              {
                "title": "Chronic Disease Management",
                "description": "Tailored programs for managing chronic illnesses to improve quality of life and reduce hospitalizations.",
                "data": [
                  {
                    "title": "Case Study",
                    "description": "DEF Pharma partnered with CareBond to implement a diabetes management program for its employees. The initiative reduced uncontrolled diabetes cases by 35% within 12 months."
                  }
                ]
              },
              {
                "title": "Post-Treatment Care Plans",
                "description": "Structured follow-up services to ensure adherence to treatment plans and recovery timelines.",
                "data": [
                  {
                    "title": "Case Study",
                    "description": "CareBond’s post-operative care management helped a patient recovering from orthopedic surgery achieve full mobility within half the expected recovery period."
                  }
                ]
              },
              {
                "title": "Senior Citizen Care Management",
                "description": "Comprehensive health tracking, medication management, and regular screenings to support senior citizens in maintaining active lifestyles.",
                "data": [
                  {
                    "title": "Case Study",
                    "description": "A retired couple enrolled in CareBond’s geriatric care management program saw a 40% improvement in their overall health markers."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "title": "Home-Based Patient Management",
        "description": "Delivering care directly to patients in the comfort of their homes, ensuring convenience without compromising quality.",
        "content": [
          {
            "title": "Inclusions",
            "data": [
              "- Home-based sample collection and routine health monitoring.",
              "- Regular virtual consultations with doctors and specialists.",
              "- Remote diagnostics using advanced technologies (e.g., portable ECG, home glucose monitors)."
            ]
          },
          {
            "title": "Case Study",
            "description": "PQR Healthcare integrated CareBond’s home management program for bedridden patients, enabling improved care delivery and reducing hospitalization rates by 30%."
          }
        ]
      },
      {
        "title": "Health Risk Assessments and Interventions",
        "description": "Advanced screening tools and proactive health assessments to identify risks early and offer personalized interventions.",
        "content": [
          {
            "title": "Inclusions",
            "data": [
              "- Comprehensive risk analysis for lifestyle and occupational health.",
              "- Early detection tools for chronic illnesses (diabetes, hypertension, cholesterol).",
              "- Immediate intervention plans, including lifestyle counseling and diet management."
            ]
          },
          {
            "title": "Case Study",
            "description": "STU Industries conducted targeted hypertension risk assessments through CareBond, resulting in a 50% reduction in workplace emergencies."
          }
        ]
      }
    ],
    "whyChoose": [
      {
        "title": "Personalized Care",
        "description": "Tailored patient plans to meet unique health needs."
      },
      {
        "title": "Seamless Coordination",
        "description": "From appointments to follow-ups, we ensure a smooth healthcare experience."
      },
      {
        "title": "Advanced Monitoring",
        "description": "Leveraging technology for real-time health tracking and timely interventions."
      },
      {
        "title": "Preventive Approach",
        "description": "Reducing long-term healthcare costs with proactive management and risk assessments."
      },
      {
        "title": "Expert Panel",
        "description": "A team of certified specialists and care coordinators to provide ongoing support."
      }
    ],
    "benefits": [
      {
        "title": "For Individuals & Families",
        "data": [
          "Proactive care for better health outcomes.",
          "Convenient home-based services for time savings.",
          "Early detection and management of health risks."
        ]
      },
      {
        "title": "For Organizations",
        "data": [
          "Improved employee health, leading to higher productivity.",
          "Customized chronic disease management programs.",
          "Reduced medical emergencies and absenteeism."
        ]
      },
      {
        "title": "For Senior Citizens",
        "data": [
          "Regular monitoring of age-related health concerns.",
          "Comprehensive geriatric care and health interventions."
        ]
      }
    ],
    "whoBenefits": [
      {
        "title": "Patients with Chronic Conditions",
        "description": "Ongoing care to manage diseases effectively.",
        "data": [
          {
            "title": "Example",
            "description": "CareBond’s diabetes care program helped a patient lower their HbA1c levels by 20% through continuous monitoring and counseling."
          }
        ]
      },
      {
        "title": "Senior Citizens",
        "description": "Personalized care for better aging and mobility.",
        "data": [
          {
            "title": "Example",
            "description": "A senior enrolled in home-based monitoring saw reduced ER visits due to proactive health tracking."
          }
        ]
      },
      {
        "title": "Corporate Employees",
        "description": "Improved well-being through structured health interventions.",
        "data": [
          {
            "title": "Example",
            "description": "An IT firm adopted CareBond’s patient management services, leading to a healthier workforce and a 30% reduction in sick leave."
          }
        ]
      }
    ],
    "yourHealthYourWay": "With CareBond’s Patient Management Services, we prioritize convenience, care, and outcomes. Whether it’s chronic care management, home-based services, or preventive interventions, we are committed to supporting patients at every step of their health journey.",
    "contactUs": [
      "Take control of your health with CareBond. Reach out to schedule a consultation and experience how our Patient Management Services can make a difference."
    ]
  },
  {
    "id": "CB10004",
    "title": "Mental Health and Stress Management Programs",
    "icon": "psychology",
    "description": "At CareBond, we understand that mental well-being is the foundation of a productive, engaged, and resilient workforce. Our Mental Health and Stress Management Programs are designed to create supportive environments where employees thrive, stress is minimized, and mental health is prioritized. Tailored to the unique needs of organizations, these programs combine professional guidance, preventive measures, and actionable insights to foster a culture of mental wellness.",
    "offers": [
      {
        "title": "Workplace Mental Health Assessments",
        "description": "Gain a clear understanding of your workforce's mental health needs with our comprehensive evaluations.",
        "content": [
          {
            "title": "Employee Surveys and Stress Audits",
            "description": "Assess workplace stressors, burnout risks, and overall mental well-being."
          },
          {
            "title": "Organizational Stress Mapping",
            "description": "Identify key areas contributing to stress and recommend targeted interventions."
          },
          {
            "title": "Case Study",
            "description": "XYZ Tech Corp. utilized our mental health assessment tools to uncover high stress levels among its customer support team. Tailored workshops reduced stress and improved employee satisfaction by 35% within six months."
          }
        ]
      },
      {
        "title": "Stress Management Workshops and Training",
        "description": "Equip employees with tools and strategies to handle stress effectively.",
        "content": [
          {
            "title": "Stress Reduction Techniques",
            "description": "Training on mindfulness, meditation, and time management."
          },
          {
            "title": "Resilience Building",
            "description": "Programs that enhance coping mechanisms and emotional strength."
          },
          {
            "title": "Leadership Training",
            "description": "Teach managers to identify and address stress in their teams."
          },
          {
            "title": "Case Study",
            "description": "LMN Logistics conducted resilience training for its warehouse supervisors, leading to a 20% decrease in absenteeism and a significant morale boost."
          }
        ]
      },
      {
        "title": "Employee Assistance Programs (EAPs)",
        "description": "Provide confidential support to employees for their mental health challenges.",
        "content": [
          {
            "title": "One-on-One Counseling Services",
            "description": "Access to licensed psychologists and counselors for personal and professional concerns."
          },
          {
            "title": "Virtual Counseling",
            "description": "Flexible options for remote and hybrid workplaces."
          },
          {
            "title": "24/7 Helpline Support",
            "description": "Immediate assistance during critical moments."
          },
          {
            "title": "Case Study",
            "description": "At PQR Enterprises, EAP services were introduced, resulting in a 50% increase in employees seeking professional help and a marked improvement in workplace harmony."
          }
        ]
      },
      {
        "title": "Awareness Campaigns and Education",
        "description": "Normalize mental health discussions and reduce stigma in the workplace.",
        "content": [
          {
            "title": "Mental Health Awareness Events",
            "description": "Activities and campaigns during Mental Health Awareness Month or World Mental Health Day."
          },
          {
            "title": "Educational Sessions",
            "description": "Workshops on recognizing signs of mental distress, fostering empathy, and encouraging peer support."
          },
          {
            "title": "Case Study",
            "description": "STU Finance ran a stigma-reduction campaign with CareBond, engaging 80% of its workforce in open mental health dialogues. Employee surveys showed a 30% increase in perceived workplace inclusivity."
          }
        ]
      },
      {
        "title": "Customized Wellness Programs",
        "description": "Design mental health initiatives aligned with your organization's culture and goals.",
        "content": [
          {
            "title": "Mindfulness Programs",
            "description": "Ongoing guided sessions to promote mental clarity and focus."
          },
          {
            "title": "Team-Building Activities",
            "description": "Group activities that foster collaboration and reduce workplace tension."
          },
          {
            "title": "Hybrid Solutions",
            "description": "Programs designed for in-office and remote teams to maintain consistent engagement."
          },
          {
            "title": "Case Study",
            "description": "ABC Retail implemented customized hybrid wellness initiatives, resulting in a 15% improvement in employee productivity metrics."
          }
        ]
      },
      {
        "title": "Crisis Intervention and Support",
        "description": "Be prepared to handle mental health emergencies effectively.",
        "content": [
          {
            "title": "Critical Incident Stress Debriefing",
            "description": "Immediate support after workplace incidents like layoffs or traumatic events."
          },
          {
            "title": "Suicide Prevention and Intervention",
            "description": "Training and resources to identify and support at-risk individuals."
          },
          {
            "title": "Case Study",
            "description": "DEF Manufacturing faced a major crisis after a workplace accident. CareBond’s intervention services helped employees recover emotionally, restoring team cohesion within weeks."
          }
        ]
      }
    ],
    "whyChoose": [
      {
        "title": "Comprehensive Approach",
        "description": "Address mental health from prevention to intervention."
      },
      {
        "title": "Confidential and Trustworthy",
        "description": "Ensure employees feel safe seeking help."
      },
      {
        "title": "Expert Team",
        "description": "Licensed counselors, psychologists, and mental health educators."
      },
      {
        "title": "Customizable Solutions",
        "description": "Tailored programs to meet organizational and individual needs."
      },
      {
        "title": "Measurable Impact",
        "description": "Assess and track the effectiveness of mental health initiatives."
      }
    ],
    "benefits": [
      {
        "title": "For Employees",
        "data": [
          "Improved focus, reduced stress, and enhanced overall well-being.",
          "Accessible, stigma-free mental health resources."
        ]
      },
      {
        "title": "For Organizations",
        "data": [
          "Higher employee engagement and retention.",
          "Reduced absenteeism and presenteeism.",
          "A workplace culture that values and supports mental health."
        ]
      }
    ],
    "yourMentalHealthPartner": "Investing in mental health is investing in your organization's future. CareBond’s Mental Health and Stress Management Programs help build a resilient workforce, enabling your team to excel both personally and professionally.",
    "contactUs": [
      "Take the first step toward a healthier, happier workplace. Contact us today to create a tailored mental health program for your organization."
    ]
  },
  {
    "id": "CB10005",
    "title": "Vaccination and Immunization Drives",
    "icon": "local_hospital",
    "description": "At CareBond, we recognize the vital role of vaccinations in safeguarding health, preventing diseases, and fostering a productive workforce. Our Vaccination and Immunization Drives are designed to meet the diverse needs of organizations, offering tailored programs that align with global health standards, including those recommended by the World Health Organization (WHO). Whether conducted on-site or in our Occupational Health Centers, we ensure a seamless and efficient vaccination experience for all employees.",
    "offers": [
      {
        "title": "Comprehensive Vaccination Programs for Corporates",
        "description": "Protect your workforce with essential immunizations for better health and safety.",
        "content": [
          {
            "title": "Corporate Vaccination Drives",
            "description": [
              "Flu Vaccinations: Reducing seasonal illnesses and absenteeism.",
              "Hepatitis B and A: Protection against liver infections, especially for high-risk employees.",
              "Tetanus, Diphtheria, and Pertussis (Tdap): Essential for workplace safety in high-risk environments.",
              "Meningococcal Vaccines: Prevents meningitis outbreaks in communal settings.",
              "Typhoid and Cholera Vaccines: Critical for employees in industries with higher exposure risks.",
              "Rabies Vaccination: Necessary for veterinary or animal-handling professionals."
            ]
          },
          {
            "title": "Travel Vaccinations",
            "description": "Immunizations required for international travel, such as yellow fever and Japanese encephalitis."
          }
        ]
      },
      {
        "title": "Workplace On-Site Vaccination Services",
        "description": "Streamline the vaccination process with on-site programs tailored to your organization.",
        "content": [
          {
            "title": "Convenient Scheduling",
            "description": "Flexible timings to ensure maximum participation without disrupting operations."
          },
          {
            "title": "Expert Medical Staff",
            "description": "Certified healthcare professionals for safe and effective vaccine administration."
          },
          {
            "title": "Integrated Wellness Activities",
            "description": "Pair vaccinations with health workshops and screenings."
          }
        ]
      },
      {
        "title": "Vaccination Drives for Special Corporate Groups",
        "description": "Targeted vaccination programs for high-risk and specialized employee groups.",
        "content": [
          {
            "title": "Healthcare Workers",
            "description": "Hepatitis B, Tdap, and flu vaccines to ensure safety in high-exposure roles."
          },
          {
            "title": "Factory Workers",
            "description": "Vaccinations like Tetanus and Hepatitis A to protect against occupational hazards."
          },
          {
            "title": "Senior Employees",
            "description": "Pneumococcal and shingles vaccines for age-related vulnerabilities."
          }
        ]
      },
      {
        "title": "Health Awareness and Education Campaigns",
        "description": "Educate your employees on the importance of immunization.",
        "content": [
          {
            "title": "Awareness Workshops",
            "description": "Covering vaccine benefits, safety, and addressing common misconceptions."
          },
          {
            "title": "Digital Resources",
            "description": "Educational content shared through wellness portals or emails."
          }
        ]
      },
      {
        "title": "Vaccination Record Management",
        "description": "Simplify compliance and tracking with our digital solutions.",
        "content": [
          {
            "title": "Automated Reminders",
            "description": "Alerts for upcoming booster doses or annual vaccinations."
          },
          {
            "title": "Corporate Reporting",
            "description": "Monitor participation and maintain compliance with health and safety standards."
          }
        ]
      }
    ],
    "whyChoose": [
      {
        "title": "Comprehensive Services",
        "description": "Vaccination programs tailored to corporate needs."
      },
      {
        "title": "Flexibility",
        "description": "Options for on-site vaccinations or in our Occupational Health Centers."
      },
      {
        "title": "Global Standards",
        "description": "Vaccines recommended by WHO and leading health authorities."
      },
      {
        "title": "Convenient Scheduling",
        "description": "Programs designed to fit seamlessly into your business operations."
      },
      {
        "title": "Expert Care",
        "description": "Certified professionals ensure safe and effective immunization."
      }
    ],
    "benefits": [
      {
        "title": "For Corporates",
        "data": [
          "Improved workforce health and productivity.",
          "Reduced absenteeism and compliance with health standards."
        ]
      },
      {
        "title": "For Communities",
        "data": ["Enhanced public health through herd immunity."]
      }
    ],
    "yourTrustedPartner": "At CareBond, we deliver more than just vaccinations—we create a seamless, educational, and impactful immunization experience tailored for your organization. Protect your employees and foster a healthier, more productive workplace with our trusted programs.",
    "contactUs": [
      "Contact us today to schedule your next corporate vaccination drive!"
    ]
  },
  {
    "id": "CB10006",
    "title": "Chronic Disease Management Programs",
    "icon": "health_and_safety",
    "description": "At CareBond, we understand that chronic diseases such as diabetes, hypertension, heart disease, and respiratory conditions are significant concerns for both individuals and organizations. Our Chronic Disease Management Programs are designed to help employees manage and control chronic health conditions effectively, reducing long-term health risks, improving quality of life, and minimizing healthcare costs. By providing ongoing care, education, and support, we empower employees to manage their conditions and lead healthier lives, while organizations benefit from improved workforce health and reduced absenteeism.",
    "offers": [
      {
        "title": "Chronic Disease Management Plans for Corporate Employees",
        "content": [
          {
            "title": "Diabetes Management Plan",
            "description": [
              "Regular monitoring of blood glucose levels and personalized insulin management.",
              "Dietary modifications and exercise plans to manage blood sugar levels.",
              "Support for self-management and education on preventing complications."
            ]
          },
          {
            "title": "Hypertension Management Plan",
            "description": [
              "Blood pressure monitoring and medication management.",
              "Lifestyle changes to reduce salt intake, maintain a healthy weight, and manage stress.",
              "Education on the long-term risks of uncontrolled hypertension."
            ]
          },
          {
            "title": "Heart Disease Management Plan",
            "description": [
              "Comprehensive cardiac health check-ups and rehabilitation.",
              "Regular monitoring of cholesterol levels, blood pressure, and heart function.",
              "Personalized fitness plans and stress management techniques."
            ]
          },
          {
            "title": "Chronic Obstructive Pulmonary Disease (COPD) Management Plan",
            "description": [
              "Lung function assessments and medication management.",
              "Breathing exercises and lifestyle recommendations to avoid environmental triggers.",
              "Education on managing flare-ups and improving quality of life."
            ]
          },
          {
            "title": "Asthma Management Plan",
            "description": [
              "Regular lung health assessments and customized medication plans.",
              "Education on inhaler use, trigger avoidance, and symptom management.",
              "Stress and environmental management to reduce asthma attacks."
            ]
          },
          {
            "title": "Obesity and Weight Management Plan",
            "description": [
              "Personalized weight loss programs focusing on balanced nutrition, exercise, and behavior change.",
              "Monitoring of progress and adjustments to diet and activity levels.",
              "Support for managing obesity-related health conditions like diabetes and sleep apnea."
            ]
          },
          {
            "title": "Other Conditions",
            "description": [
              "Stroke, chronic migraines, kidney disease, arthritis, osteoporosis, cancer survivorship, GI disorders, thyroid issues, sleep apnea, and more. Each includes personalized care plans, education, and support tailored to individual needs."
            ]
          }
        ]
      }
    ],
    "whyChoose": [
      {
        "title": "Holistic Approach",
        "description": "We address physical, emotional, and mental well-being to ensure comprehensive care for chronic conditions."
      },
      {
        "title": "Expert Healthcare Team",
        "description": "Our experienced doctors, specialists, and wellness professionals provide evidence-based care and support."
      },
      {
        "title": "Flexible Solutions",
        "description": "We offer on-site services, remote monitoring, and telehealth support to cater to the unique needs of your workforce."
      },
      {
        "title": "Long-Term Benefits",
        "description": "Effective chronic disease management leads to a healthier, more engaged, and productive workforce, reducing overall healthcare costs for your organization."
      }
    ],
    "benefits": [
      {
        "title": "For Corporates",
        "data": [
          "Reduced absenteeism and increased productivity by helping employees manage their health.",
          "Lower healthcare costs through early intervention and proactive disease management.",
          "Improved employee satisfaction and engagement through wellness programs."
        ]
      },
      {
        "title": "For Employees",
        "data": [
          "Personalized care and support for managing chronic conditions effectively.",
          "Better quality of life through improved health and wellness.",
          "Access to resources and education to help manage health outside of work."
        ]
      }
    ],
    "yourTrustedPartner": "At CareBond, we provide a comprehensive approach to managing chronic diseases that goes beyond treatment. Our programs empower employees to take charge of their health and live life to the fullest. By offering personalized care plans, continuous monitoring, and educational resources, we ensure that chronic disease management is effective, sustainable, and beneficial for both employees and organizations.",
    "contactUs": [
      "Contact us today to learn more about our Chronic Disease Management Programs and improve your workforce’s long-term health and productivity!"
    ]
  },
  {
    "id": "CB10007",
    "title": "Health Data Analytics and Reporting",
    "icon": "analytics",
    "description": "At CareBond, we leverage the power of Health Data Analytics and Reporting to transform raw healthcare data into actionable insights that help organizations enhance employee well-being, optimize healthcare costs, and improve overall productivity. Our comprehensive data-driven approach enables informed decision-making based on real-time health metrics, trends, and individual needs. By utilizing advanced analytics, we track health outcomes, measure wellness program effectiveness, and predict future health risks, allowing businesses to take proactive steps toward improving employee health.",
    "offers": [
      {
        "title": "Comprehensive Health Data Collection and Integration",
        "content": [
          "Employee Health Records: We compile and integrate health data from annual check-ups, pre-employment assessments, wellness programs, and chronic disease management plans.",
          "Real-Time Data Tracking: Collect data on physical health, mental well-being, and lifestyle behaviors through mobile health apps, wearables, and on-site assessments."
        ]
      },
      {
        "title": "Predictive Analytics for Early Detection",
        "content": [
          "Risk Prediction Models: Identify potential health risks like chronic diseases or mental health issues, enabling early intervention.",
          "Health Risk Assessments: Regular screenings and evaluations to identify risk factors and deliver actionable insights for proactive health management."
        ]
      },
      {
        "title": "Wellness Program Effectiveness",
        "content": [
          "Program Impact Evaluation: Analyze participation and outcomes to refine and optimize wellness initiatives.",
          "Employee Engagement Metrics: Monitor participation and track improvements in fitness, mental health, stress levels, and productivity."
        ]
      },
      {
        "title": "Customized Health Dashboards",
        "content": [
          "Individual Dashboards: Employees access personalized health data, progress, and recommendations.",
          "Organizational Dashboards: HR managers access real-time workforce health trends for data-driven decision-making."
        ]
      },
      {
        "title": "Actionable Reports and Insights",
        "content": [
          "Health Reports: Detailed insights highlighting trends, risks, and areas for improvement with both individual and aggregate data.",
          "Tailored Recommendations: Personalized guidance for lifestyle changes, targeted wellness initiatives, and chronic disease management."
        ]
      },
      {
        "title": "Cost Optimization Insights",
        "content": [
          "Healthcare Cost Management: Identify cost-saving opportunities through preventative care and targeted interventions.",
          "ROI Analysis: Evaluate the return on investment (ROI) of corporate wellness programs to maximize healthcare budgets."
        ]
      }
    ],
    "caseStudy": {
      "title": "Health Data Analytics in Action",
      "content": {
        "company": "XYZ Corporation",
        "challenge": "XYZ Corporation faced rising healthcare costs and absenteeism due to chronic health conditions among employees.",
        "solution": [
          "CareBond implemented a health analytics program integrating data from assessments, wellness programs, and wearables.",
          "Predictive analytics identified at-risk employees, offering personalized dashboards and actionable recommendations."
        ],
        "results": [
          "20% reduction in absenteeism due to chronic health issues.",
          "15% reduction in healthcare costs through targeted interventions.",
          "25% increase in wellness program engagement.",
          "Enhanced employee satisfaction and productivity."
        ]
      }
    },
    "whyChoose": [
      {
        "title": "Expertise",
        "description": "Advanced technology combined with healthcare expertise to deliver actionable insights for health improvements and cost reductions."
      },
      {
        "title": "Privacy and Compliance",
        "description": "Strict adherence to privacy standards and regulatory compliance ensures secure handling of employee health data."
      },
      {
        "title": "Custom Solutions",
        "description": "Tailored health analytics solutions provide relevant, actionable data for your organization."
      },
      {
        "title": "Comprehensive Support",
        "description": "Our team works closely with you to interpret data and implement effective wellness strategies."
      }
    ],
    "benefits": [
      {
        "title": "Proactive Health Management",
        "data": [
          "Predict and prevent potential health issues, reducing claims and absenteeism."
        ]
      },
      {
        "title": "Improved Employee Well-Being",
        "data": [
          "Encourage healthy habits and preventive care for enhanced job satisfaction."
        ]
      },
      {
        "title": "Increased Productivity",
        "data": ["Healthier, more engaged employees with fewer sick days."]
      },
      {
        "title": "Data-Driven Decision Making",
        "data": [
          "Utilize real-time data to optimize health initiatives and employee benefits."
        ]
      },
      {
        "title": "Tailored Wellness Programs",
        "data": [
          "Create relevant, effective programs based on employee health data."
        ]
      }
    ],
    "contactUs": [
      "Contact us today to learn how CareBond’s Health Data Analytics and Reporting can help you optimize employee health, reduce healthcare costs, and drive productivity in your organization."
    ]
  }
]

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
