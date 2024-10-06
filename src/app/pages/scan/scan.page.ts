import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { BarcodeScanningModalComponent } from './barcode-scanning-modal.component';
import { format } from 'path';
import { LensFacing, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
  
  
export class ScanPage implements OnInit {

  scanResult = '';


  constructor(
    private modalController: ModalController,
    private platform: Platform) { }

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
  

 

}
