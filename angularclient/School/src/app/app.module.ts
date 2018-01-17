import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {routing} from "./app.routing";
import {AdminModule} from "./admin/admin.module";
import {UserModule} from "./user/user.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    AdminModule,
    UserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
