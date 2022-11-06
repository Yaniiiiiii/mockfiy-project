import { useContext } from 'react';
import { Giflist } from '../../infrastructure/componentes/gif.list/gif.list';
import { Header } from '../../infrastructure/componentes/header/header';
import { GifContext } from '../../infrastructure/context/context';

function FavPage() {
    const { localGif } = useContext(GifContext);

    return (
        <>
            <div className="favorite">
                <h1>
                    <Header title="My favorite GIFs" />
                </h1>
                <Giflist data={localGif}></Giflist>
            </div>
        </>
    );
}
export default FavPage;
