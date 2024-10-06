import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { BarcodeScanningModalComponent } from './barcode-scanning-modal.component';
import { LensFacing, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
  
  
export class ScanPage implements OnInit {

  scanResult = '';


  constructor(
    private modalController: ModalController,
    private platform: Platform,
    private firestore: AngularFirestore, // Inyección de Firestore
    private authService: AuthService ) { }

  ngOnInit(): void {
    if (this.platform.is('capacitor')) {
      BarcodeScanner.isSupported().then();
      BarcodeScanner.checkPermissions().then();
      BarcodeScanner.removeAllListeners();
      
    }

  }



  async startScan() {
    const modal = await this.modalController.create({
      component: BarcodeScanningModalComponent,
      cssClass: 'barcode-scanning-modal',
      showBackdrop: false,
      componentProps: { 
        format: [],
        lensFacing: LensFacing.Back
     }
    });
  
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data) {
      this.scanResult=data?.barcode?.displayValue
      
    }
  
  }
  async registrarAsistencia(scanResult: string) {
    const user = await this.authService.getCurrentUser(); // Obtener UID del usuario actual

    if (user && scanResult) {
      const registroAsistencia = {
        uid: user.uid,
        fecha: new Date(),
      };

      // Guardar asistencia en la clase identificada por scanResult
      this.firestore.collection('classes').doc(scanResult).collection('asistencias').add(registroAsistencia)
        .then(() => {
          console.log('Asistencia registrada correctamente');
        })
        .catch((error) => {
          console.error('Error al registrar asistencia: ', error);
        });
    }
  }
  

 

}
