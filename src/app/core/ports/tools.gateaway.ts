import { Observable } from "rxjs";
import { FormattedToolsDatas } from "../models/toolsDatas.model";

export abstract class ToolsGateway {

    abstract sendValuation(datas:FormattedToolsDatas):Observable<any>

    abstract sendAdvertising(datas:FormattedToolsDatas):Observable<any>

}