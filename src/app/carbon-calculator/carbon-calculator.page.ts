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
  public score = 0;


  constructor(private settings: SettingsService) {
    this.settings.settings.subscribe(obj => {
      this.settingsObj = obj;
    });
  }
  ngOnInit() {
    console.log(this.settingsObj);
  }

  public nextDiv(nextScr) {
    this.currentDiv = this.currentDiv + 1;
    this.score = (this.score) + (nextScr);


  }
  scrollToTop() {
    //this.content.scrollToTop(400);
  }

  one() {
    alert(1);
  }

  two() {
    alert(2);
  }


}
