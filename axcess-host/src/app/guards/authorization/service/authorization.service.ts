import { Injectable } from '@angular/core';

import modules from "../../../../assets/apps-configs.json";
import { Module } from 'src/app/core/models/module.model.js';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }

  hasPermission(url: string): boolean {
    let a: Module = this.getModuleByName(url)
    return a.allowed;
  }

  getModuleByName(moduleName: string): Module {
    let moduleInfo: Module = null;
    modules.forEach(module => {
      if ("/" + module.moduleName === moduleName) {
        moduleInfo = new Module();
        moduleInfo.elementName = module.elementName;
        moduleInfo.moduleName = module.moduleName;
        moduleInfo.url = module.url;
        moduleInfo.allowed = module.allowed;
      }
    });
    return moduleInfo;
  }
}
