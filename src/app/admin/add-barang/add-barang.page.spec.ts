import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddBarangPage } from './add-barang.page';

describe('AddBarangPage', () => {
  let component: AddBarangPage;
  let fixture: ComponentFixture<AddBarangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBarangPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddBarangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
