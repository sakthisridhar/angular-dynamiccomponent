import { Directive, ViewContainerRef } from '@angular/core';

@Directive({selector:'[host]'})

export class HostDireactive{
  constructor(public viewref:ViewContainerRef){
    
  }
}
