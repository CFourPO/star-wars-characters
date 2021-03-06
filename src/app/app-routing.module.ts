import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
    {
        path: '', component: AppComponent, children: [
            {path: 'character', component: null},
            {path: 'character/:id', component: null}
        ]
    },
    {path: '', redirectTo: '/', pathMatch: 'full'},
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
