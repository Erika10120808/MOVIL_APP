import type { CapacitorConfig } from '@capacitor/cli';
import { HomePage } from 'src/app/home/home.page';
import { beforeEach, expect } from 'src/app/home/home.page.spec';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'app_S1',
  webDir: 'www'
};

export default config;
describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
