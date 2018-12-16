import { Pipe , PipeTransform} from "@angular/core";

@Pipe({
    name: 'VND'
})
export class VNDPipe implements PipeTransform{
    transform(value: any){
        return value + 'K';
    }
}