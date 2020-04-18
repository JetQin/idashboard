import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ChatLayoutComponent } from './layouts/chat-layout/chat-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'chat/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    // canActivate: [ GuardService ],
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
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
        loadChildren: () => import('./layouts/chat-layout/chat-layout.module').then(m => m.ChatLayoutModule)
      }
    ]
  },
  {
    path: 'user',
    component: UserLayoutComponent,
    // canActivate: [ GuardService ],
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/user-layout/user-layout.module').then(m => m.UserLayoutModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
