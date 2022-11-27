import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from "./admin-panel/admin-panel.component";
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'adminPanel',
        component: AdminPanelComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}

export const routingComponents = [LoginComponent, AdminPanelComponent];