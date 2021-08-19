import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name:'search'
})
export class SearchPipe implements PipeTransform {
    // transform(companies: string[], searchValue: string): any[]{
    //     if(!searchValue) {
    //         return  [];
    //     }
    //     searchValue = searchValue.toLowerCase();
    //    return companies.filter(
    //        x =>x.toLowerCase().includes(searchValue)
    //    )
    //  }
    transform(value: any, args?: any): any {

      if(!value)return null;
      if(!args)return value;
      console.log(args);
      console.log(value);
      args = args.toLowerCase();

      console.log( value.filter(function(item: any){
        return JSON.stringify(item).toLowerCase().includes(args);
    }))
      return value.filter(function(item: any){
          return JSON.stringify(item).toLowerCase().includes(args);
      });
  }
}
