import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UsernavbarComponent } from './Navigations/usernavbar/usernavbar.component';
import { DocternavbarComponent } from './Navigations/docternavbar/docternavbar.component';

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
    path:'doctor',
    component:DocternavbarComponent,
    children:[
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',

      },
      {
        path: 'home',
        loadChildren: () => import('./screens/doctor/doctorhome/doctorhome.module').then( m => m.DoctorhomePageModule)
      },
      {
        path: 'home/profile',
        loadChildren: () => import('./screens/doctor/profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./screens/notifications/notifications.module').then( m => m.NotificationsPageModule)
      },
      {
        path: 'community',
        loadChildren: () => import('./screens/community/community.module').then( m => m.CommunityPageModule)
      },
      {
        path: 'sessions',
        loadChildren: () => import('./screens/sessions/sessions.module').then( m => m.SessionsPageModule)
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
    path: 'doctordetails/:id',
    loadChildren: () => import('./screens/doctor/doctordetails/doctordetails.module').then( m => m.DoctordetailsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./screens/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'session',
    loadChildren: () => import('./screens/session/session.module').then( m => m.SessionPageModule)
  },
  {
    path: 'booking',
    loadChildren: () => import('./screens/booking/booking.module').then( m => m.BookingPageModule)
  },
  {
    path: 'zoom-meeting',
    loadChildren: () => import('./screens/zoom-meeting/zoom-meeting.module').then( m => m.ZoomMeetingPageModule)
  },
  {
    path: 'post',
    loadChildren: () => import('./screens/doctor/post/post.module').then( m => m.PostPageModule)
  },
  {
    path: 'request',
    loadChildren: () => import('./screens/doctor/request/request.module').then( m => m.RequestPageModule)
  },
  {
    path: 'requestdetails/:id',
    loadChildren: () => import('./screens/doctor/requestdetails/requestdetails.module').then( m => m.RequestdetailsPageModule)
  },






 

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
