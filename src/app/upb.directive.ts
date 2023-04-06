
//igual que los componentes las directivas tienen que ir dentro de un modulo, hay que ponerlo en el app.module.ts
import { Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[upb]',
})
export class UpbDirective implements OnInit, OnChanges {

    //por lo visto en las directivas estructurales el input tiene que tener el mismo nombre que la directiva
    @Input() upb: boolean = true;

    //estos dos parametros son obligatorios en una directiva estructural(*ngIf, *ngFor.....)
    //el viewContainer haria referencia al ng-container que usamos en el html
    //el templateRef seria codgo html que queremos inyectar en el viewContainer
    constructor(private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef) {

        /* */


    }
    //con esto no cambia cada vez que pulsamos el check box porque esto solo se ejecuta una vez al
    //inicio, despues de renderizarse en el dom
    ngOnInit(): void {

        /* if (this.upb) {

            this.viewContainer.createEmbeddedView(this.templateRef);
            console.log(this.templateRef);

        } else {
            this.viewContainer.clear();
        }*/

    }

    ngOnChanges(_changes: SimpleChanges){

        console.log("yrrrr");

        if (_changes['upb'].currentValue === true) {

            this.viewContainer.createEmbeddedView(this.templateRef);
            console.log(this.templateRef);

        } else {
            this.viewContainer.clear();
        }
        

    }

}

