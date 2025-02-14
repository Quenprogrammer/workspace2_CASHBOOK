import { Injectable } from '@angular/core';
import {MessageInquiries} from '../../core/system/interface/contactInterface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  totalStorage: number = 1000000; // Maximum storage capacity in bytes

  // Method to calculate the total text length of the inquiries
  calculateTextLength(inquiries: MessageInquiries[]) {
    let total:number = 0;

    inquiries.forEach(inquiry => {
      total += this.getTextLength(inquiry.name);
      total += this.getTextLength(inquiry.phoneNumber.toString());  // Ensure phone number is treated as a string
      total += this.getTextLength(inquiry.Email);
      total += this.getTextLength(inquiry.socialMedia);
      total += this.getTextLength(inquiry.additionalInformation);
    });

    const memorySize = total / 1024; // Convert bytes to KB
    const availableStorage = this.totalStorage - total;

    return {
      totalTextLength: total,
      memorySize: memorySize,
      availableStorage: availableStorage
    };
  }

  // Helper method to get the length of the text in a field
  getTextLength(value: string): number {
    return value.length;
  }
}
