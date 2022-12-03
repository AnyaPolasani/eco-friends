import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Settings {
  avatar?: any;
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public settings: BehaviorSubject<Settings> = new BehaviorSubject<Settings>(null);

  constructor() {
    this.settings.next({
      avatar: {
        avatar: 'sahanya.png',
        id: 'sahanya'
      }
    });
  }
}
