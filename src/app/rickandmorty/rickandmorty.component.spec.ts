import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickAndMortyComponent } from './rickandmorty.component';

describe('RickandmortyComponent', () => {
  let component: RickAndMortyComponent;
  let fixture: ComponentFixture<RickAndMortyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RickAndMortyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RickAndMortyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
