import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/services/account.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AccountService);
  const toastr = inject(ToastrService);

  return accountService.currentUser$.pipe(
    map((auth) => {
      if (auth) return true;
      toastr.error('You shall not pass!');
      return false;
    })
  );
};
