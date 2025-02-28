import type { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponentComponent } from "./page-not-found-component/page-not-found-component.component";
import { SecondComponent } from "./second/second.component";

export const routes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "second", component: SecondComponent },
	{ path: "**", component: PageNotFoundComponentComponent },
];
