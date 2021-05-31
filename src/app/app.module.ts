import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { HeaderOverlayComponent } from './header/header-overlay/header-overlay.component';
import { CalculatorComponent } from './header/calculator/calculator.component';
import { FooterComponent } from './footer/footer.component';
import { FooterCardComponent } from './footer/footer-card/footer-card.component';
import { FooterRightSectionComponent } from './footer/footer-right-section/footer-right-section.component';
import { CalcRightSectionComponent } from './header/calculator/calc-right-section/calc-right-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderOverlayComponent,
    CalculatorComponent,
    FooterComponent,
    FooterCardComponent,
    FooterRightSectionComponent,
    CalcRightSectionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
