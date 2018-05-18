import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { LoginComponent } from "~/pages/login/login.component";
import { TabsComponent } from "~/pages/tabs/tabs.component";
import { TabOneComponent } from "~/pages/tabs/tab-one/tab-one.component";
import { TabTwoComponent } from "~/pages/tabs/tab-two/tab-two.component";
import { SubTabComponent } from "~/pages/tabs/tab-one/sub-tab/sub-tab.component";


export const ROUTING_COMPONENTS = [LoginComponent, TabsComponent, TabOneComponent, TabTwoComponent, SubTabComponent];

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "tabs-main", redirectTo: "/tabs/(firstTab:tab-one//secondTab:tab-two)" },

    { path: "login", component: LoginComponent },

    {
        path: "tabs", component: TabsComponent, children: [
            { path: "tab-one", component: TabOneComponent, outlet: "firstTab" },
            { path: "sub-tab", component: SubTabComponent, outlet: "firstTab" },
            { path: "tab-two", component: TabTwoComponent, outlet: "secondTab" },
        ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }