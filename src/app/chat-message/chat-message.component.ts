import { Component, Input } from "@angular/core";

@Component({
	selector: "app-chat-message",
	imports: [],
	templateUrl: "./chat-message.component.html",
	styleUrl: "./chat-message.component.scss",
})
export class ChatMessageComponent {
	colors: Array<string> = [
		"SpringGreen",
		"Coral",
		"GoldenRod",
		"BlueViolet",
		"Firebrick",
	];
	color: string = this.colors[Math.floor(Math.random() * this.colors.length)];

	@Input() name = "";
	@Input() text = "";
}
