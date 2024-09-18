import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        MatToolbarModule,
        CommonModule,
        RouterModule
    ],
    exports: [
        HeaderComponent
    ]
})

export class CoreModule {}