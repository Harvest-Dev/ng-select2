import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { data1 } from './app.data';

@Component({
    selector: 'app-root',
    templateUrl: './app-gen.component.html',
    styleUrls: ['./app-gen.component.scss']
})
export class AppGenComponent {
    data = data1;


    ctrlForm: FormGroup;

    constructor(private fb: FormBuilder) {

        this.ctrlForm = this.fb.group({
            json: new FormControl(null),
            disabled: new FormControl(null),
            minCharForSearch: new FormControl(null),
            minCountForSearch: new FormControl(null),
            displaySearchStatus: new FormControl(null),
            placeholder: new FormControl(null),
            customSearchEnabled: new FormControl(null),
            multiple: new FormControl(null),
            resettable: new FormControl(null),
            limitSelection: new FormControl(null),
            hideSelectedItems: new FormControl(null),
            resultMaxHeight: new FormControl(null),
            listPosition: new FormControl(null),
            material: new FormControl(null),
            noStyle: new FormControl(null)
        });

        this.ctrlForm.valueChanges.subscribe(() => {
            const a = this.ctrlForm.value;
            console.log(a);
        });
    }

}
