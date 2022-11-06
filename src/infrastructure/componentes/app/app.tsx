import { Auth0Provider } from '@auth0/auth0-react';
import { GifContextProvider } from '../../context/provider';
import { Layout } from '../layout/layout';
import { AppRoutes } from '../routes/app.routes';

export function App() {
    return (
        <Auth0Provider
            name="Mockify-202210-mad"
            domain="dev-y8zew6g3nkhvdzh8.eu.auth0.com"
            clientId="fjXa2HHMA95yLnIpUK61EMP4XQ5p7bK2"
            redirectUri="http://localhost:3000/Home/0"
            clientSecret="3Wylh8sXsj-QHTWNUbOUuyec_hVrIa6kQU1U1qJEcRtr1Bg_hph_NhnCJH_AcpNL"
        >
            <Layout>
                <GifContextProvider>
                    <AppRoutes></AppRoutes>
                </GifContextProvider>
            </Layout>
        </Auth0Provider>
    );
}
