import { Component,ViewChild, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { HostDireactive } from './host.direactive';
import { HelloComponent,HiComponent } from './hello.component';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  { 
  @ViewChild('buttonclass',{static:true}) el:ElementRef;
  @ViewChild(HostDireactive,{static:true})
  childref:HostDireactive;
  
  name = 'Angular';
  components=[HiComponent,HelloComponent];
  constructor(private factoryreslove:ComponentFactoryResolver){

  }
  show(id){
    this.childref.viewref.clear();
    const reslovefactory = this.factoryreslove.resolveComponentFactory(this.components[id]);
    this.childref.viewref.createComponent(reslovefactory);
  }
}
