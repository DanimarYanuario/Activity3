import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PersonalprofileComponent } from './components/personalprofile/personalprofile.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'personalprofile', component:PersonalprofileComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'contact',component:ContactComponent},
  {path:'**', redirectTo: "home"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }