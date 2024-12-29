import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Amazon Product Advertising API NestJs SDK',
      description:
        `This package provides a simple way to integrate Amazon's Product Advertising API 5.0 with your NestJS application. It includes a service and module that handles authentication, request signing, and API interactions with Amazon's Product Advertising platform.`,
      repoUrl: 'https://github.com/appasahebnage/nest-paapi-5',
      demoUrl: 'https://www.npmjs.com/package/nest-paapi-5?activeTab=readme',
      techStack: ['NestJs', 'TypeScript', 'JavasScript'],
    },
  ];
}
