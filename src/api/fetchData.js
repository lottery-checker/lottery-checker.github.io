import { zip, timer, of } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { map, catchError, mergeMap } from 'rxjs/operators';
export const fetchData = () => {
    const REACT_APP_API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
    const URL = `${REACT_APP_API_ENDPOINT}/api?id=1UlhN-RxMqRYxWG3dzdNqBp1ii673_3g_x79siiLyFxs&columns=false`;
    // wait for both fetch and a 500ms timer to finish
    return zip(
      fromFetch(URL).pipe( mergeMap(r => r.json()) ),
      timer(500) // set a timer for 500ms
    ).pipe(
      // then take only the first value (fetch result)
      map(([data]) => ({ error: false, data: data.rows})),
      catchError((err) => {
        return of({ error: true, data: [], message: err.message })
      })
    )
}