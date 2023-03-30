import { Component, OnInit } from '@angular/core';
import { CoreService } from 'core';
import { PluginService } from 'plugin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pluginStructureExample';
  plugins: string[] = []

  constructor(
    private pluginService: PluginService,
    private coreService: CoreService
  ) {

  }

  ngOnInit(): void {
      this.plugins = this.coreService.getPlugins();
  }
}
