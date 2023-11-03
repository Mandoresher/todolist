import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdCreatorService {
  private taskIdCounter = 1;

  generateTaskId(): number {
    return this.taskIdCounter++;
  }
}
