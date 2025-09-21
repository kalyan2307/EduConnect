import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EduConnectRoutingModule } from "./educonnect-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { TeacherCreateComponent } from "./components/teachercreate/teachercreate.component";
import { CourseCreateComponent } from "./components/coursecreate/coursecreate.component";
import { StudentCreateComponent } from "./components/studentcreate/studentcreate.component";
import { EnrollmentComponent } from "./components/enrollment/enrollment.component";

@NgModule({
  declarations: [
    TeacherCreateComponent,
    CourseCreateComponent,
    StudentCreateComponent,
    EnrollmentComponent
  ],
  imports: [
    CommonModule,
    EduConnectRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  exports: []
})
export class EduconnectModule {}