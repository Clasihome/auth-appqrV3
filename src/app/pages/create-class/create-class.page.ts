import { Component } from '@angular/core';
import { ClassService } from 'src/app/services/class.service';
import { Router } from '@angular/router';
import * as QRcode from 'qrcode';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.page.html',
  styleUrls: ['./create-class.page.scss'],
})
export class CreateClassPage {
  className: string = '';
  qrCodeUrl: string = '';
  private _classID: string = ''; // Variable privada para almacenar classID

  constructor(private classService: ClassService, private router: Router) {}

  get classID(): string {
    return this._classID; // Getter para classID
  }

  createClass() {
    if (this.className.trim() === '') {
      return alert("Por favor, ingresa un nombre para la clase.");
    }
  
    this.classService.createClass(this.className)
      .then((docRef) => {
        this._classID = docRef.id; // Almacenar el classID en la variable
        this.generateQRCode(this._classID); // Generar el código QR
        alert("Clase creada correctamente: " + this._classID);  // Mensaje de éxito
      })
      .catch((error) => {
        alert("Error al crear la clase: " + error.message); // Mostrar mensaje de error con el detalle
        console.error('Error al crear la clase:', error); // También puede ser útil para depuración
      });
  }

  generateQRCode(classID: string) {
    const qrData = `${classID}`;
    QRcode.toDataURL(qrData, (err: any, url: string) => {  // Agregando tipos para los parámetros
      if (err) {
        console.error('Error generating QR:', err);
        return;
      }
      this.qrCodeUrl = url;
    });
  }
}