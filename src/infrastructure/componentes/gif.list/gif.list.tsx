import { IElementData } from '../../models/data';

export function Giflist(data: Array<IElementData>) {
    const GifData = data;
    return (
        <section>
            <ul>
                {GifData.map((item: IElementData) => (
                    <></>
                ))}
            </ul>
        </section>
    );
}
