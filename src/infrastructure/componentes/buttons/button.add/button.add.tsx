import { useContext } from 'react';
import { GifContext } from '../../../context/context';
import { IElementData } from '../../../models/data';

export function ButtonAdd({ item }: { item: IElementData }) {
    const { handleAdd } = useContext(GifContext);
    const handleClickAdd = () => {
        handleAdd(item);
    };

    return (
        <section>
            <button
                className={`♡`}
                onClick={handleClickAdd}
                style={{ width: '150px', height: '50px', fontSize: '2rem' }}
            >
                ♡
            </button>
        </section>
    );
}
