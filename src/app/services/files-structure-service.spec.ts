import { FilesStructureService } from './files-structure-service';
import { FILES_STRUCTURE } from '../data';

describe('FilesStructureService', () => {
  let service: FilesStructureService;

  beforeEach(() => {
    service = new FilesStructureService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return FILES_STRUCTURE', function () {
    expect(service.getFilesStructure()).toEqual(FILES_STRUCTURE);
  });
});
