import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent,HiComponent } from './hello.component';
import { HostDireactive } from './host.direactive';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HostDireactive, HiComponent ],
  entryComponents:[HelloComponent,HiComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
