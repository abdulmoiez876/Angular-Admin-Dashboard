import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from "./admin-panel/admin-panel.component";
import { LoginComponent } from './login/login.component';
import { EditStudentComponent } from './admin-panel/edit-student/edit-student.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'adminPanel',
        component: AdminPanelComponent
    },
    {
        path: 'editStudent',
        component: EditStudentComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}

export const routingComponents = [LoginComponent, AdminPanelComponent, EditStudentComponent];