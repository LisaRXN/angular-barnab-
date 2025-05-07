import { ToolsGateway } from '../../ports/tools.gateaway';
import { FormattedToolsDatas } from '../../models/toolsDatas.model';
import { Observable, of } from 'rxjs';

export class InMemoryToolsGateway extends ToolsGateway {

  override sendValuation(datas:FormattedToolsDatas): Observable<any> {
    console.log('Les données de l\'estimation sont bien enregistrées :', datas)
    return of()
  }
  override sendAdvertising(datas:FormattedToolsDatas): Observable<any> {
    console.log('Les données de la rédaction sont bien enregistrées :', datas)
    return of()
  }
}
