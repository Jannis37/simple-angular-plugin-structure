import { Injectable } from '@angular/core';
import { CoreService } from 'core';

@Injectable({
  providedIn: 'root'
})
export class PluginService {

  constructor(
    private coreService: CoreService
  ) { 
    this.coreService.addPlugin('plugin')
  }
}
