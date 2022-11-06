import { useContext } from 'react';
import { Giflist } from '../../infrastructure/componentes/gif.list/gif.list';
import { Header } from '../../infrastructure/componentes/header/header';
import { GifContext } from '../../infrastructure/context/context';

function FavPage() {
    const { localGif } = useContext(GifContext);

    return (
        <>
            <div className="favorite">
                <Header title="My favorite GIFs" />
                <Giflist data={localGif}></Giflist>
            </div>
        </>
    );
}
export default FavPage;
