import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from './../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})

export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(
    // private loggingService: LoggingService,
    private accountsService: AccountsService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({name: accountName,
    // status: accountStatus
    // });
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);
    this.accountsService.AddAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
