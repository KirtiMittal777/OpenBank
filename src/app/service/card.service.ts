import { Injectable } from '@angular/core';
import { CardResource } from '../model/cardResource.model';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  resource: CardResource[] = [];

  constructor() {
    this.resource = [
      {
        imgName: 'GetPaidInstantly.png',
        title: 'Quick Cash disbursement',
        description: 'Get terms loans that your business needs within 72 hrs',
      },
      {
        imgName: 'LowInterestRate.png',
        title: 'Low-interest rate',
        description: `Achieve your financial goals with an amazing interest rate starting at 13% per annum`,
      },
      {
        imgName: 'SecurePayments.png',
        title: 'Zero Paperwork',
        description: `Get started instantly by submitting only your basic details & bank statements`,
      },
      {
        imgName: 'freelancer.png',
        title: 'Ace your business finances',
        description: `Manage banking,accounting & everything in between, on one platform `,
      },
      {
        imgName: 'Covid.png',
        title: 'Loans to fight COVID-19',
        description: `Zero EMI for first 3 months on Back-to Business loans of upto 1 lakh`,
      },
    ];
  }

  ngOnInit() {
   
  }
}
