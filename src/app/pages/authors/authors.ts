import { Component, OnInit, inject, signal } from '@angular/core';
import { AuthorsService } from '../../services/authors/authors-service';
import { Author } from '../../services/types';

@Component({
  selector: 'app-authors',
  imports: [],
  templateUrl: './authors.html',
  styleUrl: './authors.css'
})
export class Authors implements OnInit {
  private authorsService = inject(AuthorsService);

  public authors = signal<Author[]>([]);

  public ngOnInit(): void {
    this.authorsService.getAuthors().subscribe((data) => {
      this.authors.set(data.payload.items);
    });
  }

  public imageErrorHandle(event: ErrorEvent): void {
    const img = event.target as HTMLImageElement;
    img.src = '/images/bookDefault.png';
  }
}
