import { Pipe, PipeTransform } from '@angular/core';
import { Bookmark } from './bookmark';

@Pipe({name: 'bookmarkSort', pure: false})
export class BookmarkSortPipe implements PipeTransform {
   transform (values: Bookmark[]) : Bookmark[] {
       if (values) {
           values.sort((first: Bookmark, second: Bookmark) => {
               if (first.priority > second.priority) {
                   return -1;
               }
               if (first.priority < second.priority) {
                   return 1;
               }
               return 0;
           });
       }
       return values;
   }
}
