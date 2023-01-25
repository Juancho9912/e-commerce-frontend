import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ResetChangeComponent } from './reset-change/reset-change.component';
import { CreacionUsuarioComponent } from './user/creacion-usuario/creacion-usuario.component';
import { EliminarUsuarioComponent } from './user/eliminar-usuario/eliminar-usuario.component';
import { ListarUsuarioComponent } from './user/listar-usuario/listar-usuario.component';

const routes: Routes = [
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"logout",
    component: LogoutComponent
  },
  {
    path:"change-password",
    component: ChangePasswordComponent
  },
  {
    path:"reset-password",
    component: ResetChangeComponent
  },
  {
    path:"user-creation",
    component: CreacionUsuarioComponent
  },
  {
    path:"user-list",
    component: ListarUsuarioComponent
  },
  {
    path:"user-remove",
    component: EliminarUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
