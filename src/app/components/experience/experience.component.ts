import { Component, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CompanyExperience, CompanyNames } from './experience.model';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '400ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  @Input() title: string = 'Experience';

  companyExperiences: CompanyExperience[] = [
    {
      companyName: CompanyNames.Hypelinks,
      location: 'Remote',
      duration: '1 yrs 2 mos',
      logo: 'hypelinks_logo.jpeg',
      website: 'http://hypelinks.com',
      experiences: [
        {
          position: 'Engineering Manager',
          startDate: 'Nov, 2023',
          endDate: 'Present',
          duration: '1 yrs 2 mos',
          points: [
            'lorem',
            'lorem',
            'lorem',
            'lorem',
          ],
        },
      ],
    },
    {
      companyName: CompanyNames.DemandHelm,
      location: 'Remote',
      duration: '3 yrs 8 mos',
      website: 'http://demandhelm.com',
      logo: 'demandhelm_logo.jpeg',
      experiences: [
        {
          position: 'Engineering Manager',
          startDate: 'Apr 2023',
          endDate: 'Oct 2023',
          duration: '7 mos',
          points: [
            'lorem',
            'lorem',
            'lorem',
            'lorem',
          ],
        },
        {
          position: 'Senior Software Engineer',
          startDate: 'Apr 2022',
          endDate: 'Mar 2023',
          duration: '1 yrs',
          points: [
            'lorem',
            'lorem',
            'lorem',
            'lorem',
          ],
        },
        {
          position: 'Software Engineer',
          startDate: 'Mar 2020',
          endDate: 'Mar 2022',
          duration: '2 yrs 1 mos',
          points: [
            'lorem',
            'lorem',
            'lorem',
            'lorem',
          ],
        },
      ],
    },
  ];
}
