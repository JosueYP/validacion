import { Component, OnInit } from '@angular/core';
import {
	FormControl,
	FormGroup,
	FormBuilder,
	Validators
} from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	formGroup: FormGroup;
	formControl: FormControl;
	cantidad: number = 3000;

	campo1: number;
	campo2: number;
	suma: number;

	constructor(private formBuilder: FormBuilder) {

	}

	ngOnInit() {
		this.buildForm();
	}

	validar(control: FormControl, control1: FormControl) {
		let campo1 = control.value;
		let campo2 = control.value;
		let suma: number;
		suma = campo1 + campo2;
		if (suma > this.cantidad) {
			return {
				resultado: true
			}
		} else {
			return {
				resultado: false
			}
		}
	}

	buildForm() {
		this.formGroup = this.formBuilder.group({
			campo1: ['', [Validators.required, this.miValidar]],
			campo2: ['', [Validators.required]]
		})
	}

	miValidar(control: FormControl) {
		console.log('increible, fantastico')
		console.log(control.value, 'El control de fantastico')

		if(this){
			console.log('1')
			console.log(this.formGroup)
			console.log('1')

		}
		this.formGroup
	}

	validacion() {
		this.campo1 = parseInt(this.formGroup.controls['campo1'].value);
		this.campo2 = parseInt(this.formGroup.controls['campo2'].value);

		this.suma = this.campo1 + this.campo2;
		console.log(this.suma);

		if(this.suma > this.cantidad){
			return { resultado: true }
		}else{
			return { resultado: false }
		}

	}

}
