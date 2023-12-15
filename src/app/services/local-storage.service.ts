import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public get(key: string): any {
    const result = localStorage.getItem(key);
    if (result !== null && result !== '') {
      const valueParsed = JSON.parse(result);
      return (valueParsed._value !== undefined) ? valueParsed._value : valueParsed;
    }
    return result;
  }

  public set<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public remove(key: string) {
    localStorage.removeItem(key);
  }

}