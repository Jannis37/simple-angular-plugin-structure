import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  private plugins: string[] = [];

  addPlugin(plugin: string) {
    this.plugins.push(plugin);
  }

  getPlugins() {
    return this.plugins;
  }

}
