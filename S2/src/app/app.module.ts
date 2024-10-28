
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    BrowserAnimationsModule, 
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
   
  ],
  providers: [
    MatDatepickerModule,
  ],
})
export class AppModule {}
