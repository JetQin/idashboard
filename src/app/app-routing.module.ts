import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ChatLayoutComponent } from './layouts/chat-layout/chat-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'chat/dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AdminLayoutComponent,
    // canActivate: [ GuardService ],
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }
    ]
  },
  {
    path: 'chat',
    component: ChatLayoutComponent,
    // canActivate: [ GuardService ],
    children: [
      {
        path: '',
        loadChildren: './layouts/chat-layout/chat-layout.module#ChatLayoutModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
