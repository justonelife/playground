import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { URL_HELPER } from '../../app.helper';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NzPageHeaderModule,
    RouterOutlet,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  readonly router = inject(Router);

  onBack(): void {
    this.router.navigateByUrl(URL_HELPER.main());
  }
}