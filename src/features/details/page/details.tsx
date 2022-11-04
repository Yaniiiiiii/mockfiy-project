import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getGifById } from '../../../infrastructure/services/gifs.api';

export function DetailsPage() {
    const { id } = useParams();

    const initialStateDetails = {
        id: id,
        title: ``,
        images: {
            downsized: {
                url: '',
            },
        },
    };

    const [gifDetails, gifDetailsState] = useState(initialStateDetails);

    useEffect(() => {
        getGifById(gifDetails.id as string).then((resps) => {
            gifDetailsState(resps);
        });
    }, []);
    console.log(gifDetails);

    return (
        <div className="details">
            <h1>Details</h1>
            <p>{id}</p>
            {/* <img src={gifDetails.images.downsized.url} alt="" /> */}
        </div>
    );
}
