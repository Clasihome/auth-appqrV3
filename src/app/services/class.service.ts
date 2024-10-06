import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private firestore: AngularFirestore) { }
  
  createClass(className: string): Promise<any> {
    const classData = {
      name: className,
      createdAt: new Date()
      
    };
    return this.firestore.collection('classes').add(classData);
  }

  // Obtener todas las clases (opcional si lo necesitas)
  getClasses(): Observable<any[]> {
    return this.firestore.collection('classes').valueChanges();
  }

}
