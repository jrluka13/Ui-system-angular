import { FileSystemItemTypes } from '../enums/file-system-item-types';

export abstract class BaseFileSystemItem {
    type!: FileSystemItemTypes;

    constructor(public name: string) {}
}

export class FolderModel extends BaseFileSystemItem {
    type = FileSystemItemTypes.folder;
    children: Array<File | FolderModel> = [];
}

export class FileModel extends BaseFileSystemItem {
    name!:string
    type = FileSystemItemTypes.file;
}