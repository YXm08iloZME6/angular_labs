import { Component, type ElementRef, Input, ViewChild } from "@angular/core";
import { ChatMessageComponent } from "../chat-message/chat-message.component";

type MessageModel = {
	id: number;
	name: string;
	text: string;
};

@Component({
	selector: "app-chat",
	imports: [ChatMessageComponent],
	templateUrl: "./chat.component.html",
	styleUrl: "./chat.component.scss",
})
export class ChatComponent {
	@ViewChild("nameInput") nameInput!: ElementRef;
	@ViewChild("textInput") textInput!: ElementRef;

	messages: Array<MessageModel> = [
		{ id: 1, name: "Дима", text: "Первое сообщение" },
		{ id: 2, name: "Дмитрий", text: "Второе сообщение" },
		{ id: 3, name: "Дмытро", text: "Третье сообщение" },
		{ id: 4, name: "Дима 2", text: "Четвертое сообщение" },
	];

	handleSubmit(): void {
		this.messages.push({
			id: this.messages[this.messages.length - 1].id + 1,
			name: this.getValue(this.nameInput),
			text: this.getValue(this.textInput),
		});
	}

	getValue(el: ElementRef): string {
		return el.nativeElement.value;
	}
}
