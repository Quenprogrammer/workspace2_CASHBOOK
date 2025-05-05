import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import{created,} from"./apps-created"
import{designed,} from"./designedApps"
import {NgbNav, NgbNavContent, NgbNavItem, NgbNavLink, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";
import {
  address, CEOName,
  country, email,
  founded, headquarters,
  industry,
  LGA, logo,
  phone,
  socialAccount, stateLocated, statesWeOperateIn,
  website
} from '../../../data/companyInformation';
import {PaymentMethodsComponent} from '../../payment-methods/payment-methods.component';
import {StaffsComponent} from '../../staffs/staffs.component';
import {NgForOf, NgIf} from '@angular/common';
import {TruncateTextPipe} from '../../../../shared/truncate-text-pipe/truncate-text.pipe';
@Component({
  selector: 'app-case-study',
  standalone: true,
  imports: [
    RouterLink,
    NgbNav,
    NgbNavContent,
    NgbNavItem,
    NgbNavLink,
    NgbNavOutlet,
    PaymentMethodsComponent,
    StaffsComponent,
    NgForOf,
    TruncateTextPipe,
    NgIf
  ],
  templateUrl: './case-study.component.html',
  styleUrl: './case-study.component.css'
})
export class CaseStudyComponent {
  statesWeOperateIn = [
    {
      name: 'Kano State',
      icon: 'publicSite/bgPublicsSite/kano.webp',
      map: 'publicSite/map/kano.png',
      description: 'Kano State is one of our most strategic operational bases in northern Nigeria. As a major commercial and industrial center, Kano provides us with a dynamic environment for both logistics and passenger transport. Our services cover inter-city and rural transportation, cargo movement, warehouse solutions, and logistics coordination for businesses dealing in agricultural produce, textiles, electronics, and machinery. We support local markets, retail chains, and industrial parks, ensuring that goods are moved securely and on schedule. Our presence in Kano is supported by a trained team familiar with the routes and demands of this bustling city.'
    },
    {
      name: 'Abuja',
      icon: 'publicSite/bgPublicsSite/abuja.jpg',
      map: 'publicSite/map/abuja.png',
      description: 'Abuja, the Federal Capital Territory, serves as a vital link in our national transport chain. Our services here cater to government agencies, corporate clients, and private individuals. We offer premium vehicle options for executive movement, scheduled long-distance transport to other states, and secure parcel delivery. Our logistics operations in Abuja are backed by real-time tracking systems, customer care support, and warehousing services to ensure smooth operations. Given the cities importance, we maintain high standards of professionalism, punctuality, and safety for both goods and passengers.'
    },
    {
      name: 'Giedam',
      icon: 'publicSite/bgPublicsSite/yobe.avif',
      map: 'publicSite/map/yobe.png',
      description: 'Giedam, a key location in Yobe State, plays a critical role in our northeastern logistics network. While often overlooked, Giedam is essential for connecting rural areas to larger commercial hubs. Our transportation services here focus on the movement of agricultural produce, food items, consumer goods, and construction materials. We also support humanitarian aid logistics in this region, providing vehicles and trained drivers capable of operating in remote or challenging terrains. We work closely with community leaders and local businesses to ensure trust, speed, and consistency in all operations.'
    },
    {
      name: 'Maiduguri State',
      icon: 'publicSite/bgPublicsSite/maiduguri.jpg',
      map: 'publicSite/map/maiduguri.png',
      description: 'Maiduguri, the capital of Borno State, is a high-priority location in our operations despite regional security challenges. We offer specialized logistics and transport services that focus on the safe delivery of goods such as food supplies, building materials, fuel, and emergency relief items. Our fleet in Maiduguri is equipped for both city and rural travel, with added safety measures and experienced drivers. We collaborate with NGOs, government agencies, and traders to support humanitarian activities and commercial movement. Our consistent presence in Maiduguri reflects our commitment to serving even the most demanding regions.'
    },
    {
      name: 'Jigawa State',
      icon: 'publicSite/bgPublicsSite/jigawa.jpg',
      map: 'publicSite/map/jigawa.png',
      description: 'In Jigawa State, our transportation services are tailored to support agriculture, rural trade, and cross-border commerce. We facilitate the movement of goods such as grains, vegetables, livestock, and consumer products across local and neighboring communities. Our team in Jigawa works closely with farmers, traders, and small businesses to ensure goods are moved quickly and safely to markets and warehouses. We also offer passenger transport services that connect major towns and villages, providing affordable and reliable options for the local population. Our logistics approach here focuses on empowering grassroots commerce.'
    },
    {
      name: 'Lagos State',
      icon: 'publicSite/bgPublicsSite/lagos.jpg',
      map: 'publicSite/map/lagos.png',
      description: 'Lagos State is the cornerstone of our southern operations and a major economic gateway for the country. From Apapa ports to the mainland business districts, our transportation services are fully integrated into the commercial ecosystem. We handle container movement, last-mile delivery, e-commerce logistics, inter-state passenger services, and business-to-business transport. With high traffic and dense population, our operations in Lagos are supported by advanced logistics planning, GPS tracking, and customer service systems. Whether you need to move cargo from the ports or schedule regular passenger trips, we deliver speed, reliability, and excellence across the board.'
    },
    {
      name: 'Niger Republic',
      icon: 'publicSite/bgPublicsSite/nigerR.jpeg',
      map: 'publicSite/map/niger.png',
      description: 'Niger Republic plays a crucial role in our cross-border transportation network, serving as a strategic location for international trade and logistics between Nigeria and the rest of West Africa. As a neighboring country, Niger is an essential link for transporting goods, agricultural produce, industrial materials, and essential supplies across borders. We provide reliable services that cover long-haul deliveries, including moving mining equipment, fuel, construction materials, and food supplies between Nigeria and Niger. Our fleet is specially equipped for long-distance journeys, ensuring that all goods are transported securely, safely, and in compliance with all customs and border regulations. We offer both freight and passenger transport services, with a focus on timeliness, efficiency, and customer satisfaction. Our team is well-versed in the logistical challenges posed by the diverse terrains and weather conditions of the region, ensuring smooth operations even in remote and challenging areas. Whether its managing bulk shipments or facilitating smaller business deliveries, we ensure that businesses in Niger and Nigeria stay connected with reliable, cost-effective, and timely transportation solutions.'
    }
  ];
  isModalOpen: boolean = false;
  closeModal() {
    this.isModalOpen = false;
  }
  servicesProvided: { name: string; icon: string; description:string; map:string; } =
    { name: '', icon: '', description: '', map:'' };
  openModal(index: number) {
    this.servicesProvided = this.statesWeOperateIn[index];
    this.isModalOpen = true;
  }

  protected readonly created = created;
  protected readonly designed = designed;
  protected readonly socialAccount = socialAccount;
  protected readonly phone = phone;
  protected readonly industry = industry;
  protected readonly address = address;
  protected readonly LGA = LGA;
  protected readonly country = country;
  protected readonly founded = founded;
  protected readonly website = website;
  protected readonly email = email;
  protected readonly headquarters = headquarters;
  protected readonly CEOName = CEOName;
  protected readonly logo = logo;

  protected readonly stateLocated = stateLocated;
}
