import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [
    NzButtonModule,
    NzToolTipModule,
    RouterLink,
  ],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainDashboardComponent {

  readonly MENU_ITEMS: MenuItem[] = [
    {
      title: 'register form',
      link: '/projects/register-form',
      tooltip: 'Registration form with password confirmation.'
    }
  ];
}

interface MenuItem {
  title: string;
  link: string;
  tooltip: string;
}