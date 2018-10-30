import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor() {}
  public canActivate(): boolean {
    if (!localStorage.getItem('token')) {
      return false;
    }
    return true;
  }
}
