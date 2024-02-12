import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import{MatToolbarModule} from '@angular/material/toolbar'
import{MatSidenavModule} from '@angular/material/sidenav'
import {MatGridListModule} from '@angular/material/grid-list'
import {MatCardModule} from '@angular/material/card'
import{MatTableModule} from '@angular/material/table'
import { MatDialogModule } from '@angular/material/dialog';
const MaterialComponents = [
    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule
];

@NgModule({
    imports: [MaterialComponents],
    exports:[MaterialComponents]
})
export class MaterialModule{}