import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UsernavbarComponent } from './Navigations/usernavbar/usernavbar.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
  {
    path:'user',
    component:UsernavbarComponent,
    children:[
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',

      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'home/profile',
        loadChildren: () => import('./screens/User/profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'sessions',
        loadChildren: () => import('./screens/sessions/sessions.module').then( m => m.SessionsPageModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./screens/notifications/notifications.module').then( m => m.NotificationsPageModule)
      },
      {
        path: 'home/profile/editprofile',
        loadChildren: () => import('./screens/User/editprofile/editprofile.module').then( m => m.EditprofilePageModule)
      },
      {
        path: 'profile/changepassword',
        loadChildren: () => import('./screens/changepassword/changepassword.module').then( m => m.ChangepasswordPageModule)
      },
      {
        path: 'community',
        loadChildren: () => import('./screens/community/community.module').then( m => m.CommunityPageModule)
      },
    
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./screens/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./screens/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'resetpasword',
    loadChildren: () => import('./screens/resetpasword/resetpasword.module').then( m => m.ResetpaswordPageModule)
  },
  {
    path: 'doctordetails',
    loadChildren: () => import('./screens/doctor/doctordetails/doctordetails.module').then( m => m.DoctordetailsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./screens/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'doctorhome',
    loadChildren: () => import('./screens/doctor/doctorhome/doctorhome.module').then( m => m.DoctorhomePageModule)
  }

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
