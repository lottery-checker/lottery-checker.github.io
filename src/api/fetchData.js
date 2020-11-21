import { zip, timer } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { map, mergeMap } from 'rxjs/operators';
export const fetchData = () => {
    const URL = 'http://gsx2json.com/api?id=1UlhN-RxMqRYxWG3dzdNqBp1ii673_3g_x79siiLyFxs&sheet=2&columns=false';
    return zip(
        fromFetch(URL).pipe( mergeMap(r => r.json()) ),
        timer(500) // set a timer for 500ms
      ).pipe(
        // then take only the first value (fetch result)
        map(([data]) => data)
      )
}