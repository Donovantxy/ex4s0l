import { LocalStorageService } from "../app/services/local-storage.service";

export const spyLocalStorageService = () => jasmine.createSpyObj<LocalStorageService>('LocalStorageService', ['get', 'set', 'remove']);