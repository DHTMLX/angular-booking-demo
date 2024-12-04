import { Booking } from "@dhx/trial-booking";
import { getData } from "./data";

import {
	Component,
	ElementRef,
	OnInit,
	OnDestroy,
	ViewChild,
	ViewEncapsulation,
} from "@angular/core";

@Component({
	encapsulation: ViewEncapsulation.None,
	selector: "booking",
	styleUrls: ["./booking.component.css"],
	template: `<div #container class="widget"></div>`,
})

export class BookingComponent implements OnInit, OnDestroy {
	@ViewChild("container", { static: true }) booking_container!: ElementRef;

	private _booking!: Booking;

	ngOnInit() {
		const data = getData();
		this._booking = new Booking(this.booking_container.nativeElement, {
			data
		});

		this._booking.setConfirmHandler(function(event: any){
			const { confirm } = event;
			setTimeout(() => {
				Math.random() < 0.5 ? confirm.error() : confirm.done();
			}, 1000);
		});
	}

	ngOnDestroy(): void {
		this._booking.destructor();
	}
}
