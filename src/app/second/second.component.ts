import { Component } from "@angular/core";
import { ChatComponent } from "../chat/chat.component";

@Component({
	selector: "app-second",
	imports: [ChatComponent],
	templateUrl: "./second.component.html",
	styleUrl: "./second.component.scss",
})
export class SecondComponent {}
