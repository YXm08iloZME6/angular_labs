import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NavLinkComponent } from "../nav-link/nav-link.component";

@Component({
	selector: "app-nav-bar",
	imports: [RouterLink, NavLinkComponent],
	templateUrl: "./nav-bar.component.html",
	styleUrl: "./nav-bar.component.scss",
})
export class NavBarComponent {}
