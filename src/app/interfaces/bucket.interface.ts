import File from './file.interface';

export default interface Bucket {
  name: string;
  location: string;
  files: File[];
}
