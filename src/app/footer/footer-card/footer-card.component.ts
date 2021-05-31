import { Component, OnInit } from '@angular/core';
import { CardResource } from '../../model/cardResource.model';
import { CardService } from '../../service/card.service';

@Component({
  selector: 'app-footer-card',
  templateUrl: './footer-card.component.html',
  styleUrls: ['./footer-card.component.css'],
})
export class FooterCardComponent implements OnInit {
  cardData: CardResource[] = [];

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardData = this.cardService.resource;
  }
}
