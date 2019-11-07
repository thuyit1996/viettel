import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
const routes: Routes = [
    { path: '', loadChildren: './pages/pages.module#PagesModule' },
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

const config: ExtraOptions = {
    useHash: false,
};

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'enabled', // Add options right here
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}