import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';

@NgModule({
	declarations: [
		AppComponent,
		BookingComponent
	],
	imports: [BrowserModule],
	bootstrap: [AppComponent]
})
export class AppModule { }
