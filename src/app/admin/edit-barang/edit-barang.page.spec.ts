import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditBarangPage } from './edit-barang.page';

describe('EditBarangPage', () => {
  let component: EditBarangPage;
  let fixture: ComponentFixture<EditBarangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBarangPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditBarangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
