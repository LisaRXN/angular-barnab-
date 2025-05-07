import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';
import { Observable } from 'rxjs';
import { ToolsGateway } from '../../ports/tools.gateaway';
import { FormattedToolsDatas } from '../../models/toolsDatas.model';

export class HttpValuationGateway extends ToolsGateway {
  http = inject(HttpClient);

  override sendValuation(datas:FormattedToolsDatas): Observable<any> {
    return this.http.post(environment.apiURL + `/cityscan/leads`, datas, {
      observe: 'response',
    }) 
  }

  override sendAdvertising(datas:FormattedToolsDatas): Observable<any> {
    return this.http.post(environment.apiURL + `/openai/createDescription`, datas, {
      observe: 'response',
    }) 
  }
}
