import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IGifsData } from '../../../infrastructure/models/data';

import { getGifById } from '../../../infrastructure/services/gifs.api';

export function DetailsPage() {
    let template: JSX.Element;
    const { id } = useParams();

    const initialStateDetails = {
        data: {
            id: '',
            title: ``,
            images: {
                downsized: {
                    url: '',
                },
            },
        },

        pagination: {
            count: 0,
            offset: 0,
        },
    };

    const [gifDetails, gifDetailsState] = useState(initialStateDetails);

    useEffect(() => {
        if (id !== undefined) {
            getGifById(id).then((resps) => {
                gifDetailsState(resps);
            });
        }
    }, [id]);
    console.log(gifDetails);

    gifDetails.data.id
        ? (template = (
              <>
                  <p>Loading</p>
              </>
          ))
        : (template = (
              <div className="details">
                  <h1>Details</h1>
                  <p>{id}</p>
                  <img src={gifDetails.data.images.downsized.url} alt="" />
              </div>
          ));

    // return (
    //     <div className="details">
    //         <h1>Details</h1>
    //         <p>{id}</p>
    //         <img src={gifDetails.images.downsized.url} alt="" />
    //     </div>
    // );
    return template;
}
