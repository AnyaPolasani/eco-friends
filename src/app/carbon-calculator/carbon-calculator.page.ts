import { Component, OnInit } from '@angular/core';
import { Settings, SettingsService } from '../services/settings.service';
import { ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-carbon-calculator',
  templateUrl: './carbon-calculator.page.html',
  styleUrls: ['./carbon-calculator.page.scss'],
})
export class CarbonCalculatorPage implements OnInit {

  public settingsObj: Settings;
  public currentDiv = 0;


  constructor(private settings: SettingsService) {
    this.settings.settings.subscribe(obj => {
      this.settingsObj = obj;
    });
  }
  ngOnInit() {
    console.log(this.settingsObj);
  }

  public nextDiv(nextScr) {
    //this.currentDiv = nextScr;
    this.currentDiv = this.currentDiv + nextScr;
    this.scrollToTop();
  }
  scrollToTop() {
    //this.content.scrollToTop(400);
  }


}
