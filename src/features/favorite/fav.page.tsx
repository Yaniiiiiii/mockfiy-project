import { useContext } from 'react';
import { Giflist } from '../../infrastructure/componentes/gif.list/gif.list';
import { GifContext } from '../../infrastructure/context/context';

export function FavPage() {
    const { localGif } = useContext(GifContext);

    console.log(localGif);
    return (
        <div className="favorite">
            <h1>My favorite GIFs</h1>
            <Giflist data={localGif}></Giflist>
        </div>
    );
}
