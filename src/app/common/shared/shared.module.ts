import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';

@NgModule({
  declarations: [],
  exports: [CommonModule, MaterialModule],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
		return {
			ngModule: SharedModule,
			providers: []
		};
	}
}
