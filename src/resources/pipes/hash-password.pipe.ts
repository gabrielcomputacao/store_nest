import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class HashPasswordPipe implements PipeTransform {
  transform(password: string) {
    return password + 'abcdef';
  }
}
